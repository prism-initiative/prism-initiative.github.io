# Consensus Voting Mechanism

## Threshold Calibration Process

PRISM's consensus thresholds emerge from comprehensive empirical analysis of historical performance rather than theoretical assumptions. The calibration process begins by running the complete ensemble against all identified GOOD, BAD, and NOPE examples from historical data, documenting how many models suggested the diagnostic test for each case. This creates a distribution showing the natural voting patterns for true positives, missed opportunities, and appropriate negatives.

For BAD examples—those cases where diagnosis was delayed until complications developed—the system performs multiple evaluations at different truncation points. Starting from immediately before the diagnostic test actually occurred, then three months earlier, six months earlier, nine months earlier, and continuing back through the available history. This temporal analysis reveals not just whether PRISM would have caught these cases, but how much earlier detection would have been possible. A case where twenty models suggest screening three years before actual diagnosis represents a profoundly missed opportunity. A case where only five models suggest screening even immediately before testing might indicate a genuinely difficult pattern.

The calibration examines these distributions to identify natural breakpoints. Perhaps for primary aldosteronism, when fifteen or more models agree, the positive predictive value reaches acceptable levels while maintaining good sensitivity. Perhaps below ten models, suggestions are mostly noise. These thresholds aren't optimized algorithmically but rather identified empirically from the actual voting patterns observed across millions of historical cases.

This empirical approach reveals important nuances. Some conditions might show bimodal distributions—either many models recognize the pattern or very few do, with little middle ground. Others might show gradual transitions from noise to signal. The threshold selection respects these natural patterns rather than imposing arbitrary cutoffs. The goal isn't mathematical optimization but practical identification of voting levels that would have enabled beneficial early detection while minimizing unnecessary testing.

## Condition-Specific Requirements

Each medical condition requires its own calibrated threshold based on the unique characteristics of how it manifests in billing data and the implications of screening suggestions. These condition-specific requirements reflect both the technical reality of pattern recognition and the medical reality of screening appropriateness.

Some conditions generate very distinctive patterns in billing data that models readily recognize. Primary aldosteronism with its characteristic progression of resistant hypertension, emergency visits, and metabolic abnormalities might trigger strong consensus when present. Other conditions with more subtle or variable presentations might generate weaker consensus even when genuinely present. The thresholds must account for these inherent differences in pattern clarity.

The training process itself creates natural variations in voting patterns. Conditions with abundant BAD examples in the training data might generate stronger consensus because many models learned to recognize missed opportunities. Conditions that are usually caught early might generate more tentative suggestions because models saw fewer clear patterns. These artifacts of the training process necessitate condition-specific calibration rather than universal thresholds.

Beyond technical considerations, different conditions warrant different levels of confidence before suggesting screening. A simple blood test for thyroid function carries minimal burden and might warrant suggestion at lower consensus levels. A screening test requiring special preparation or multiple visits might require stronger consensus. These calibrations reflect the practical impact on patients and providers, ensuring suggestions are proportionate to what's being asked.

The condition-specific thresholds essentially create custom filters for each pattern type. Rather than forcing all conditions into the same consensus framework, each gets calibrated to its own optimal balance between catching true cases and avoiding excessive false positives. This customization ensures that PRISM's suggestions remain clinically reasonable across the full spectrum of conditions it monitors.

## Medical Oversight Integration

The actual threshold decisions rest entirely with medical professionals who understand the clinical implications of different sensitivity and specificity tradeoffs. PRISM provides the empirical data—how many cases would be caught at different thresholds, how early detection would occur, what false positive rates result—but medical oversight determines what tradeoffs are acceptable for each condition.

Medical advisory boards review the empirical distributions and temporal analyses to make informed decisions about appropriate thresholds. They consider factors that go beyond pure statistics: the natural history of each disease, the benefits of early intervention, the burden of screening on patients, the capacity of the healthcare system to handle additional testing. These clinical judgments cannot be automated or optimized algorithmically—they require human medical expertise and ethical consideration.

The medical oversight process also determines whether simple thresholds suffice or whether more complex rules are warranted. Perhaps certain combinations of factors—patient age, time since symptom onset, pattern intensity—modify the base thresholds. These nuanced decisions come from medical professionals who understand the full context of clinical care.

This approach keeps PRISM in its appropriate role as a pattern recognition tool while preserving medical authority over clinical decisions. The system identifies patterns and quantifies their strength through ensemble voting. Medical professionals decide what patterns warrant action. This separation ensures that threshold decisions reflect medical judgment rather than technical optimization, maintaining appropriate human oversight of healthcare recommendations.

## Balancing Sensitivity and Specificity

The fundamental tradeoff in threshold setting involves catching more true cases (sensitivity) versus avoiding false positives (specificity). Lower thresholds catch more cases where screening would be beneficial but also generate more suggestions that won't yield diagnoses. Higher thresholds reduce false positives but risk missing opportunities for early detection. Medical oversight navigates this balance based on the specific characteristics of each condition.

The empirical data from historical validation makes these tradeoffs concrete rather than theoretical. Medical advisors can see exactly how many primary aldosteronism cases would have been caught two years early with a threshold of fifteen models versus twenty models. They can quantify how many additional false positives the lower threshold would generate. They can evaluate whether catching those additional cases justifies the increased testing burden.

Different conditions warrant different positions on this tradeoff spectrum. Conditions where early detection dramatically changes outcomes might accept lower specificity to maximize sensitivity. Conditions where the benefits of early detection are more modest might prioritize specificity to avoid excessive testing. Conditions affecting younger populations might emphasize sensitivity since patients have more years to benefit from early intervention. These nuanced decisions require medical judgment informed by empirical evidence.

The balance also considers practical healthcare delivery constraints. Even if lower thresholds would catch more cases, the healthcare system needs capacity to handle the additional screening. Primary care physicians already managing full schedules might be overwhelmed by too many suggestions. Laboratory facilities might face backlogs. Medical oversight considers these real-world constraints when setting thresholds, ensuring PRISM's suggestions remain actionable within existing healthcare infrastructure.

## Dynamic Adjustment Capability

While the vast majority of training data gets incorporated during initial system development, thresholds require periodic review and adjustment based on accumulated real-world evidence. Medical oversight committees regularly evaluate system performance to determine whether thresholds remain appropriate or need modification.

These reviews examine multiple dimensions of performance. How many suggested screenings were actually performed? What percentage yielded diagnoses? How early were conditions caught compared to historical patterns? Are certain populations receiving disproportionate suggestions? Do seasonal variations affect pattern recognition? This comprehensive evaluation ensures thresholds remain aligned with clinical goals and population needs.

Threshold adjustments follow deliberate processes with medical oversight, never automatic optimization. If real-world performance differs from historical validation—perhaps false positive rates are higher than expected—medical advisors determine whether and how to adjust thresholds. They might raise requirements for specific conditions, add additional validation rules, or maintain current levels while investigating the discrepancy. These decisions reflect medical judgment about acceptable tradeoffs rather than algorithmic responses to metrics.

The adjustment capability also accommodates evolving medical knowledge and practice guidelines. If new research reveals that earlier intervention provides greater benefits than previously understood, thresholds might be lowered to catch more cases. If improved treatments reduce the urgency of early detection, thresholds might be raised. If new biomarkers or diagnostic approaches change the screening landscape, the entire threshold structure might need reconsideration. This flexibility ensures PRISM remains aligned with current medical practice rather than frozen at its initial configuration.

---

*This document details PRISM's consensus mechanism for generating screening suggestions. The [Ensemble of 100 Specialized Models](/21-ensemble-models) document explains how independent models generate the votes being aggregated. The [Perfect Retrospective-Prospective Equivalence](/22-retrospective-prospective) document describes how historical validation informs threshold calibration. The [Clinical Decision Support Positioning](/41-clinical-decision-support) document explains how consensus-based suggestions integrate into clinical workflows.*
