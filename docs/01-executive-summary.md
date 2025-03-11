# PRISM: Predictive Recommendations for Improved Screening in Medicine

## Executive Summary

PRISM represents a breakthrough approach to preventive healthcare that leverages the power of artificial intelligence to identify opportunities for beneficial health screenings. Working with a similar principle to how financial institutions detect unusual transaction patterns, PRISM analyzes medical billing data to recognize sequences that might indicate the need for specific screening tests, potentially leading to earlier diagnosis and better patient outcomes.

### Core Concept

At its foundation, PRISM recognizes that the billing records insurance companies already maintain contain valuable patterns that could help identify opportunities for preventive care. These records aren't merely financial documents—they're detailed timelines of medical events that, when analyzed properly, can reveal subtle patterns suggesting potential health issues before they become serious.

PRISM transforms these billing sequences into standardized representations based on the "Five Ws" framework: Who (provider specialty), What (procedure or product), When (date), Where (service location), and Why (diagnosis codes). This structured approach captures the essential narrative of a patient's medical journey while maintaining strict privacy protections.

### Technical Innovation

PRISM's architecture centers on an ensemble of language models, each trained on different subsets of medical data to develop independent "perspectives" on pattern recognition. Unlike traditional approaches where a single model might learn from all available data, PRISM deliberately segments its training data into completely separate pools, ensuring each model develops its own unique approach to pattern identification.

This independence proves critical: when multiple models, each trained on different patient populations, independently suggest the same screening test, it provides strong evidence that the pattern genuinely indicates an opportunity for beneficial early intervention.

The system employs a two-stage fine-tuning approach:
1. **Supervised Fine-Tuning (SFT)** teaches models to understand normal patterns in medical histories using ALL patient data available
2. **Binary Classification Objective (BCO)** training helps models recognize when to recommend specific early diagnostic tests

While BCO training uses specifically categorized examples (GOOD, BAD, and NOPE cases), it's important to note that every patient history contributes to the system's overall understanding during the SFT stage. The architecture creates one SFT adapter per patient pool and one BCO adapter per pool/condition combination, providing exceptional flexibility and specificity in pattern recognition.

Currently, PRISM builds upon Meta's Llama-3.1-70b model, but the architecture is designed to accommodate multiple model types simultaneously. As new and better models emerge, they can be incorporated into the ensemble while retaining earlier models that continue to provide value—potentially enabling hundreds of diverse models to contribute their "votes" to the consensus process.

### Practical Implementation

PRISM operates as an asynchronous batch processing system that runs behind the scenes without requiring physician initiation. The system periodically evaluates groups of patients, processes them through the ensemble, combines results, and delivers suggestions only when they meet carefully calibrated thresholds.

These suggestions are communicated only to the patient's primary care physician, who serves as the human in the loop—the essential medical decision-maker who can evaluate whether the screening is appropriate given their comprehensive understanding of the patient's situation. This maintains the critical role of physician judgment while providing valuable pattern-recognition support.

The system operates entirely on-premises using specialized hardware like NVIDIA's Project DIGITS, ensuring both security and predictable costs.

### Privacy and Ethics

Privacy protection forms the cornerstone of PRISM's design. The system operates entirely within each insurance company's existing secure infrastructure, with patient data never leaving these systems. All analysis is performed on anonymized information, with results shared only with the appropriate healthcare providers.

The system's open collaboration approach ensures transparency while maintaining strict privacy protections. Implementation partners contribute trained models back to the collective, improving the system for everyone without ever sharing underlying patient data.

### Impact and Vision

By identifying opportunities for early screening, PRISM aims to:
- Support more proactive healthcare delivery
- Improve patient health outcomes through earlier intervention
- Reduce healthcare costs by detecting conditions before they become serious
- Help identify complex or subtle patterns that might be missed in today's rushed healthcare environment
- Support more equitable health outcomes across diverse populations

PRISM represents a careful balance of innovative technology and medical expertise, operating seamlessly in the background of existing healthcare systems while maintaining strict privacy standards. Its success lies not in replacing human medical judgment but in supporting it with pattern recognition capabilities that help identify potential opportunities for beneficial early intervention.
