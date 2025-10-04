# Platform Potential with Constraints

## Focus on Non-Invasive Tests

PRISM's strategic constraint to non-invasive diagnostic tests represents a fundamental design decision that maximizes both clinical utility and patient acceptance. The system exclusively targets screening opportunities that can be accomplished through simple blood draws, urinalysis, saliva tests, and other procedures requiring minimal preparation, no sedation, no recovery time, and essentially no risk beyond minor discomfort. This constraint isn't a limitation—it's a focusing mechanism that ensures PRISM's suggestions remain actionable within routine healthcare delivery.

Non-invasive tests possess unique characteristics that make them ideal for population-level screening programs. They can be ordered by any physician without special authorization. They can be performed at thousands of locations from hospitals to standalone laboratories to retail clinics. They require no special scheduling or lengthy appointments. Patients can have blood drawn for multiple tests in a single visit, enabling efficient screening for various conditions simultaneously. These practical advantages mean that when PRISM suggests non-invasive screening, the barriers to completion are minimal.

The focus on non-invasive procedures also aligns with patient psychology and healthcare workflow realities. Patients rarely decline simple blood tests when recommended by their physician. There's no anxiety about procedures, no need to arrange transportation or time off work, no concern about complications. Similarly, physicians can order these tests without lengthy discussions about risks and benefits, without obtaining special consent, without coordinating with facilities. The suggestion fits naturally into the clinical encounter rather than disrupting it.

This constraint creates a natural quality filter for PRISM's pattern recognition. Since the system can only suggest simple, low-risk tests, it must focus on conditions where such tests provide meaningful diagnostic value. This eliminates entire categories of pattern recognition that might be technically possible but practically problematic—conditions requiring MRIs, colonoscopies, biopsies, or other invasive procedures that patients might reasonably decline or delay.

## Routine Visit Integration

PRISM's suggestions are specifically designed to integrate into routine healthcare encounters rather than requiring special appointments or dedicated visits. This design philosophy recognizes that healthcare delivery already faces capacity constraints, and any system requiring additional visits would create bottlenecks that limit its effectiveness. By focusing on screening that naturally fits into annual physicals, follow-up appointments, and routine care, PRISM ensures its suggestions can actually be implemented.

Annual wellness visits provide ideal opportunities for PRISM-suggested screening. Patients already expect blood work during these visits. They've often fasted in preparation. They've allocated time for comprehensive evaluation. When PRISM suggests additional tests that can be drawn during the same venipuncture, it adds no burden while potentially identifying serious conditions early. The suggestion becomes part of routine preventive care rather than an additional healthcare task.

Follow-up appointments for chronic conditions create similar opportunities. A patient seeing their physician for hypertension management already expects evaluation and possibly laboratory work. If PRISM suggests screening for primary aldosteronism based on the pattern of treatment resistance, the aldosterone and renin levels can be drawn alongside routine monitoring labs. The screening happens within care the patient was already receiving, requiring no additional time or effort.

Even acute care visits can accommodate PRISM suggestions when appropriate. A patient presenting with fatigue might receive a basic metabolic panel regardless. If PRISM has identified patterns suggesting thyroid dysfunction, adding thyroid function tests to the existing blood draw requires only checking additional boxes on the laboratory requisition. The incremental burden approaches zero while the potential benefit remains substantial.

This integration philosophy extends beyond individual visits to population health management. Many practices systematically address care gaps during any encounter. PRISM suggestions can join these care gap alerts, becoming part of comprehensive preventive care rather than standalone interventions. This positions PRISM as enhancement to existing quality improvement efforts rather than competition for limited resources.

## Condition Selection Criteria

PRISM targets conditions meeting specific criteria that ensure pattern recognition can create meaningful clinical impact. These criteria act as a filter, focusing the system's capabilities on opportunities where early detection through simple screening genuinely improves outcomes. Not every medical condition suits PRISM's approach, and this selective focus strengthens rather than limits the system's utility.

First, conditions must have clear, established diagnostic tests available through non-invasive screening tests. Primary aldosteronism has the aldosterone-to-renin ratio. Hypothyroidism has thyroid function panels. Diabetes has glucose and hemoglobin A1c. These aren't experimental biomarkers or research assays but established tests with defined reference ranges, clear interpretation guidelines, and widespread availability. This ensures that when PRISM suggests screening, physicians know exactly what to order and how to interpret results.

Second, early detection must create significantly better outcomes than late detection. This isn't always true in medicine—some conditions progress inevitably regardless of when they're discovered. But for conditions PRISM targets, early detection enables interventions that prevent complications, reduce suffering, and improve quality of life. The difference between early and late diagnosis must be meaningful enough to justify screening efforts.

Third, conditions must have sufficient prevalence to generate adequate training examples. A condition affecting one in a million people might be important to detect, but with insufficient examples, pattern recognition becomes impossible. PRISM focuses on conditions common enough to create robust training data while still being rare enough that systematic screening provides value. This sweet spot typically includes conditions affecting thousands to millions of people within the insured population.

Fourth, clear treatment pathways must exist for early intervention. Detection without actionable treatment options provides little value. PRISM targets conditions where early detection leads to specific, effective interventions. These might be medications, lifestyle modifications, or preventive measures, but they must exist and be accessible to patients.

## Rapid Expansion Capability

Once PRISM's architecture proves successful for initial conditions, expanding to additional conditions requires minimal additional development. The same ensemble infrastructure processes all conditions simultaneously. Adding a new condition simply requires defining its TEST, EARLY, and LATE codes, after which the automated extraction process identifies training examples and creates condition-specific adapters.

The expansion process leverages everything already built—the same models, data pipeline, and consensus mechanisms. Medical experts identify the relevant codes for a new condition, validation follows the established retrospective-prospective process, and medical oversight ensures clinical appropriateness. Within weeks rather than years, PRISM can expand to recognize patterns for new conditions.

This rapid expansion capability transforms PRISM from a single-purpose tool into a comprehensive screening platform. As medical knowledge advances and new biomarkers emerge, PRISM can quickly incorporate them. The system grows more valuable over time without requiring fundamental architectural changes.

## What PRISM Won't Target

PRISM explicitly avoids conditions requiring invasive diagnostic procedures, imaging studies, or complex multi-step workups. The system won't suggest colonoscopies, biopsies, MRIs, CT scans, or any procedures requiring special preparation, scheduling, or interpretation by specialists. These exclusions ensure PRISM remains focused on simple screening that integrates seamlessly into routine primary care.

The system also won't target conditions where early detection doesn't meaningfully change outcomes. Some diseases progress inevitably regardless of when discovered, others lack effective early interventions, and still others have treatments that don't improve on watchful waiting. PRISM focuses exclusively on conditions where early detection enables interventions that genuinely improve patient outcomes through established treatment pathways.

---

*This document establishes PRISM's focused approach to screening suggestions. The [Self-Aligning Incentive Structure](/42-incentive-structure) document explains how the business model reinforces these constraints. The [Healthcare Utilization Phenotype Recognition](/44-phenotype-recognition) document explores what patterns PRISM recognizes within these constraints. The [Three-Pattern Learning](/14-three-pattern-learning) document details how the system learns to identify conditions meeting these criteria.*
