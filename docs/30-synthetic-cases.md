# PRISM: Synthetic Case Examples and Training Framework

The following three case examples demonstrate how PRISM learns to recognize patterns in medical billing data that indicate opportunities for beneficial early screening. These are **synthetically generated cases created purely for demonstration purposes** - they represent realistic medical scenarios but are not based on actual patient records.

## Understanding the Visual Framework

To help illustrate the key concepts in PRISM's training approach, these examples use a simple emoji system to highlight important elements in the medical billing sequences:

### Core Training Elements

- **🔵 TEST** - The diagnostic tests we use for training (aldosterone and renin testing)
- **🟢 EARLY** - Early treatment or intervention following the test
- **🔴 LATE** - Late treatment or intervention following the test

### Demonstration Elements

- **🟡 SIGN** - Medical signs or symptoms that might have prompted testing

## The Training Framework

PRISM's training approach centers on identifying three types of historical cases by analyzing the relationship between diagnostic testing and subsequent treatment timing:

**GOOD Examples**: Cases where TEST is followed by EARLY intervention, representing successful early detection that prevented complications.

**BAD Examples**: Cases where TEST is followed by LATE intervention, representing delayed diagnosis after complications had already developed.

**NOPE Examples**: Cases where TEST occurs but is not followed by EARLY or LATE intervention for the target condition, typically because the test ruled out that specific condition or revealed an alternative diagnosis.

This framework creates a clear template that can be applied to any medical condition where:
1. A specific diagnostic test exists
2. Early intervention leads to better outcomes than late intervention
3. Historical billing data can distinguish between early and late treatment patterns

## Important Clarifications

### SIGN Markers Are Demonstration Only

The yellow SIGN dots (🟡) serve purely as visual aids to help healthcare stakeholders understand what types of medical patterns might influence a physician's decision to order diagnostic tests. **These markers are not part of PRISM's actual training process.**

PRISM's language models learn to recognize relevant patterns through exposure to complete medical histories, but the exact patterns each model identifies remain largely opaque. The models may learn to recognize the types of signs highlighted in these examples, or they may discover entirely different pattern combinations that predict beneficial screening opportunities.

Retrospective analysis of successful PRISM predictions may eventually provide insights into what patterns the models actually learned, potentially advancing our understanding of disease progression and early warning indicators.

### Code Identification and Adapter Creation

For each medical condition, PRISM requires identification of:
- **TEST codes**: The specific CPT codes for diagnostic testing (in this case, both aldosterone and renin testing)
- **EARLY codes**: Treatment codes that indicate prompt intervention
- **LATE codes**: Treatment codes that indicate delayed intervention after complications

This code framework creates a rigid template that enables PRISM's scalable training architecture across multiple independent models and medical conditions. The system creates condition-specific Binary Classification Objective (BCO) adapters for each model in the ensemble, with each model loading only its own condition-specific adapters during operation.

### Replicable Framework for Multiple Conditions

The structured template approach means these exact same concepts and processes can be reapplied to any medical condition where appropriate TEST, EARLY, and LATE codes can be identified ahead of time. This creates opportunities to test and validate many different combinations of the same pattern to discover as many applications as possible where this approach proves effective.

Realistically, PRISM's approach may work well for some conditions but not others. Conditions with more detectable patterns in the billing data—more "SIGN-like" indicators that language models can learn from—may be more likely to yield successful pattern recognition. Through systematic testing across different medical conditions, we can identify where this methodology provides the greatest benefit for early detection.

### Training Implementation Notes

For the initial Supervised Fine-Tuning (SFT) stage, PRISM performs the equivalent of additional pre-training by using each complete patient case as a single `text` field in standard language modeling dataset format. The specific methodology for the subsequent Binary Classification Objective (BCO) training pattern is documented elsewhere in the technical methodology.

### Processing Optimization

PRISM employs optimization strategies to select which patients to analyze during each processing cycle. While not required for core functionality, patterns similar to the SIGN indicators might help identify patients most likely to benefit from screening evaluation, potentially through vector similarity comparisons in the patient database.

However, it's crucial to understand that such pre-selection optimization represents a separate layer from PRISM's core pattern recognition capabilities. The language models themselves learn from complete medical histories without requiring predefined SIGN indicators.

## What You'll See in the Examples

The three case examples that follow demonstrate:

1. **[GOOD Example](/31-good-example)**: Early recognition and successful intervention
2. **[BAD Example](/32-bad-example)**: Delayed diagnosis with preventable complications
3. **[NOPE Example](/33-nope-example)**: Appropriate testing that ruled out the target condition

Each example shows only the first instance of EARLY or LATE treatment to clearly demonstrate when intervention began, rather than cluttering the timeline with repeated medication refills or follow-up visits.

These examples illustrate how PRISM learns to distinguish between different temporal patterns of medical care, helping identify the crucial windows when diagnostic testing could lead to beneficial early intervention rather than delayed treatment after complications develop.