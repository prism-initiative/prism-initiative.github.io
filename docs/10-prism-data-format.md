# PRISM Data Format

## Introduction to Structured Medical Narratives

The foundation of PRISM's pattern recognition capability lies in transforming the chaos of medical billing data into structured narratives that preserve essential healthcare stories while maintaining absolute patient privacy. Every medical encounter, prescription filled, test ordered, and diagnosis made becomes a single row in a standardized format that captures the complete context of care without revealing any patient identity.

This transformation serves a critical purpose. Raw medical billing data exists in countless formats across different systems, each optimized for financial processing rather than pattern recognition. PRISM's data format creates a universal language that allows artificial intelligence models to understand healthcare delivery patterns the same way they might understand patterns in natural language or other sequential data. The format deliberately balances comprehensiveness with simplicity, capturing everything necessary for pattern recognition while excluding anything that could compromise privacy or add unnecessary complexity.

The power of this approach becomes apparent when considering what pattern recognition requires. Models need to understand who provided care, what they did, when it happened, where it occurred, and why it was necessary. They need to track how these elements evolve over time as patients age and conditions develop. They need sufficient context to distinguish meaningful patterns from random noise. Yet they must accomplish all this without any ability to identify actual patients or providers.

## The Eight-Field Structure

PRISM's data format consists of exactly eight fields for every medical event, creating a rigid structure that ensures consistency while preserving the full narrative of healthcare delivery. This structure emerged from extensive analysis of what information proves essential for pattern recognition versus what merely adds complexity or privacy risk. While all eight fields are present in the data format, only six fields (ASL and the Five Ws) are used for model training and inference—the POOL and PATIENT identifiers serve purely as tracking mechanisms for data management and outcome validation.

### POOL: Training Group Assignment

The POOL field assigns each patient to one of exactly one hundred training pools based on the last two digits of their internal identifier within the insurance company's system. This simple mathematical operation creates permanent, evenly distributed groups that ensure each model in PRISM's ensemble trains on completely independent patient populations. Pool 00 contains all patients whose identifiers end in 00, Pool 01 those ending in 01, and so forth through Pool 99.

This assignment method solves multiple challenges simultaneously. It guarantees even distribution without requiring any analysis or manual assignment. It maintains consistency as patients receive additional care over time. It enables perfect data isolation between models, creating the foundation for PRISM's natural cross-validation approach where models trained on separate populations must independently agree before generating suggestions.

### PATIENT: Cryptographic Identifier

The PATIENT field contains an MD5 hash that serves as a consistent patient identifier within each processing batch while maintaining complete anonymity. This cryptographic approach allows PRISM to group all events belonging to the same patient during processing without ever knowing who that patient actually is. The insurance company generates these hashes and maintains the mapping, but PRISM only ever sees the anonymized identifier.

This design reflects a fundamental principle: PRISM operates on patterns, not people. The system needs to understand that multiple medical events belong to the same patient journey, but it never needs to know whose journey it analyzes. The cryptographic hash provides exactly this capability while preventing re-identification through one-way encryption that cannot be reversed.

### ASL: Age/Sex/Location Demographics

The ASL field captures basic demographic information in the familiar format of Age/Sex/Location, such as "45/F/FL" for a 45-year-old female in Florida. This internet-native format leverages how large language models already understand demographic shorthand from their training data, eliminating the need for complex demographic encoding schemes.

Age is calculated as the year of the medical event minus the patient's birth year, avoiding any ability to identify actual birthdays from age transitions between events. This calculation means a patient born in 1970 would show as age 52 for all events in 2022, then 53 for all events in 2023. PRISM excludes all patients aged 90 or older from processing entirely, both to maintain strict HIPAA compliance and because these very elderly patients likely have different care patterns that would be less relevant to the broader population PRISM serves. Sex uses the standard medical binary of M or F as recorded in insurance systems. Location provides state-level geographic context using two-letter postal codes, capturing regional variations in medical practice without compromising privacy through more specific location data.

This minimal demographic information provides essential medical context while preventing discrimination based on factors that shouldn't influence pattern recognition. The system cannot identify race, ethnicity, income, education, employment, or any other socioeconomic factors that might introduce bias. Every patient becomes a medical history to be evaluated rather than a demographic profile to be categorized. This enforced blindness to non-medical factors ensures pattern recognition based purely on healthcare utilization rather than social determinants.

This demographic trio provides essential context for pattern recognition. Many conditions present differently across age groups and between sexes. Regional variations in medical coding and practice patterns can affect how conditions manifest in billing data. Yet this minimal demographic information reveals nothing that could identify specific individuals among millions of people sharing similar demographics.

### WHO: Provider Taxonomy

The WHO field identifies the type of healthcare provider using standardized taxonomy codes. These codes specify medical specialties and subspecialties without revealing individual provider identities. A family medicine physician, an endocrinologist, and an emergency medicine provider each have distinct codes that provide crucial context about the medical expertise involved in each encounter.

Understanding provider types proves essential for pattern recognition. The progression from primary care to specialists often signals condition evolution. Different specialties suggest different diagnostic considerations. The pattern of provider types involved in care can itself indicate underlying conditions that might benefit from screening. Yet the taxonomy codes reveal nothing about specific doctors or practices.

### WHAT: Procedures and Products

The WHAT field captures what medical service or product was provided, using standardized medical coding systems. This includes procedure codes, medication codes, and equipment codes, with modifiers appended when they provide important clinical context. Each code is paired with its short description, providing additional contextual information that helps language models differentiate between similar codes during pattern learning.

This field represents the actual medical intervention, the concrete action taken during each encounter. A prescription for escalating blood pressure medications tells a different story than a stable medication regimen. The appearance of certain diagnostic tests signals clinical suspicion. The progression of treatments reveals condition evolution. The combination of codes and their text descriptions creates rich semantic information for pattern recognition.

### WHEN: Temporal Anchoring

The WHEN field records when each medical event occurred using the ISO 8601 date format (YYYY-MM-DD). This consistent temporal anchoring allows models to understand the progression of care over time, the intervals between encounters, and the speed at which conditions develop or treatments escalate.

Time proves crucial for pattern recognition in healthcare. The interval between symptom onset and diagnosis often determines outcomes. The speed of treatment escalation can signal condition severity. Seasonal patterns might suggest certain diagnoses. The temporal relationship between different medical events often reveals more than the events themselves. This simple date field captures all these temporal dynamics.

### WHERE: Service Location

The WHERE field uses standardized place of service codes to indicate where care was delivered. Office visits, inpatient hospital stays, emergency room encounters—each setting provides different context for interpreting the same medical events. These codes reveal the care setting without identifying specific facilities.

Location context significantly impacts pattern interpretation. The same symptoms addressed in an emergency room versus a routine office visit suggest different severity levels. Patterns of emergency utilization might indicate inadequate condition management. Transitions between care settings often mark important clinical events. The place of service provides this essential context while maintaining facility anonymity.

### WHY: Diagnostic Context

The WHY field contains the diagnosis codes that explain why each service was necessary. Multiple diagnoses can appear in a single field, separated by semicolons, capturing the full clinical complexity of each encounter. These codes, paired with their descriptions, represent the medical justification for every service and the clinical reasoning that drove each medical decision.

Diagnosis codes tell the evolving story of patient health. They reveal what conditions providers suspected, confirmed, or treated. They show how clinical understanding evolved over time. They indicate whether treatments succeeded or complications developed. This diagnostic context transforms a sequence of medical services into a coherent clinical narrative.

## Temporal Progression and Age Changes

One of PRISM's elegant solutions involves handling temporal progression, particularly how patient age naturally increases over time. Rather than maintaining a static demographic profile, the format updates age with each medical event, creating a natural temporal flow that models can understand. A patient who is 45 years old in January becomes 46 after their birthday, and this progression appears naturally in the data.

This approach solves what could have been a complex technical challenge. Models need to understand that a 50-year-old receiving certain screening tests represents different clinical significance than a 30-year-old receiving the same tests. By embedding age directly in each row and allowing it to progress naturally, PRISM ensures models understand the temporal context without requiring complex date arithmetic or age calculation logic.

The temporal flow also captures the natural progression of healthcare delivery. Conditions that develop slowly over years create characteristic patterns in the data. Acute events appear as clusters of activity. Chronic disease management shows regular periodic encounters. This temporal structure, anchored by dates and evolving ages, allows models to recognize these distinct patterns.

## Why Markdown Tables

PRISM formats all data as markdown tables, a choice that might seem unusual for machine learning but proves remarkably effective. Markdown tables provide human readability while maintaining rigid structure. They're naturally understood by language models trained on vast amounts of technical documentation. They require minimal syntax while remaining completely unambiguous.

The markdown format offers practical advantages over alternatives. Unlike JSON or XML, markdown tables don't require closing syntax that might encourage premature sequence termination. Unlike CSV files, they handle missing fields gracefully without quotation complexity. Unlike binary formats, they remain human-inspectable for validation and debugging. The format is simultaneously simple enough for efficient processing and rich enough for complete medical narratives.

Most importantly, markdown tables align perfectly with PRISM's sequence completion approach. Language models trained on PRISM data learn to continue markdown tables naturally, adding rows that follow established patterns. The format becomes part of the pattern recognition itself, with models learning that medical events follow specific structural rules while developing in medically meaningful ways.

## Relationship to Sequence Completion

The PRISM data format exists specifically to enable pure sequence completion without complex prompting or interaction. When a model sees a patient's medical history formatted as a markdown table, its only task is to continue that table with the next likely rows. This simplicity is intentional and powerful.

Traditional approaches might frame medical pattern recognition as classification, asking "Does this patient need screening?" PRISM instead asks "What medical events come next?" This reframing transforms a complex medical judgment into a simple sequence continuation task that language models naturally excel at performing. The model doesn't need to understand screening recommendations or clinical guidelines; it just needs to continue patterns it has seen before.

The rigid structure of the format ensures that models can only produce valid medical sequences. They can't generate conversation, explanations, or other content. They can only add rows to the table, and those rows must follow the established format. This constraint focuses all model capacity on learning medical patterns rather than maintaining general capabilities.

## Data Volume Implications

The PRISM format creates remarkably rich datasets from standard medical billing information. A single patient with five years of typical healthcare utilization might generate hundreds of rows, each capturing a complete medical event. Multiply this across millions of patients, and the data volume reaches hundreds of billions of tokens, a scale that enables detection of even rare patterns.

This volume has profound implications for pattern recognition. Rare conditions that affect one in ten thousand patients become visible when processing millions of patient histories. Subtle patterns that develop over years become detectable when analyzing decades of longitudinal data. The sheer scale of information allows models to learn robust patterns rather than memorizing specific cases.

Yet despite this richness, the format remains compact enough for practical processing. Each row contains only essential information, avoiding the bloat of unnecessary fields or redundant data. The structured format enables efficient batch processing and model training. The markdown representation, while human-readable, remains reasonably token-efficient for language model consumption.

The data volume also enables PRISM's ensemble approach. With sufficient data, one hundred models can each train on completely independent patient populations while still having enough examples to learn robust patterns. This data abundance, structured through PRISM's standardized format, provides the foundation for reliable pattern recognition at scale.

---

*This document establishes the foundational data structure upon which all of PRISM's capabilities build. The [Standardized and Finite Codesets](/13-standardized-codesets) document provides detailed information about the specific medical coding systems used in each field. The [Three-Pattern Learning](/14-three-pattern-learning) document explains how this formatted data enables automated training example extraction. The [Pure Sequence Completion](/20-pure-sequence-completion) document details how models learn to continue these formatted sequences.*
