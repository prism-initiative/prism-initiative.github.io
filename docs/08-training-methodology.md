# PRISM: Training Methodology

PRISM's approach to training represents a significant innovation in how artificial intelligence can learn to recognize patterns in medical data. This document explores the philosophical foundation of PRISM's training methodology, the technical implementation of its two-stage fine-tuning process, and how the system learns from different types of historical cases.

## The "Usefully Wrong" Philosophy

When discussing artificial intelligence in healthcare, there's often an implicit assumption that the technology needs to be right most of the time to be valuable. This assumption makes sense in many contexts—you want high accuracy for interpreting X-rays or analyzing blood tests. But PRISM takes a fundamentally different approach to AI-assisted medical screening, one where being "wrong" 99% of the time could still represent remarkable success.

Consider how rare conditions are typically discovered in medicine. A patient might see multiple specialists over several years, each running tests and exploring possibilities before someone finally identifies the underlying condition. This process of elimination and exploration is normal and necessary in medicine. The challenge isn't that doctors are making mistakes—it's that some patterns are inherently difficult to spot, especially when symptoms develop gradually or appear unrelated.

PRISM's core innovation is embracing this reality rather than fighting against it. Instead of trying to be right most of the time, the system is designed to identify possibilities worth considering. If one out of every hundred suggestions leads to an early diagnosis that benefits the patient, that's not just acceptable—it's a triumph.

This philosophy shapes every aspect of how PRISM is developed and trained:
- In the initial training phase, models are allowed to generate many potential patterns, developing diverse perspectives rather than converging on only the most common ones
- During fine-tuning, confirmed cases serve as positive examples while problematic patterns are used as negative examples
- The system maintains diversity in its predictions rather than becoming too conservative
- Multiple models bring independent perspectives, with consensus providing stronger evidence for healthcare providers to consider

The mathematics of rare conditions underscores the value of this approach. If a condition affects one in ten thousand people, then a system that can identify it early even 1% of the time could help hundreds of patients in a large healthcare system. Each early diagnosis potentially represents months or years of improved quality of life, not to mention reduced healthcare costs from avoiding complications.

## Learning from Three Types of Historical Cases

PRISM's training relies heavily on learning from three distinct types of historical cases, each providing crucial insights into pattern recognition:

### GOOD Examples

These cases represent the gold standard of early detection success stories—patients whose conditions were caught early through screening tests, followed by records showing successful early treatment with good outcomes.

For example, a GOOD example might show a patient whose primary care physician recognized subtle early symptoms of primary aldosteronism (a hormonal condition causing hypertension), ordered the appropriate aldosterone-to-renin ratio test, and started treatment with spironolactone. The records would show the patient's blood pressure normalizing, potassium levels returning to normal, and no development of serious complications.

These cases teach PRISM valuable patterns about what early opportunities for beneficial screening look like and what positive outcomes follow from early intervention.

### BAD Examples

BAD examples represent missed opportunities—cases where the same conditions were detected later, after symptoms had progressed, resulting in more complex treatments, interventions, and often permanent complications.

A BAD example might show a patient with similar initial symptoms who cycled through multiple blood pressure medications over several years without improvement, experienced emergency room visits for severe headaches, and eventually received the correct diagnosis only after developing heart failure and kidney disease.

These cases help PRISM learn to recognize similar patterns earlier in their development by understanding the consequences of delayed detection.

### NOPE Examples

The NOPE examples represent a critical training category: patients who present with similar symptoms and receive the same diagnostic testing, but ultimately have a different underlying condition.

A NOPE example might show a patient with resistant hypertension and fatigue who receives testing for primary aldosteronism, but whose test results come back normal. Further evaluation reveals sleep apnea as the underlying cause of their symptoms.

These cases help PRISM become more discerning in its pattern recognition, understanding that similar presenting patterns can have different underlying causes. This helps reduce false positives and improve the specificity of its suggestions.

By training on all three types of cases, PRISM learns to:
- Recognize early warning patterns that should trigger specific screening tests
- Understand when in the disease progression screening is most valuable
- Avoid false alarms by distinguishing between patterns that warrant screening and those that don't
- Balance sensitivity and specificity for different conditions

## Technical Implementation: Two-Stage Fine-Tuning

PRISM employs a sophisticated two-stage fine-tuning approach using Meta's Llama-3.1 as the foundation model, with QLoRA (Quantized Low-Rank Adaptation) to make training efficient and practical.

### Base Model Selection

We've selected the non-instruct/base **Meta Llama-3.1** as our foundation model. This provides us with:
- Advanced pattern recognition capabilities
- Strong contextual understanding
- Excellent performance on complex tasks
- Support for long context windows

While the eventual production system will use the 70B parameter version, development and testing can be performed with smaller models from the same family.

### Stage 1: Supervised Fine-Tuning (SFT)

The first stage teaches the model to understand patterns in medical histories—essentially learning the language of healthcare delivery and typical progression of care.

**Training Data:**
The SFT stage uses ALL patient histories from insurance company systems, all conforming to the standardized Five Ws format. This typically involves millions of examples representing diverse patient populations and care patterns.

**Training Approach:**
Rather than using percentage-based splitting, we use fixed-length approaches for consistency. The system learns to understand the temporal relationships between different medical events, the typical progression from generalists to specialists, common diagnostic pathways, and standard treatment sequences.

**Training Objective:**
This stage creates a foundation of general medical pattern recognition before introducing the nuances of early detection. The model learns progression patterns across various conditions and patient types, developing an understanding of how healthcare typically unfolds for different situations.

One SFT adapter is created for each pool of patients, representing that pool's unique pattern characteristics while maintaining patient privacy.

### Stage 2: Binary Classification Objective (BCO)

The second stage builds on the foundation of the first, teaching the model when to recommend specific early diagnostic tests. This is where the GOOD/BAD/NOPE examples play a crucial role.

**Training Data Categories:**
We use three categories of examples, each with specific characteristics:

1. **GOOD Examples:**
   - **Prompt:** All data before the diagnostic test
   - **Completion:** Exactly 10 rows starting at the first instance of the diagnostic test
   - **Label:** True (1)
   - These are cases where the diagnostic test was ordered early and led to better outcomes

2. **BAD Examples:**
   - **Prompt:** All data before the 10 rows preceding (but not including) the diagnostic test
   - **Completion:** The 10 rows just before the diagnostic test
   - **Label:** False (0)
   - These are cases where the test was ordered too late, leading to more complicated treatment
   - This approach ensures the model never sees late testing as acceptable - it learns to identify patterns that require intervention BEFORE the late-stage symptoms develop

3. **NOPE Examples:**
   - **Prompt:** All data before the diagnostic test
   - **Completion:** Exactly 10 rows starting at the diagnostic test
   - **Label:** False (0)
   - These are cases where the test was performed but didn't lead to a diagnosis of the condition

**Training Objective:**
This stage teaches the model to recognize subtle patterns that should trigger a recommendation for specific diagnostic tests, while also learning when such recommendations would be inappropriate. The binary classification approach allows the model to learn directly from real-world examples without requiring artificial pairwise comparisons.

One BCO adapter is created for each pool/condition combination, creating a highly specialized set of adapters that can be used together at inference time.

### QLoRA: Efficient Adaptation

PRISM uses QLoRA (Quantized Low-Rank Adaptation) for several important reasons:

1. **Memory Efficiency:** QLoRA allows us to fine-tune large models on limited GPU resources by:
   - Quantizing the base model to 8-bit precision (providing quality and efficiency advantages over lower precision approaches)
   - Only training a small number of adapter parameters rather than the full model

2. **Training Efficiency:** 8-bit quantization enables:
   - Faster training iterations
   - Lower GPU memory requirements
   - The ability to train on consumer or mid-range GPUs rather than requiring specialized hardware

3. **Performance Preservation:** QLoRA maintains most of the capabilities of the original model while enabling efficient adaptation:
   - The low-rank adapters capture task-specific information
   - The original model's knowledge is preserved through the frozen weights
   - This approach prevents catastrophic forgetting of the model's fundamental capabilities

4. **Practical Deployment:** The resulting adapted models are:
   - Much smaller than full fine-tuned models (typically <1GB of adapter weights)
   - Easily deployable in production environments
   - Can be merged, stacked, or combined as needed
   - Allow for experimentation with entirely new training techniques

### Multiple Condition-Specific Adapters

A key innovation in PRISM's approach is the creation of multiple condition-specific BCO QLoRA adapters. Each adapter is trained to recognize patterns related to a specific medical condition or group of related conditions.

These BCO adapters are used in conjunction with the SFT adapter representing a particular patient pool. They can be used simultaneously at inference time, allowing a single DIGITS device to effectively represent multiple models from the ensemble. This approach provides several advantages:

1. **Efficient Resource Usage:** A single NVIDIA DIGITS box can run multiple condition checks by using different combinations of adapters
2. **Specialized Expertise:** Each adapter develops deep expertise in recognizing patterns for specific conditions
3. **Powerful Combinations:** Different combinations of SFT and BCO adapters can be explored for optimal performance
4. **Easier Updates:** New condition adapters can be added without disrupting existing ones
5. **Experimental Flexibility:** The adapter approach allows for testing entirely new training methodologies alongside the established ones

## The Learning Process

PRISM's learning process is designed to balance multiple objectives:

1. **General Understanding:** The SFT stage provides a broad understanding of medical sequences and patterns
2. **Specialized Recognition:** The BCO stage teaches condition-specific pattern recognition
3. **Independence:** Training multiple models on different data subsets creates diversity of perspective
4. **Consensus Building:** The ensemble approach brings these independent perspectives together

This multi-faceted learning process creates a system that can recognize both common patterns and subtle early indicators that might suggest opportunities for beneficial screening.

## Continuous Improvement Through Outcome Tracking

As PRISM processes more data, its pattern recognition capabilities continue to improve. By incorporating PRISM-specific diagnostic codes for tests ordered based on its suggestions, the system can track outcomes when these codes appear in future data ingestion cycles.

This creates a feedback loop without requiring direct physician input. When a physician orders a suggested test and includes the PRISM-specific code, that outcome becomes part of the patient's history. During future data processing, PRISM can identify whether its suggestions led to GOOD, BAD, or NOPE outcomes without knowing patient identities.

The system's modular architecture allows for ongoing improvements:
- New SFT models can be trained as more data becomes available
- Additional condition-specific BCO adapters can be developed
- Existing adapters can be refined based on observed outcomes
- Consensus thresholds can be adjusted based on performance metrics

This creates a virtuous cycle where the system becomes increasingly effective at identifying opportunities for beneficial early intervention while reducing unnecessary suggestions over time.

## Validation Through Historical Analysis

PRISM includes a robust validation framework that leverages historical data to evaluate performance before deployment. By taking historical patient records where certain screenings were eventually needed, truncating the history to just before those screenings were ordered, and seeing if the system would have suggested those same screenings earlier, we can measure effectiveness without risking patient care.

This validation approach serves multiple purposes:
- It provides a practical way to measure the system's accuracy
- It helps calibrate consensus thresholds for different conditions
- It allows for continuous evaluation as new models join the ensemble
- It helps identify which patterns are most reliable for different conditions

By validating against real historical outcomes, we can ensure the system is providing valuable, actionable insights before it's deployed in clinical settings.
