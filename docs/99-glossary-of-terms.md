# Glossary of Terms

This glossary defines key terms, acronyms, and technical concepts used throughout the PRISM documentation. Terms are organized by category for easy reference.

## PRISM-Specific Terminology

### PRISM
**Predictive Recommendations for Improved Screening in Medicine**. An AI-powered healthcare pattern recognition system that analyzes insurance claims data to identify beneficial screening opportunities for early disease detection.

### ASL
**Age/Sex/Location**. A demographic format used in the PRISM data structure (e.g., "45/F/FL" for a 45-year-old female in Florida). This internet-native format leverages how language models already understand demographic shorthand from their training data. See also: [PRISM Data Format](/10-prism-data-format#asl-agesexlocation-demographics).

### Five Ws
The five contextual fields in PRISM's data format that capture medical events: **WHO** (provider taxonomy), **WHAT** (procedures and products), **WHEN** (temporal anchoring), **WHERE** (service location), and **WHY** (diagnostic context). These fields, combined with ASL, form the six training fields used for model learning. See also: [PRISM Data Format](/10-prism-data-format#the-eight-field-structure).

### POOL
Training group assignment field that segments patients into exactly 100 pools (00-99) based on the last two digits of their internal identifier. This enables complete data isolation between models in the ensemble. See also: [Ensemble of 100 Specialized Models](/21-ensemble-models#pool-assignment-methodology-last-two-digits).

### PATIENT
A cryptographic identifier (MD5 hash) that allows grouping of medical events belonging to the same patient within processing batches while maintaining complete anonymity. See also: [PRISM Data Format](/10-prism-data-format#patient-cryptographic-identifier).

### GOOD Examples
Training examples representing optimal early detection—cases where diagnostic testing occurred at the right time, leading to prompt treatment that prevented complications. Defined as the diagnostic test followed by early-stage treatment codes within ten rows. See also: [Three-Pattern Learning](/14-three-pattern-learning#defining-good-examples).

### BAD Examples
Training examples representing missed opportunities—cases where all warning signs were present but went unrecognized until serious complications forced investigation. Training uses truncation ten rows before the diagnostic test to teach pattern recognition of what should have triggered earlier screening. See also: [Three-Pattern Learning](/14-three-pattern-learning#defining-bad-examples).

### NOPE Examples
Training examples providing negative data—cases where diagnostic tests were appropriately ordered but led to different diagnoses or negative results. These prevent overfitting by showing the boundaries of pattern recognition. See also: [Three-Pattern Learning](/14-three-pattern-learning#defining-nope-examples).

### TEST Codes
Medical billing codes that identify specific diagnostic tests used to detect a condition (e.g., CPT codes 82088 for aldosterone and 84374 for renin in primary aldosteronism screening).

### EARLY Codes
Medical billing codes indicating early-stage treatment, typically showing successful intervention before significant disease progression (e.g., low-dose spironolactone for early primary aldosteronism).

### LATE Codes
Medical billing codes indicating advanced disease treatment, revealing that diagnosis was delayed until complications developed (e.g., high-dose medications plus heart failure management codes).

### Primary Aldosteronism
A hormonal condition causing high blood pressure that affects 5-10% of people with hypertension but remains 95% undiagnosed. PRISM uses this as a demonstration condition because it shows clear patterns in billing data and has dramatic differences between early and late intervention outcomes. See also: [Three-Pattern Learning](/14-three-pattern-learning#primary-aldosteronism-as-demonstration).

### Healthcare Utilization Phenotype
The distinctive pattern created in billing data as a patient develops a medical condition—encompassing the progression of symptoms, provider visits, failed treatments, and escalating interventions. PRISM recognizes these phenotypes to identify screening opportunities. See also: [Healthcare Utilization Phenotype Recognition](/44-phenotype-recognition).

## Medical Coding & Healthcare Standards

### ICD-10-CM
**International Classification of Diseases, 10th Revision, Clinical Modification**. The diagnostic coding system with over 70,000 codes used to capture virtually every condition, symptom, injury, and health status. PRISM focuses on ICD-10-CM data from October 1, 2015 onward for consistency. See also: [Standardized and Finite Codesets](/13-standardized-codesets#icd-10-cm-for-diagnoses).

**External Resources:**
- [Wikipedia: ICD-10](https://en.wikipedia.org/wiki/ICD-10)
- [OHDSI ICD-10 Documentation](https://github.com/OHDSI/Vocabulary-v5.0/wiki/Vocab.-ICD10)

### ICD-10-PCS
**ICD-10 Procedure Coding System**. Seven-character alphanumeric codes that describe inpatient hospital procedures with remarkable granularity, from major surgeries to bedside procedures. Each character carries specific meaning about body system, operation, body part, approach, devices, and qualifiers. See also: [Standardized and Finite Codesets](/13-standardized-codesets#icd-10-pcs-for-hospital-procedures).

**External Resources:**
- [OHDSI ICD-10-PCS Documentation](https://github.com/OHDSI/Vocabulary-v5.0/wiki/Vocab.-ICD10PCS)

### CPT
**Current Procedural Terminology**. Five-digit codes maintained by the American Medical Association that describe medical procedures with extraordinary precision, from simple office visits to complex surgeries. CPT codes form the backbone of procedural billing and appear in virtually every medical claim. See also: [Standardized and Finite Codesets](/13-standardized-codesets#cpt-for-procedures).

**External Resources:**
- [Wikipedia: CPT](https://en.wikipedia.org/wiki/Current_Procedural_Terminology)

### NDC
**National Drug Code**. Eleven-digit codes that provide precise identification for every medication distributed in the United States, identifying not just the drug but the specific manufacturer, formulation, strength, and package size. See also: [Standardized and Finite Codesets](/13-standardized-codesets#ndc-for-medications).

**External Resources:**
- [Wikipedia: NDC](https://en.wikipedia.org/wiki/National_drug_code)
- [OHDSI NDC Documentation](https://github.com/OHDSI/Vocabulary-v5.0/wiki/Vocab.-NDC)

### HCPCS
**Healthcare Common Procedure Coding System**. Codes that extend beyond traditional procedures to capture medical supplies, equipment, and services that CPT doesn't cover. Level II codes (starting with letters A through V) reveal aspects of patient care like mobility aids, home health services, and preventive care programs. See also: [Standardized and Finite Codesets](/13-standardized-codesets#hcpcs-for-supplies-and-services).

**External Resources:**
- [Wikipedia: HCPCS](https://en.wikipedia.org/wiki/Healthcare_Common_Procedure_Coding_System)

### NUCC
**National Uniform Claim Committee**. Maintains the provider taxonomy classification system that creates standardized codes for healthcare providers, identifying not just broad specialties but specific subspecialties and areas of expertise. See also: [Standardized and Finite Codesets](/13-standardized-codesets#nucc-provider-taxonomy).

**External Resources:**
- [NUCC Provider Taxonomy](https://taxonomy.nucc.org/)

### CMS
**Centers for Medicare & Medicaid Services**. The federal agency that administers Medicare, Medicaid, and other healthcare programs. CMS maintains place of service codes that indicate where medical care was delivered. See also: [Standardized and Finite Codesets](/13-standardized-codesets#cms-place-of-service-codes).

### Place of Service Codes
Two-digit codes maintained by CMS that distinguish between care settings (office visits, hospital admissions, emergency encounters, etc.), providing crucial context for pattern interpretation. The progression of these codes tells stories about disease trajectories.

### Standardized Vocabularies
The comprehensive medical coding systems maintained by the Observational Health Data Sciences and Informatics (OHDSI) collaborative, providing documented standards for medical concepts across healthcare systems.

**External Resources:**
- [OHDSI Standardized Vocabularies](https://github.com/OHDSI/Vocabulary-v5.0/wiki/Standardized-Vocabularies)

## Regulatory & Legal

### PBC
**Public Benefit Corporation**. A legal corporate structure that formally encodes the primacy of patient benefit into corporate governance while maintaining growth potential. Directors have fiduciary duties to consider specified public benefits (improving patient health outcomes) alongside financial returns. See also: [PBC Structure and Team](/71-pbc-team#public-benefit-corporation-rationale).

**External Resources:**
- [Wikipedia: Benefit Corporation](https://en.wikipedia.org/wiki/Benefit_corporation)

### CDS
**Clinical Decision Support System**. Healthcare information systems that provide clinicians with patient-specific assessments or recommendations to aid clinical decision-making. PRISM positions itself as a CDS tool that suggests screening opportunities while preserving physician autonomy. See also: [Clinical Decision Support Positioning](/41-clinical-decision-support).

**External Resources:**
- [Wikipedia: Clinical Decision Support System](https://en.wikipedia.org/wiki/Clinical_decision_support_system)

### FDA
**Food and Drug Administration**. The federal agency responsible for regulating medical devices, including certain types of clinical decision support software. PRISM's design as a suggestion tool for established diagnostic tests positions it within established CDS frameworks.

### HIPAA
**Health Insurance Portability and Accountability Act**. Federal law establishing national standards for the protection of health information. PRISM's use of completely anonymous data (not de-identified) falls outside the scope of protected health information. See also: [Completely Anonymous Data Only](/11-completely-anonymous-data).

### De-identification vs Anonymization
**De-identification** removes eighteen specific identifiers following standards like HIPAA's Safe Harbor method, but de-identified data still contains rich individual details that could theoretically enable re-identification. **Complete anonymization** (PRISM's approach) means the identifying information never exists in the system, making re-identification architecturally impossible. See also: [Completely Anonymous Data Only](/11-completely-anonymous-data#defining-complete-anonymity-vs-de-identification).

### PHI
**Protected Health Information**. Individually identifiable health information that is protected under HIPAA regulations. PRISM operates exclusively on anonymous data that does not constitute PHI.

### Safe Harbor Method
A HIPAA de-identification standard that requires removal of eighteen specific identifiers. PRISM goes beyond de-identification to complete anonymity by never collecting identifying information.

## AI Architecture & Training

### LLM
**Large Language Model**. Neural networks trained on vast amounts of text data that can understand and generate natural language. PRISM uses LLMs as the foundation for medical sequence pattern recognition, leveraging their pre-existing knowledge of medical coding from internet-scale training data. See also: [Standardized and Finite Codesets](/13-standardized-codesets#llm-pre-training-advantages).

**External Resources:**
- [Wikipedia: Large Language Model](https://en.wikipedia.org/wiki/Large_language_model)

### SFT
**Supervised Fine-Tuning**. In PRISM's context, this is continued pre-training on domain-specific medical sequences rather than instruction-style fine-tuning. Models learn to predict the next token in medical billing sequences, developing understanding of natural healthcare delivery patterns while losing general conversational abilities. See also: [Pure Sequence Completion](/20-pure-sequence-completion#supervised-fine-tuning-as-continued-pre-training).

### BCO
**Binary Classification Objective**. A training method that adds condition-specific nudges to models after SFT, biasing sequence continuation toward specific diagnostic tests when patterns similar to GOOD and BAD examples appear. BCO training maintains the pure sequence completion paradigm while adding learned sensitivities. See also: [Pure Sequence Completion](/20-pure-sequence-completion#condition-specific-nudges-through-bco).

**External Resources:**
- [BCO Paper on arXiv](https://arxiv.org/abs/2404.04656)
- [BCO Paper HTML](https://arxiv.org/html/2404.04656v1)
- [BCO Paper PDF](https://arxiv.org/pdf/2404.04656)
- [Hugging Face BCO Papers](https://huggingface.co/papers/2404.04656)

### UDM
**Underlying Distribution Matching**. A technique used within BCO training that automatically handles natural class imbalance between GOOD, BAD, and NOPE examples by better estimating the true distribution of patterns even when example counts vary dramatically. See also: [Pure Sequence Completion](/20-pure-sequence-completion#condition-specific-nudges-through-bco).

**External Resources:**
- [TRL UDM Documentation](https://huggingface.co/docs/trl/en/bco_trainer#underlying-distribution-matching-udm)

### Ensemble Architecture
PRISM's approach of using 100 independent models, each trained on completely separate patient populations (pools 00-99). This creates natural cross-validation where consensus between independent models provides strong evidence of genuine patterns. See also: [Ensemble of 100 Specialized Models](/21-ensemble-models).

### Consensus Voting
The mechanism by which PRISM aggregates predictions from 100 independent models, requiring a calibrated threshold of agreement before generating screening suggestions. When multiple models trained on different data independently suggest the same test, it provides empirical evidence of a genuine pattern. See also: [Consensus Voting Mechanism](/40-consensus-voting).

### Sequence Completion
PRISM's fundamental approach where models simply continue medical billing sequences by adding the next likely rows to a markdown table. This pure continuation task eliminates complex prompting, reasoning, or interaction—models only learn to recognize what medical events naturally follow given patterns. See also: [Pure Sequence Completion](/20-pure-sequence-completion).

### Cross-Validation
A machine learning technique for estimating generalization performance by training on different data splits. PRISM implements natural cross-validation through its ensemble architecture—when evaluating any patient, 99 models are seeing data from outside their training distribution, providing continuous validation. See also: [Ensemble of 100 Specialized Models](/21-ensemble-models#natural-cross-validation).

### Pre-training
The initial training phase where language models learn general patterns from massive text corpora. PRISM leverages pre-trained models that already understand medical coding systems from their exposure to medical documentation during pre-training.

### Inference
The process of using a trained model to make predictions on new data. In PRISM, inference involves presenting a patient's medical history to all 100 models and collecting their sequence continuation predictions.

### Pattern Recognition
The ability to identify meaningful regularities in data. PRISM performs pattern recognition on medical billing sequences to identify healthcare utilization phenotypes that predict beneficial screening opportunities.

### Overfitting
A modeling error where a model learns training data too well, including noise and random variations, reducing its ability to generalize to new data. PRISM's ensemble architecture with complete data isolation provides exceptional protection against overfitting.

### Token
The basic unit of text processed by language models. Medical billing codes, dates, provider taxonomies, and other elements in PRISM's data format are broken into tokens for model processing.

## Training Tools & Libraries

### TRL
**Transformer Reinforcement Learning Library**. A Hugging Face library providing tools for training transformer language models using reinforcement learning and related techniques. PRISM uses TRL's SFT and BCO trainers.

**External Resources:**
- [TRL Documentation](https://huggingface.co/docs/trl/en/index)

### SFT Trainer
A tool from the TRL library for supervised fine-tuning of language models. PRISM uses this for continued pre-training on medical sequences.

**External Resources:**
- [TRL SFT Trainer Documentation](https://huggingface.co/docs/trl/en/sft_trainer)

### BCO Trainer
A tool from the TRL library implementing Binary Classification Objective training, used by PRISM to add condition-specific nudges after base sequence learning.

**External Resources:**
- [TRL BCO Trainer Documentation](https://huggingface.co/docs/trl/en/bco_trainer)

### Transformers
The Hugging Face library providing thousands of pretrained models and tools for natural language processing, computer vision, and audio tasks. PRISM builds on transformer-based language models.

**External Resources:**
- [Transformers Documentation](https://huggingface.co/docs/transformers/index)

### Accelerate
A Hugging Face library that enables running the same PyTorch code across different distributed configurations, from a single GPU to multi-node clusters, with minimal code changes.

**External Resources:**
- [Accelerate Documentation](https://huggingface.co/docs/accelerate/index)

### Liger Kernel
A collection of Triton-based kernels optimized for training large language models, providing memory and speed improvements for transformer training.

**External Resources:**
- [TRL Liger Kernel Integration](https://huggingface.co/docs/trl/en/liger_kernel_integration)

### DeepSpeed
A deep learning optimization library from Microsoft that makes distributed training efficient, fast, and easy through system innovations, including memory optimizations and pipeline parallelism.

**External Resources:**
- [TRL DeepSpeed Integration](https://huggingface.co/docs/trl/en/deepspeed_integration)

### Trackio
An experiment tracking tool integrated with Gradio for monitoring machine learning training runs, providing real-time visualization of metrics and training progress.

**External Resources:**
- [Trackio Blog Post](https://huggingface.co/blog/trackio)
- [Trackio GitHub](https://github.com/gradio-app/trackio)
- [Trackio Documentation](https://huggingface.co/docs/trackio/index)
- [TRL Trackio Integration](https://huggingface.co/docs/trl/en/trackio_integration)

### uv
An extremely fast Python package and project manager written in Rust, providing 10-100x faster package installation than traditional tools like pip.

**External Resources:**
- [uv Documentation](https://docs.astral.sh/uv/)

### Gradio
A Python library for building machine learning demos and web applications with user interfaces, enabling rapid prototyping and deployment of ML models.

**External Resources:**
- [Gradio Website](https://www.gradio.app/)

## Technical & Data Formats

### MD5
**Message Digest Algorithm 5**. A cryptographic hash function that produces a 128-bit hash value from arbitrary input. PRISM uses MD5 hashing to create patient identifiers that allow grouping of medical events while maintaining complete anonymity through one-way encryption. See also: [Completely Anonymous Data Only](/11-completely-anonymous-data#md5-hashing-for-verification).

**External Resources:**
- [Wikipedia: MD5](https://en.wikipedia.org/wiki/MD5)

### Markdown
A lightweight markup language with plain-text formatting syntax. PRISM formats all medical data as markdown tables because they're human-readable, naturally understood by language models trained on technical documentation, and align perfectly with sequence completion. See also: [PRISM Data Format](/10-prism-data-format#why-markdown-tables).

**External Resources:**
- [Wikipedia: Markdown](https://en.wikipedia.org/wiki/Markdown)

### ISO 8601
An international standard for date and time formatting (YYYY-MM-DD). PRISM uses ISO 8601 format in the WHEN field for consistent temporal anchoring across all medical events.

### JSON
**JavaScript Object Notation**. A lightweight data interchange format. While PRISM doesn't use JSON for its primary data format (preferring markdown tables), it's mentioned as an alternative that was rejected because closing syntax might encourage premature sequence termination.

### XML
**eXtensible Markup Language**. A markup language for encoding documents in a format that is both human-readable and machine-readable. Like JSON, considered but rejected for PRISM's data format.

### CSV
**Comma-Separated Values**. A simple file format for tabular data. PRISM chose markdown tables over CSV because markdown handles missing fields more gracefully without quotation complexity.

### UUID
**Universally Unique Identifier**. A 128-bit label used for identification. Insurance companies may use various identifier schemes including UUIDs, with PRISM using the last two digits for pool assignment regardless of the underlying identifier format.

## Dataset Formats

### Unpaired Preference Dataset
A dataset format used in preference learning where examples don't come in explicit pairs, but each example is labeled as preferred or not. Used in BCO training for PRISM's three-pattern learning.

**External Resources:**
- [TRL Unpaired Preference Dataset](https://huggingface.co/docs/trl/en/dataset_formats#unpaired-preference)

### Language Modeling Dataset
The standard dataset format for training language models, consisting of text sequences where models learn to predict the next token. PRISM uses this format for SFT, with each patient's complete medical history as a continuous narrative.

**External Resources:**
- [TRL Language Modeling Dataset](https://huggingface.co/docs/trl/en/dataset_formats#language-modeling)

## Medical Concepts & Conditions

### Primary Aldosteronism
A hormonal disorder where the adrenal glands produce too much aldosterone, leading to high blood pressure and low potassium levels. Affects 5-10% of people with hypertension but remains 95% undiagnosed. PRISM uses this as a demonstration condition due to clear billing patterns and dramatic outcome differences between early and late detection. See also: [Three-Pattern Learning](/14-three-pattern-learning#primary-aldosteronism-as-demonstration).

### Resistant Hypertension
High blood pressure that remains uncontrolled despite treatment with three or more antihypertensive medications, or requires four or more medications for control. Often a sign of secondary causes like primary aldosteronism.

### Secondary Hypertension
High blood pressure caused by an underlying medical condition (like primary aldosteronism, kidney disease, or sleep apnea) rather than developing on its own. Accounts for 5-10% of hypertension cases.

### Essential Hypertension
Primary high blood pressure that develops without an identifiable underlying cause. The most common form of hypertension, accounting for 90-95% of cases.

### Hypokalemia
Abnormally low levels of potassium in the blood. A common finding in primary aldosteronism due to excess aldosterone causing potassium loss through the kidneys.

### Hypothyroidism
A condition where the thyroid gland doesn't produce enough thyroid hormone. Used as an example in PRISM documentation of another condition suitable for pattern recognition with clear diagnostic tests and staged treatments.

### Sleep Apnea
A disorder where breathing repeatedly stops and starts during sleep. Often appears in NOPE examples for primary aldosteronism screening, as it can cause resistant hypertension through different mechanisms.

### White Coat Hypertension
Elevated blood pressure readings in medical settings that aren't present in other environments, caused by anxiety about medical appointments rather than true hypertension.

### Differential Diagnosis
The process of distinguishing a particular disease or condition from others that present with similar symptoms. PRISM's NOPE examples teach models about differential diagnosis by showing similar patterns with different underlying causes.

## Methodologies & Concepts

### "All Models Are Wrong"
A statistical philosophy attributed to statistician George Box: "All models are wrong, but some are useful." PRISM embraces this by accepting that being wrong 99% of the time can represent extraordinary success if the 1% of correct early detection suggestions prevent serious complications. See also: ["All Models are Wrong" Philosophy](/23-all-models-wrong).

**External Resources:**
- [Wikipedia: All Models Are Wrong](https://en.wikipedia.org/wiki/All_models_are_wrong)
- [Microsoft: What We Mean When We Say AI Is Usefully Wrong](https://www.microsoft.com/en-us/worklab/what-we-mean-when-we-say-ai-is-usefully-wrong)

### Retrospective vs Prospective Analysis
**Retrospective analysis** examines historical data to identify patterns after outcomes are known. **Prospective analysis** makes predictions about future events before outcomes occur. PRISM achieves perfect equivalence by using truncation methodology on historical data to simulate exactly how the system would perform prospectively. See also: [Perfect Retrospective-Prospective Equivalence](/22-retrospective-prospective).

### Truncation Methodology
PRISM's approach to validation where historical patient data is cut off at specific points in time, with models predicting what should come next. This demonstrates exactly how the system would have performed in real-time scenarios without waiting years for prospective studies. See also: [Perfect Retrospective-Prospective Equivalence](/22-retrospective-prospective#truncation-methodology).

### Temporal Progression
The evolution of medical events over time. PRISM's data format captures temporal progression through dated events and naturally incrementing ages, allowing models to recognize patterns that develop gradually over years.

### Longitudinal Data
Medical data collected from the same patients over extended time periods. Insurance claims provide ideal longitudinal data, capturing complete healthcare journeys across years or decades.

### Sensitivity vs Specificity
In medical testing, **sensitivity** measures the proportion of actual positive cases correctly identified (true positive rate), while **specificity** measures the proportion of actual negative cases correctly identified (true negative rate). PRISM's consensus thresholds balance these competing objectives. See also: [Consensus Voting Mechanism](/40-consensus-voting#balancing-sensitivity-and-specificity).

### False Positive
A test result that incorrectly indicates the presence of a condition. In PRISM, this would be a screening suggestion that doesn't yield a diagnosis.

### False Negative
A test result that incorrectly indicates the absence of a condition. In PRISM, this would be a missed opportunity where screening should have been suggested but wasn't.

### Number Needed to Screen (NNS)
A statistical measure indicating how many people need to be screened to identify one case of disease. PRISM's approach accepts high NNS values when early detection provides significant benefit.

### Positive Predictive Value (PPV)
The probability that a positive test result truly indicates the presence of disease. PRISM calibrates consensus thresholds to achieve acceptable PPV while maintaining sensitivity.

---

*This glossary provides definitions for key terms used throughout PRISM documentation. For comprehensive explanations of concepts and their applications, refer to the linked documentation sections. External resources are provided where available for deeper exploration of technical topics.*
