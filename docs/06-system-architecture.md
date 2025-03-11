# PRISM: System Architecture

PRISM's architecture represents a novel approach to medical pattern recognition, combining structured data representation, ensemble modeling, and vector space mathematics to identify opportunities for beneficial early screening. This document explores the core components that make this possible.

## The Five Ws Data Framework

At the foundation of PRISM lies a structured approach to representing patient medical histories: the Five Ws framework. This framework transforms complex medical histories into standardized sequences that capture the essential narrative while maintaining strict privacy protections.

Each medical event in a patient's history is represented as a row in a table with five columns:

### WHO: Provider Specialization

The "Who" column identifies the type of healthcare provider involved in each event using the National Uniform Claim Committee (NUCC) Health Care Provider Taxonomy Codes. These standardized codes indicate the specialty and subspecialty of the healthcare provider without revealing their identity.

Example: `NUCC-207X00000X: Orthopaedic Surgery`

### WHAT: Procedures and Products

The "What" column captures the specific procedure, service, or product provided, using one of three standardized coding systems:

1. **Current Procedural Terminology (CPT)** codes for medical, surgical, and diagnostic services
2. **Healthcare Common Procedure Coding System (HCPCS)** codes for medical supplies and equipment
3. **National Drug Code (NDC)** numbers for prescription and over-the-counter medications

When modifiers are present, they're chained onto the base code with dashes, providing important details about how and where procedures were performed.

Example: `CPT-29881-59-RT: Arthroscopy, knee, surgical; with meniscectomy (medial or lateral, including any meniscal shaving); Distinct procedural service; Right side`

### WHEN: Temporal Anchoring

The "When" column records the date of service in the international standard ISO 8601 format (YYYY-MM-DD), providing crucial temporal context for understanding the progression of care.

Example: `2023-06-15`

### WHERE: Service Location

The "Where" column uses Centers for Medicare & Medicaid Services (CMS) Place of Service (POS) codes to indicate where each medical service was delivered, providing context about the nature and setting of care.

Example: `POS-22: On Campus-Outpatient Hospital`

### WHY: Diagnostic Context

The "Why" column uses International Classification of Diseases, 10th Revision (ICD-10) codes to indicate the medical reasons for each service. Multiple diagnoses can be listed for a single event, separated by semicolons.

Example: `ICD10-E26.09: Other primary hyperaldosteronism; ICD10-I50.9: Heart failure, unspecified`

This structured approach serves multiple purposes:
- It maintains consistency across different healthcare providers and systems
- It preserves the sequence and relationships between medical events
- It captures sufficient detail for pattern recognition while excluding sensitive information
- It allows for standardized analysis across different patient populations

## Ensemble Architecture: Independent Model Training

PRISM's ensemble architecture represents a significant innovation in how we approach medical pattern recognition. Rather than training a single large model on all available data, PRISM deliberately segments its training data into completely separate pools, ensuring each model in the ensemble develops its own independent "perspective" on pattern recognition.

PRISM's ensemble approach can be understood through a practical medical analogy: imagine consulting multiple specialists, each trained at different hospitals with distinct patient populations and practice environments. When all these experts—who developed their expertise independently and have never collaborated—examine the same case and arrive at identical recommendations, their consensus carries significantly more weight than if they had all trained at the same institution or followed the same diagnostic protocol.

This is precisely how PRISM's ensemble works—multiple AI models, each trained on entirely separate patient populations, independently analyze the same medical history. When several models suggest the same screening test despite their different "training backgrounds," it provides compelling evidence that the pattern represents a genuine medical signal rather than an artifact of any particular dataset or training approach. This deliberate independence between models creates a natural cross-validation system that significantly improves reliability in pattern recognition.

### Data Segmentation Strategy

The training process begins with thoughtful segmentation of patient profiles across different models. Each segment maintains representative demographic distributions while keeping individual patient histories intact. This segmentation is permanent for each model instance, ensuring independence throughout the entire process.

When new implementation partners join the PRISM ecosystem, they train their own models on their historical data, further diversifying the ensemble's perspectives. The more organizations that participate, the richer and more diverse the ensemble becomes.

### Independence as Strength

This independence creates several important advantages:
- When multiple models trained on different populations agree on a pattern, it suggests the pattern represents a genuine medical signal rather than an artifact of any particular dataset
- The approach naturally reduces false positives by requiring consensus across models with different training backgrounds
- It allows for continuous improvement as new models join the ensemble
- It maintains privacy by sharing only the trained models, never the underlying patient data

### Three-Pattern Learning Approach

PRISM's models learn to recognize three distinct types of patterns:

1. **GOOD Examples**: Cases where early testing led to timely diagnosis and better outcomes
2. **BAD Examples**: Cases where delayed testing resulted in disease progression and complications
3. **NOPE Examples**: Cases where testing was performed but didn't lead to a diagnosis of the condition

This three-pattern approach provides crucial context for pattern recognition. It's not enough to simply identify patterns that might indicate a particular condition; the system needs to understand which patterns specifically indicate opportunities for beneficial early intervention, and how to distinguish them from similar patterns that might lead to different diagnoses.

By learning from all three types of examples, the models develop a nuanced understanding of when specific screening tests are likely to be beneficial.

## Vector Representations in Medical Sequence Analysis

PRISM transforms medical billing sequences into high-dimensional vector spaces where histories with similar underlying patterns end up mathematically "closer" to each other, even when their surface details differ considerably.

### Mathematical Pattern Recognition

Each event in a patient's history carries multiple dimensions of information through the Five Ws framework. When converted into vector representations, these sequences preserve meaningful relationships between different provider specialties, procedures, diagnoses, and locations of care.

This mathematical approach allows PRISM to:
- Recognize similar patterns even when they manifest through different combinations of providers, tests, or medications
- Identify subtle early warning signs that might be missed when analyzing individual events in isolation
- Compare developing patterns against historical cases where early intervention led to better outcomes
- Maintain privacy while preserving the essential patterns needed for analysis

### Trajectory Analysis

Vector representations allow PRISM to understand patient histories as trajectories through high-dimensional space. Each billing code sequence becomes a path that captures not just what medical events occurred but how they related to each other temporally and contextually.

The system learns to recognize trajectories that historically led to beneficial early screening opportunities, helping identify similar patterns as they begin to develop in other patients' histories.

## Consensus Mechanism: Calibrated Thresholds

PRISM employs a sophisticated consensus mechanism where different medical conditions require different levels of model agreement before generating a screening suggestion. These thresholds are primarily determined through medical oversight and expertise, with additional consideration of factors such as:

- The ethical implications of false positives or negatives for each condition
- The relative difficulty of pattern recognition for different condition types
- The potential benefit of early intervention
- The historical reliability of pattern recognition for each pattern type

For some conditions where early detection is critical and screening tests are low-risk, the threshold might be set lower, allowing the system to err on the side of suggesting beneficial screening. For other conditions where screening tests might have a higher impact on the patient, higher consensus thresholds ensure suggestions are made only when the evidence is particularly strong.

## Technical Implementation

PRISM uses a two-stage fine-tuning approach based on the Llama-3.1 family of large language models, with QLoRA (Quantized Low-Rank Adaptation) to make training efficient and practical.

### Stage 1: Supervised Fine-Tuning (SFT)

The first stage teaches the model to understand and recognize patterns in medical histories. This creates a foundation of general medical pattern recognition before introducing the nuances of early detection. It utilizes ALL patient data available to build this foundational understanding of how medical events typically progress.

### Stage 2: Binary Classification Objective (BCO)

The second stage builds on the foundation of the first, teaching the model when to recommend specific early diagnostic tests. It learns to recognize subtle patterns that should trigger a recommendation for specific diagnostic tests by differentiating between positive examples (beneficial early screening) and negative examples (delayed screening or false patterns).

### QLoRA Adapters

PRISM creates multiple QLoRA adapters - one SFT adapter per patient pool and one BCO adapter per pool/condition combination. These BCO adapters are the condition-specific components that enable detailed pattern recognition. The adapters are small, efficient parameter sets that can be rapidly swapped or used together at inference time.

Each adapter captures task-specific information while the original model's knowledge is preserved through frozen weights, preventing catastrophic forgetting of the model's fundamental capabilities. This approach provides several advantages:

- Adapters can be merged or used in combination for experimentation
- New training techniques can be explored and deployed as additional adapters
- The system can evolve to incorporate specialized pattern recognition approaches
- Models from different families can be used within the same ensemble

Currently, PRISM builds on Meta's Llama-3.1 model architecture, but the system is designed to incorporate multiple model types. As new and better models emerge, they can be added to the ensemble while retaining earlier models that continue to provide value.

## Data Flow and Processing

PRISM operates as an asynchronous batch processing system functioning entirely within each insurance company's existing secure infrastructure. The system periodically evaluates groups of patients, processes them through the ensemble, combines results, and identifies suggestions that meet the calibrated thresholds for each condition.

When the system identifies a potential screening opportunity, this information is provided to the insurance company with a randomized identifier that only they can link to the actual patient. The insurance company then communicates this suggestion to the patient's primary care physician through their existing secure channels.

To enable outcome tracking without compromising privacy, PRISM incorporates specific diagnostic codes for tests ordered based on its suggestions. When these codes appear in future billing data, the system can track outcomes without knowing patient identities, creating a feedback loop for continuous improvement.

No new data collection is required, as the system works exclusively with the billing data that insurance companies already maintain. Physicians don't need to request anything or change their workflow - suggestions arrive through existing communication channels for their consideration.

### Explanation Generation

When PRISM identifies a potential screening opportunity, the system doesn't just provide a technical recommendation—it generates a clinically relevant explanation that helps physicians understand the reasoning behind the suggestion.

This explanation component uses an existing medical fine-tuned language model that's prompted to review the suggestion data and produce a concise narrative explanation based on available information. The model transforms the abstract pattern match into language that aligns with clinical reasoning, making it easier for physicians to evaluate the suggestion in the context of their medical knowledge.

For example, rather than simply recommending an aldosterone-renin ratio test with a confidence score, the explanation might note: "This pattern shows similarity to cases where resistant hypertension accompanied by borderline potassium levels and muscle complaints indicated primary aldosteronism."

The explanation component only works with the standardized Five Ws data and general medical knowledge—it doesn't have access to actual test results or values. It provides plausible explanations that:

1. Connect the identified pattern to established medical knowledge
2. Contextualize the suggestion using terminology familiar to physicians
3. Include relevant information about the confidence threshold reached
4. Provide background on the condition being screened for

These explanations serve as cognitive bridges between PRISM's pattern recognition capabilities and the physician's clinical judgment, enhancing the interpretability of suggestions while maintaining the physician's essential role in medical decision-making.

## Looking Forward

PRISM's architecture allows for continuous improvement through several mechanisms:
- New models can join the ensemble as more organizations implement the system
- Additional QLoRA adapters can be developed for new conditions or specialized patient populations
- The consensus mechanism can be refined based on real-world performance
- Technical components can be upgraded as new advances in AI become available

This forward-looking design ensures that PRISM can evolve alongside both technological and medical advances, continuously improving its ability to identify opportunities for beneficial early screening.
