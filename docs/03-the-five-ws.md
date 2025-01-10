# PRISM: Understanding Patient Profiles Through the Five Ws

At the heart of PRISM's pattern recognition capabilities lies a deceptively simple yet powerful approach to representing patient medical histories: the Five Ws framework. By organizing each medical event in a patient's history according to Who, What, When, Where, and Why, we create a standardized sequence that captures the essential narrative of a patient's medical journey while maintaining strict privacy protections.

## The Power of Structured Narratives

Think of a patient's medical history as a story told through data. Just as every good story answers the fundamental questions of who, what, when, where, and why, each medical event in a patient's history can be described using these same basic elements. This structured approach allows us to capture the meaningful patterns in healthcare delivery while stripping away potentially identifying or sensitive information.

What makes this approach particularly powerful is its ability to represent complex medical histories in a way that's both human-readable and machine-analyzable. Each row in a patient's history represents a single medical event - a procedure performed, a test run, or a medication prescribed - with each column providing crucial context about that event.

## Understanding the Five Ws

Let's explore each component of this framework in detail:

### WHO: Provider Specialization

The "Who" column identifies the type of healthcare provider involved in each event using the National Uniform Claim Committee (NUCC) Health Care Provider Taxonomy Codes. Maintained by the American Medical Association, these codes provide a standardized way to identify the specialty and subspecialty of healthcare providers.

For example, when you see "NUCC-207X00000X: Orthopaedic Surgery", you know not just that the patient saw a surgeon, but specifically an orthopedic surgeon. This level of detail helps PRISM understand the types of specialists involved in a patient's care without knowing the specific doctors' identities.

### WHAT: Procedures and Products

The "What" column represents perhaps the most complex element of the framework, using three different code sets to capture procedures, services, and products. Importantly, each code requires its own separate row in the patient history - if multiple procedures or products are provided on the same day, each one gets its own complete row with all five columns filled out. Each row's WHAT column will contain exactly one code from one of these three systems:

1. **Current Procedural Terminology (CPT)** codes, maintained by the American Medical Association, describe medical, surgical, and diagnostic services. These codes often include modifiers that provide additional information about how and where procedures were performed.

2. **Healthcare Common Procedure Coding System (HCPCS)** codes, maintained by CMS, expand upon CPT codes to include items like medical supplies and equipment.

3. **National Drug Code (NDC)** numbers, maintained by the FDA, identify specific prescription and over-the-counter medications.

When modifiers are present, they're chained onto the base code with dashes. For example, "CPT-29881-59-RT" represents an arthroscopic meniscectomy (29881) that was a distinct procedural service (-59) performed on the right side (-RT). This detailed coding allows PRISM to understand not just what was done, but important specifics about how it was done.

### WHEN: Temporal Anchoring

The "When" column captures the date of service in the international standard ISO 8601 format (YYYY-MM-DD). This standardized date format ensures consistent temporal representation across all records while maintaining the sequential relationships between events. The sequence and timing of medical events often hold crucial diagnostic clues that might not be apparent when looking at individual events in isolation.

### WHERE: Service Location

The "Where" column uses Centers for Medicare & Medicaid Services (CMS) Place of Service (POS) codes to indicate where each medical service was delivered. These standardized codes help distinguish between different healthcare settings, from private physician offices to emergency rooms to outpatient facilities.

This information is crucial because the setting of care often provides important context about the nature and urgency of medical services. For instance, a procedure performed in an emergency department (POS-23) might carry different implications than the same procedure performed in an outpatient clinic (POS-22).

### WHY: Diagnostic Context

The "Why" column uses International Classification of Diseases, 10th Revision (ICD-10) codes to indicate the medical reasons for each service. Maintained by the World Health Organization and adapted by the Centers for Disease Control and Prevention for use in the United States, these codes provide standardized descriptions of diagnoses, symptoms, and other reasons for seeking medical care.

Multiple diagnoses can be listed for a single event, separated by semicolons. This allows PRISM to understand the full context of why certain procedures or tests were performed, which is crucial for pattern recognition.

## Privacy Through Structure

One of the most innovative aspects of this framework is how it maintains privacy while preserving medical relevance. By using only standardized coding systems and excluding any direct identifiers, financial information, or narrative notes, we create a representation of medical histories that's both privacy-preserving and analytically powerful.

Consider what's not included in this format:
- No patient names or identifiers
- No provider names or identifiers
- No facility names or locations
- No costs or payment information
- No free-text notes or descriptions
- No test results or specific findings

Yet despite these omissions, the framework captures the essential patterns of how healthcare is delivered: what tests were ordered, which specialists were involved, where care was provided, and what diagnoses were considered.

## The Role of Demographics

While the Five Ws framework captures the sequence of medical events, PRISM does incorporate a minimal set of demographic information to provide necessary context for pattern recognition. This demographic data is strictly limited to factors that directly influence medical decision-making, such as age and biological sex, while excluding any information that could potentially identify individuals.

## Pattern Recognition Through Sequence Prediction

Understanding this data format is crucial to understanding how PRISM works. When the system analyzes patterns and generates screening suggestions, it's essentially predicting the next row in a patient's history - specifically, suggesting what screening test might be beneficial to perform next.

What makes PRISM's approach unique is its ensemble architecture, where multiple independent models analyze these sequences. When several models, each trained on different patient populations, independently suggest the same screening test as the next appropriate step, it provides strong evidence that the suggestion warrants consideration.

Consider a hypothetical example: If several models notice that a particular sequence of specialist visits and symptoms often preceded the eventual diagnosis of hypothyroidism in their training data, and they see a similar pattern developing in a current patient's history, they might independently suggest adding a thyroid panel (CPT-84443) as the next row in that patient's history.

## The Importance of Standardized Code Sets

The use of standardized, nationally-recognized code sets is crucial to PRISM's functionality for several reasons:

1. **Consistency**: These code sets are used universally across the U.S. healthcare system, ensuring consistent representation of medical events regardless of where care was provided.

2. **Granularity**: Each coding system provides detailed, specific descriptions of medical services and diagnoses, allowing for precise pattern matching.

3. **Regular Updates**: These code sets are maintained by authoritative bodies and updated regularly to reflect advances in medical knowledge and practice.

4. **Interoperability**: Using standard codes ensures that PRISM can work with data from any U.S. healthcare provider or insurer without requiring custom mapping or translation.

## Looking Forward

As healthcare continues to evolve, these standardized code sets are regularly updated to incorporate new procedures, diagnoses, and treatment approaches. PRISM's reliance on these standard codes ensures that it can adapt to these changes while maintaining its focus on pattern recognition and early detection opportunities.

The Five Ws framework, combined with PRISM's ensemble architecture, creates a system that can identify subtle patterns in healthcare delivery while maintaining the highest standards of privacy protection. By focusing on the sequence and relationships between standard medical codes, PRISM can suggest beneficial screening opportunities without requiring access to sensitive personal health information.

This approach represents a careful balance between analytical power and privacy protection, allowing PRISM to support healthcare providers in identifying early intervention opportunities while maintaining strict ethical standards and patient confidentiality.