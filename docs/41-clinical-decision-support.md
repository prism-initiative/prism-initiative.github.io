# Clinical Decision Support Positioning

## FDA Regulatory Framework

PRISM operates within established Clinical Decision Support (CDS) frameworks that have been carefully defined by FDA guidance and healthcare regulations. The system falls specifically into the category of non-device CDS software—tools that provide recommendations to healthcare professionals rather than making autonomous medical decisions. This classification is crucial because it positions PRISM within well-understood regulatory pathways rather than novel territory requiring new regulatory frameworks.

The key characteristics that define PRISM's CDS classification include its exclusive focus on licensed healthcare professionals as users, its inability to analyze medical images or signals from medical devices, and its transparent presentation of recommendations that allow independent review. PRISM doesn't diagnose conditions—it suggests established screening tests for physician consideration. It doesn't interpret test results—it identifies patterns that might warrant testing. It doesn't recommend treatments—it only flags opportunities for further investigation through standard diagnostic procedures.

FDA guidance specifically addresses CDS tools that support clinical decision-making without automating it. PRISM fits squarely within this framework by providing pattern-based insights while maintaining complete physician control over all clinical decisions. The system cannot order tests, cannot interpret results, cannot make diagnoses, and cannot recommend treatments. It simply identifies when billing patterns suggest that established screening protocols might be beneficial, leaving all medical judgment to qualified healthcare professionals.

This regulatory positioning also benefits from PRISM's focus on established, FDA-approved diagnostic tests rather than novel biomarkers or experimental procedures. Every screening test PRISM might suggest already has regulatory approval, established clinical utility, and standard interpretation protocols. The innovation lies not in new medical interventions but in pattern recognition that identifies when existing interventions might be beneficial—a form of CDS that regulatory frameworks explicitly accommodate.

## Physician Autonomy Preservation

PRISM preserves complete physician autonomy by design, functioning as an information source rather than a decision-making system. Every suggestion generated represents a possibility for consideration, not a directive for action. Physicians retain absolute discretion to act on suggestions, defer them, or dismiss them based on their clinical judgment and complete understanding of patient context.

This preservation of autonomy reflects a fundamental understanding that pattern recognition, no matter how sophisticated, cannot replace clinical judgment. PRISM sees patterns in billing data but doesn't see the patient's physical presentation, psychological state, family dynamics, or personal preferences. It doesn't know about contraindications that might not appear in claims, about previous testing done outside the insurance system, or about patient concerns that influence care decisions. Only the physician has this complete picture.

The system's suggestions arrive as information rather than imperatives. The communication might note that patients with similar billing patterns have sometimes been diagnosed with primary aldosteronism through aldosterone-renin testing. It doesn't state that testing must be ordered, should be ordered, or is recommended. The physician evaluates this information alongside their clinical assessment, patient history, and medical judgment to determine appropriate action.

This approach also protects physician autonomy from algorithmic encroachment. There are no metrics tracking "compliance" with PRISM suggestions. No penalties for not acting on patterns. No rewards for following recommendations. Physicians who never act on a single PRISM suggestion face no consequences because the system recognizes that they might have valid clinical reasons invisible to pattern recognition. The preservation of clinical autonomy isn't just policy—it's architectural, with no mechanism for the system to even know whether its suggestions were followed unless specific tracking codes appear in future billing.

## Physician-Friendly Explanation Generation

PRISM doesn't merely flag patterns—it bridges the gap between abstract pattern recognition and clinical reasoning through carefully crafted explanations that help physicians understand why a particular screening suggestion emerged from the ensemble consensus. These explanations transform opaque algorithmic outputs into clinically contextualized information that physicians can evaluate using their medical judgment and complete patient knowledge.

### The Explanation Generation Architecture

When the ensemble reaches consensus that a screening opportunity exists, the management server employs a medical fine-tuned language model specifically for explanation generation. This model—separate from the pattern recognition ensemble—serves as a translation layer between mathematical pattern matching and medical communication.

The explanation model receives strictly limited information about the suggestion:
- The specific diagnostic test being suggested (the CPT codes)
- The complete patient history in the PRISM data format that led to consensus
- The number of models that reached consensus
- General medical knowledge about the target condition

Crucially, the explanation model never sees actual test results, specific laboratory values, or detailed clinical information. It works only with the standardized billing data patterns, maintaining the same privacy boundaries as the pattern recognition models while generating human-readable explanations.

### Crafting Clinically Relevant Narratives

The explanations generated avoid algorithmic language or confidence scores in favor of pattern-based observations that resonate with clinical thinking. Rather than stating "87% confidence for primary aldosteronism based on feature vector similarity," the system might generate:

"This patient's pattern shows resistant hypertension requiring three medications with documented low-normal potassium and muscle complaints. Similar patterns in the historical data have been associated with primary aldosteronism in approximately 15% of cases. Consider aldosterone-to-renin ratio testing to evaluate for secondary causes of hypertension."

These explanations deliberately avoid diagnostic certainty or treatment recommendations. They present patterns, note historical associations, and suggest consideration rather than commanding action. The language respects physician expertise while providing valuable pattern-based insights that might not be immediately apparent from episodic encounters.

### Integration with Clinical Workflow

The explanations arrive through the same channels as the screening suggestions themselves, formatted for quick review during patient encounters or batch processing during administrative time. They're concise enough to read quickly but detailed enough to provide genuine insight. Physicians can review the explanation, consider it alongside their clinical assessment, and make informed decisions about whether screening is appropriate.

The consistent format and clinical language of explanations help physicians quickly understand the types of patterns PRISM recognizes and how they relate to their clinical assessment.

## Human-in-the-Loop Requirements

PRISM's architecture ensures that a qualified healthcare professional always stands between pattern recognition and clinical action. This human-in-the-loop requirement isn't an added safety feature—it's the fundamental operating principle that defines every aspect of system design. No PRISM suggestion can affect patient care without passing through human medical judgment.

The human-in-the-loop serves multiple essential functions. First, it provides clinical context that pattern recognition cannot access. The physician knows whether the patient recently had similar testing elsewhere, whether symptoms have alternative explanations, whether the patient would decline screening regardless of indication. Second, it ensures ethical consideration of patient values and preferences that no algorithm can assess. Third, it maintains legal and professional accountability for medical decisions within established frameworks of medical practice.

This requirement shapes how PRISM communicates suggestions. Rather than generating alerts that demand immediate response or automated workflows that proceed unless interrupted, PRISM provides information for integration into routine clinical decision-making. Suggestions arrive through existing communication channels at appropriate intervals, allowing physicians to consider them during regular patient interactions rather than as urgent interruptions.

The human requirement also prevents automation creep that often affects healthcare technology. As systems become more sophisticated, there's temptation to remove human oversight for efficiency. PRISM's architecture makes this impossible—without a physician to receive and act on suggestions, the system produces no value. The human isn't a safety check that might be optimized away but the essential actor who transforms pattern recognition into clinical benefit.

## Communication to PCPs Only

PRISM communicates screening suggestions exclusively to primary care physicians, never directly to patients, specialists, or other healthcare stakeholders. This focused communication strategy serves multiple critical purposes that protect both clinical relationships and system integrity.

Primary care physicians serve as the ideal recipients for screening suggestions because they maintain longitudinal relationships with patients and coordinate overall care. They understand patients' complete medical contexts, not just specialized aspects. They can evaluate whether suggested screening makes sense given everything else happening in a patient's care. They can discuss options with patients in the context of broader health goals. They can coordinate with specialists when indicated while maintaining oversight of the whole patient rather than just organ systems.

The PCP-exclusive communication also provides important liability protection for all parties. The primary care physician maintains clear responsibility for clinical decisions, consistent with their existing role in preventive care and screening. There's no confusion about who received what information or who holds responsibility for action. The established physician-patient relationship provides the appropriate context for discussing screening options, including risks, benefits, and alternatives.

This approach prevents the fragmentation that could occur if suggestions went to multiple providers. It avoids scenarios where specialists receive suggestions outside their scope, where patients receive information without clinical context, or where multiple providers receive conflicting suggestions. By maintaining a single, clear communication channel to the physician best positioned to act on suggestions, PRISM preserves clinical clarity while respecting established care relationships.

## Liability Considerations

PRISM's positioning within established CDS frameworks provides clear liability structures that protect all stakeholders while maintaining appropriate accountability. The system generates information for physician consideration, not medical advice or clinical directives. This distinction is crucial for liability assignment—the physician who acts on information maintains the same liability they would have for any other clinical decision informed by available data.

The system itself cannot be liable for medical outcomes because it doesn't make medical decisions. It identifies patterns and suggests established screening tests for consideration. The physician evaluates this information alongside all other clinical data and makes autonomous decisions about appropriate action. This maintains traditional liability structures where healthcare professionals bear responsibility for clinical decisions while information systems provide data to inform those decisions.

Insurance companies implementing PRISM face no additional liability for the pattern recognition suggestions. They're providing information derived from claims data analysis to healthcare providers who maintain complete autonomy over clinical decisions. This is analogous to providing claims histories or utilization reports—information that might inform clinical decisions but doesn't constitute medical advice or mandate specific actions.

The liability framework also benefits from PRISM's focus on suggesting additional screening rather than restricting care. Suggestions for potentially beneficial screening that physicians can freely accept or decline create minimal liability exposure. The system cannot prevent beneficial care, cannot delay necessary interventions, and cannot override clinical judgment. These architectural constraints align with liability frameworks that protect both technology providers and healthcare professionals while maintaining clear accountability for clinical decisions.

## Integration with Clinical Workflows

PRISM integrates into existing clinical workflows without requiring new systems, additional interfaces, or changed processes. Screening suggestions flow through the same communication channels insurance companies already use for prior authorization decisions, care gap alerts, and other administrative communications. Physicians receive suggestions in formats they already know how to process, at intervals that don't disrupt care delivery.

The integration respects the realities of clinical practice. Suggestions aren't urgent alerts requiring immediate response but information for consideration during routine patient encounters. They might inform annual wellness visits, influence routine follow-up appointments, or prompt discussion during problem-focused visits. The physician determines when and how to incorporate suggestions into clinical care, maintaining control over workflow and patient interaction.

This seamless integration extends to documentation and billing. When physicians act on PRISM suggestions, they use standard billing codes with the addition of specific tracking identifiers that enable outcome monitoring. No special documentation requirements, no additional forms, no separate reporting systems. The clinical workflow proceeds exactly as it would for any other screening decision, with minimal additional administrative burden.

The system also integrates with the natural rhythm of clinical practice. Suggestions might be batched for review during administrative time rather than interrupting patient care. They might be incorporated into pre-visit planning when staff review upcoming appointments. They might inform population health initiatives where practices systematically address care gaps. By fitting into existing workflows rather than creating new ones, PRISM minimizes disruption while maximizing the likelihood that suggestions will be thoughtfully considered and appropriately acted upon.

---

*This document establishes PRISM's position within healthcare delivery structures. The [Constructive-Only Architecture](/24-constructive-only) document explains the technical constraints that support this positioning. The [Insurance Company Unique Vantage Point](/12-insurance-vantage-point) document describes how suggestions flow from pattern recognition to physicians. The [Self-Aligning Incentive Structure](/42-incentive-structure) document details the business model that reinforces appropriate CDS positioning.*
