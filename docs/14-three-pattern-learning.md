# Three-Pattern Learning

## Defining GOOD Examples

GOOD examples represent the gold standard of medical pattern recognition—cases where diagnostic testing occurred at an optimal time, leading to prompt treatment that prevented complications. These aren't just successful diagnoses but successful interventions, where early detection translated into better patient outcomes through timely treatment. The defining characteristic of a GOOD example is the sequence: relevant diagnostic test followed closely by early-stage treatment codes that indicate the condition was caught before significant progression.

In the PRISM framework, a GOOD example begins with all the patient's medical history leading up to the diagnostic test, then includes exactly ten rows starting from that test. These ten rows capture the immediate diagnostic and treatment response—the test itself, the specialist referrals that followed, the initial treatments prescribed, and the early management approach. This window provides sufficient context to confirm that the test led to successful early intervention without including years of subsequent management that would dilute the pattern.

What makes these examples particularly valuable for training is that they encode both the pre-test pattern that should trigger screening and the post-test confirmation that screening was beneficial. The model learns to recognize the constellation of symptoms, provider visits, failed treatments, and escalating concerns that preceded successful diagnosis. These patterns often seem obvious in retrospect but were subtle enough that multiple providers might have missed them initially.

GOOD examples teach models what success looks like in medical pattern recognition. They show that certain combinations of hypertension medication escalation, low-normal potassium, and muscle complaints warrant aldosterone testing. They demonstrate that specific patterns of headaches, fatigue, and blood pressure volatility suggest secondary rather than essential hypertension. They reveal the subtle trajectories that, if recognized early, lead to simple, effective treatment rather than complex management of advanced disease.

## Defining BAD Examples

BAD examples capture medical tragedies in slow motion—cases where all the warning signs were present but went unrecognized until serious complications forced more aggressive investigation. These patients eventually received the same diagnostic test and the same underlying diagnosis as GOOD examples, but only after their conditions had progressed to cause permanent damage. The defining characteristic of a BAD example is diagnostic testing followed by complex, multi-faceted treatment codes indicating advanced disease.

For training purposes, BAD examples use a truncation strategy that teaches models to recognize missed opportunities. The training data includes everything up to ten rows before the diagnostic test—showing the model a pattern that should have triggered testing but didn't—then labels this pattern as one requiring intervention. The actual test and late-stage treatment never appear in the training prompt, preventing the model from learning that delayed testing is acceptable.

This approach essentially asks the model: "Given this medical history, what should happen next?" When the correct answer is diagnostic testing but the actual history shows continued symptomatic treatment and escalating problems, the model learns to recognize these as patterns requiring immediate screening suggestions. The BAD examples teach through negative example, showing patterns where earlier testing would have prevented the complications that eventually developed.

The tragedy embedded in BAD examples makes them powerful training data. These are patients who developed heart failure before their primary aldosteronism was diagnosed. Who suffered strokes that could have been prevented. Who progressed to kidney disease while receiving ever-escalating blood pressure medications that couldn't address the underlying hormonal cause. Each BAD example represents a missed opportunity for early intervention, and collectively they teach the model to recognize these opportunities before they're missed again.

## Defining NOPE Examples

NOPE examples provide crucial negative training data—cases where the same diagnostic tests were appropriately ordered but led to different diagnoses. These patients presented with similar symptoms that reasonably prompted testing for the target condition, but their test results were negative or revealed alternative explanations. The defining characteristic of a NOPE example is diagnostic testing that didn't lead to treatment for the specific condition being analyzed.

In training, NOPE examples appear exactly like GOOD examples in structure—all history up to the test, then ten rows starting with the test—but they're labeled as negative examples. This teaches models that similar symptom patterns can have different underlying causes. A patient with resistant hypertension and fatigue might have sleep apnea rather than primary aldosteronism. Someone with escalating blood pressure medications might have white coat hypertension or medication non-compliance rather than secondary causes.

NOPE examples prevent overfitting and false positives by showing the model the boundaries of pattern recognition. They teach that not every case of resistant hypertension warrants aldosterone testing, that not every hypokalemic patient has primary aldosteronism, that not every pattern leading to testing yields positive results. This negative training is essential for calibrating the model's pattern recognition to suggest screening when genuinely indicated rather than for every patient with vaguely similar symptoms.

The inclusion of NOPE examples reflects medical reality where differential diagnosis requires ruling out conditions as much as confirming them. These examples ensure that PRISM's suggestions remain clinically reasonable rather than triggering excessive testing. They teach the model to recognize subtle differences between patterns that warrant screening and those that don't, improving both sensitivity and specificity.

## Automated Pattern Extraction

The brilliance of PRISM's three-pattern approach lies in its complete automation. Once TEST, EARLY, and LATE codes are defined for a condition, the system automatically identifies and extracts all relevant training examples from the formatted medical data. No manual chart review, no clinical annotation, no subjective interpretation—just straightforward identification of patterns based on objective billing codes.

For any condition where screening tests and treatments can be specified through billing codes, the extraction process identifies all instances where diagnostic tests appear, examines what treatments followed, and categorizes each case appropriately. Cases with early treatment codes become GOOD examples. Cases with late-stage treatment codes indicating complications become BAD examples. Cases without relevant treatment codes become NOPE examples. The entire process runs without human intervention.

This automation scales effortlessly across conditions. To add a new condition to PRISM's recognition capabilities, specify the relevant TEST codes (what diagnostic tests identify the condition), EARLY codes (what treatments indicate successful early intervention), and LATE codes (what treatments indicate advanced disease). The same extraction logic that works for primary aldosteronism works for thyroid disorders, certain cancers, autoimmune conditions, or any disease with clear diagnostic and treatment patterns.

The automated extraction also ensures consistency and completeness. Every qualifying case in the formatted data gets included, not just those that someone remembered to annotate. Edge cases that might be overlooked in manual review get captured automatically. Rare presentations that occur once in ten thousand patients still appear in training data. This comprehensive extraction creates training sets that capture the full spectrum of disease presentation rather than just textbook cases.

## Primary Aldosteronism as Demonstration

Primary aldosteronism serves as PRISM's demonstration condition because it perfectly embodies the patterns the system is designed to detect. This hormonal condition affects 5-10% of people with hypertension. In a population of one million people, approximately 300,000 will have hypertension, meaning 15,000-30,000 have primary aldosteronism. With a 95% undiagnosed rate, only 750-1,500 are properly diagnosed and treated while 14,250-28,500 remain undiagnosed and at risk for complications. The condition follows clear patterns in billing data: escalating antihypertensive medications, emergency visits for hypertensive crises, low potassium levels, and eventual organ damage if untreated.

The diagnostic test is straightforward and non-invasive: measuring aldosterone and renin levels through simple blood draws. CPT codes 82088 (aldosterone) and 84374 (renin) clearly mark when testing occurs. Early treatment typically involves low-dose spironolactone or eplerenone, medications that directly antagonize excess aldosterone. Late treatment requires much higher doses of these same medications (often 100mg versus 25mg for early cases) plus management of heart failure, kidney disease, and other complications that developed during the diagnostic delay.

The GOOD examples for primary aldosteronism show patients whose providers recognized the pattern early—perhaps after just two or three blood pressure medications failed—and ordered appropriate testing. Their billing histories show prompt endocrinology referral, initiation of targeted therapy at modest doses, and sustained control without complications. The BAD examples show years of escalating medications, multiple emergency visits, and eventual diagnosis only after irreversible organ damage requiring intensive treatment. The NOPE examples reveal patients whose resistant hypertension had other causes like sleep apnea or medication non-adherence.

This demonstration condition illustrates how clear the three patterns become when viewed through billing data. The same patient history that appears as scattered symptoms to individual providers reveals an obvious pattern when viewed longitudinally through claims. The automation that extracts these patterns for primary aldosteronism applies equally to any condition with defined diagnostic tests and staged treatments.

## Generalizing to Other Conditions

The three-pattern learning approach generalizes elegantly to any medical condition meeting basic criteria: identifiable diagnostic tests, treatments that differ between early and late intervention, and sufficient prevalence to generate meaningful training examples. Hypothyroidism, certain cancers, autoimmune conditions, genetic disorders, and many other diseases fit this framework perfectly.

Consider hypothyroidism: TEST codes include thyroid function panels, EARLY codes include low-dose thyroid hormone replacement, LATE codes include higher doses plus treatment for cardiovascular complications or severe symptoms. The same automated extraction that works for primary aldosteronism immediately applies. GOOD examples show patients diagnosed when mild symptoms prompted testing. BAD examples show patients diagnosed only after severe fatigue, depression, or cardiac symptoms forced investigation. NOPE examples show patients whose symptoms had other causes despite similar presentation.

The key to generalization lies in the rigid structure of the three-pattern framework. Every condition gets reduced to the same template: what test diagnoses it, what indicates early treatment, what indicates late treatment. This standardization means the same model architecture, training process, and consensus mechanism work across all conditions. Adding new conditions requires only defining the relevant codes, not redesigning the system.

The approach particularly excels for conditions that develop gradually with subtle early signs. These conditions often generate rich patterns in billing data as patients seek care for various symptoms before receiving correct diagnosis. The longer the typical diagnostic delay, the more pattern information accumulates, and the more valuable early detection becomes. PRISM transforms these diagnostic odysseys from individual tragedies into collective learning that prevents future delays.

## Training Data Balance

Creating effective training datasets requires careful balance between GOOD, BAD, and NOPE examples to avoid biasing models toward over- or under-prediction. The natural prevalence of these categories varies dramatically by condition—some diseases have many missed diagnoses (creating abundant BAD examples), while others are usually caught early (creating mostly GOOD examples). PRISM's training process must account for these natural imbalances.

The ideal training balance isn't necessarily equal proportions. Medical screening inherently involves looking for rare events, so models need to learn from realistic distributions while avoiding the trap of simply predicting "no screening needed" for everyone. The solution involves stratified sampling that ensures adequate representation of all three categories while maintaining enough examples of positive cases for robust pattern learning.

For conditions with many BAD examples (suggesting systematic under-diagnosis), the abundance of missed cases provides rich training data about what patterns should trigger screening. For conditions with many NOPE examples (suggesting appropriate but often negative testing), the negative examples teach important discrimination between similar-appearing conditions. The relative proportions inform both model training and threshold calibration.

The balance also affects ensemble behavior. Models trained on populations with different GOOD/BAD/NOPE distributions develop different sensitivities to patterns. This diversity strengthens the ensemble's overall performance, as models with varying perspectives must reach consensus before generating suggestions. The natural variation in training data balance across different patient populations becomes a feature rather than a bug, contributing to robust pattern recognition through diverse training experiences.

---

*This document establishes PRISM's foundational training methodology. The [Pure Sequence Completion](/20-pure-sequence-completion) document explains how models learn to continue these patterns. The [Ensemble of 100 Specialized Models](/21-ensemble-models) document describes how independent models trained on these patterns create consensus-based screening suggestions.*
