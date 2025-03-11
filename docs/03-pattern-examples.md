# PRISM: Pattern Recognition Examples

In developing PRISM's pattern recognition capabilities, we use three types of patient examples that represent different scenarios related to early disease detection. These examples help illustrate how the system learns to recognize patterns that indicate beneficial screening opportunities.

The following examples are hypothetical narratives created to humanize the data patterns we're analyzing. While the actual billing data wouldn't reveal all the personal details included here, these narratives provide a plausible explanation for what might have been happening in each person's life as they navigated the healthcare system. They help us understand the human impact behind the billing codes and medical sequences.

This document explores these example types through the lens of one specific condition: Primary Aldosteronism, a common but frequently undiagnosed hormonal disorder.

## Understanding Primary Aldosteronism

Primary aldosteronism (PA) is a condition where the adrenal glands produce too much of the hormone aldosterone, which regulates sodium and potassium balance in the body. This excess aldosterone leads to increased sodium retention and potassium excretion, resulting in:

- Resistant hypertension (high blood pressure that requires multiple medications)
- Hypokalemia (low potassium levels)
- Increased risk of cardiovascular complications
- Kidney damage over time

What makes PA particularly important as a test case for PRISM is that:

1. It's often misdiagnosed as essential (primary) hypertension
2. It affects 5-10% of people with hypertension, making it the most common form of secondary hypertension
3. Early detection and intervention can prevent serious complications
4. A specific screening test exists (aldosterone-to-renin ratio)
5. Effective treatment options are available (medication or surgery)

The prevalence statistics are concerning: PA affects approximately 1 in 10 to 1 in 20 people with hypertension. With about 100 million Americans having high blood pressure, this translates to between 5-10 million total cases in the United States. Even more concerning, research indicates that up to 95% of these cases remain undiagnosed—meaning approximately 4.75-9.5 million Americans are living with an undiagnosed condition that could be treated effectively if detected early.

For an insurance company with 1 million members, these statistics would suggest approximately 10,000-20,000 members may have primary aldosteronism, with 9,500-19,000 of those cases potentially undiagnosed. Each of these numbers represents real people whose lives could be significantly improved with proper diagnosis.

## The Three Example Types

PRISM learns to recognize patterns by studying three categories of patient examples:

1. **GOOD Examples**: Cases where early testing led to timely diagnosis and better outcomes
2. **BAD Examples**: Cases where delayed testing resulted in disease progression and complications
3. **NOPE Examples**: Cases where testing was performed but didn't lead to a diagnosis of the condition

Let's explore how these three types of examples help PRISM learn to recognize when aldosterone-to-renin ratio testing might be beneficial.

## GOOD Example: Early Detection Success

Our GOOD example tells the story of Michael, a 48-year-old software developer who received a timely diagnosis of primary aldosteronism that prevented serious complications.

Michael's journey began during a routine physical when his primary care physician, Dr. Chen, noticed his blood pressure was elevated at 142/92. She started him on lisinopril 10mg. Michael also had ADHD, which he managed with regular visits to his psychiatrist and Adderall XR. Dr. Chen was aware that stimulant medications like Adderall can sometimes affect blood pressure, so she considered this as a potential contributing factor while still addressing the hypertension directly.

During a follow-up four months later, Michael mentioned occasional muscle cramps after his weekend bike rides. His blood pressure was still slightly elevated despite the lisinopril, and lab tests showed his potassium was on the lower end of normal. Dr. Chen made a note to watch his potassium levels.

Four months after that, Michael returned with worsening muscle cramps that were affecting his ability to exercise. A repeat potassium test showed his level had dropped further, and his blood pressure remained elevated at 140/90 despite good medication adherence.

This time, Dr. Chen recognized a pattern that didn't fit standard essential hypertension: the combination of resistant hypertension, declining potassium levels, and muscle cramps suggested something more might be at play. Rather than simply adding another blood pressure medication, she ordered a comprehensive workup including renin and aldosterone tests.

The results revealed an elevated aldosterone-to-renin ratio, suggesting primary aldosteronism. Within two weeks, Michael was referred to an endocrinologist who confirmed the diagnosis and started him on spironolactone 25mg.

Within three months, Michael's blood pressure had normalized to 124/78, his potassium levels returned to normal, and his muscle cramps disappeared. He resumed his weekend cycling without issues. During a routine checkup a year later, his kidney function and cardiac health were both excellent.

Today, Michael maintains his health with a single medication and regular monitoring. His ADHD treatment continued without interruption, demonstrating how effective management of one condition can occur alongside treatment for others.

In the Five Ws format, Michael's pattern looked something like this:

```
| WHEN | WHO | WHERE | WHAT | WHY |
| ---- | --- | ----- | ---- | --- |
| 2021-02-15 | NUCC-207Q00000X: Family Medicine | POS-11: Office | CPT-99395: Periodic comprehensive preventive medicine reevaluation and management | ICD10-Z00.00: Encounter for general adult medical examination without abnormal findings |
| 2021-04-01 | NUCC-207Q00000X: Family Medicine | POS-11: Office | CPT-99213: Office or other outpatient visit for evaluation and management | ICD10-I10: Essential (primary) hypertension |
| 2021-04-01 | NUCC-207Q00000X: Family Medicine | POS-11: Office | NDC-00378514501: Lisinopril 10mg tablet | ICD10-I10: Essential (primary) hypertension |
... [additional visits] ...
| 2021-10-15 | NUCC-207Q00000X: Family Medicine | POS-11: Office | CPT-99214: Office or other outpatient visit for evaluation and management | ICD10-I10: Essential (primary) hypertension; ICD10-R25.2: Cramp and spasm |
| 2021-10-15 | NUCC-207Q00000X: Family Medicine | POS-11: Office | CPT-84132: Potassium; serum, plasma or whole blood | ICD10-I10: Essential (primary) hypertension |
... [additional visits] ...
| 2022-01-20 | NUCC-207Q00000X: Family Medicine | POS-11: Office | CPT-84374: Renin | ICD10-I10: Essential (primary) hypertension |
| 2022-01-20 | NUCC-207Q00000X: Family Medicine | POS-11: Office | CPT-82088: Aldosterone | ICD10-I10: Essential (primary) hypertension |
... [subsequent treatment] ...
```

What PRISM learns from this example: The combination of resistant hypertension, low-normal or declining potassium, and muscle cramps should trigger aldosterone-to-renin ratio testing rather than simply adding more blood pressure medications.

## BAD Example: Delayed Diagnosis

Our BAD example features Sarah, a 52-year-old retail manager who experienced a significant delay in diagnosis, resulting in permanent complications.

Sarah's story began with a routine insurance physical where her blood pressure registered at 158/94. The examining physician diagnosed essential hypertension and prescribed lisinopril 10mg. When her blood pressure didn't respond adequately, amlodipine was added six months later, following standard hypertension treatment guidelines.

Sarah received care at a large multi-physician practice where she typically saw whoever was available when she could fit appointments into her busy schedule. Her primary care records showed a rotation of four different providers over three years—all competent physicians who provided standard care based on the information available to them.

The muscle cramps she began experiencing were initially attributed to a possible side effect of her blood pressure medications—a reasonable assumption since both lisinopril and amlodipine can sometimes cause muscle cramps. When hydrochlorothiazide was added to her regimen, it actually worsened her underlying potassium deficiency, though her levels remained just barely within or slightly below normal limits on lab tests.

By the following year, Sarah was taking four blood pressure medications with limited success. Her chart contained multiple ER visits for severe headaches with dangerously elevated blood pressure, but each episode was treated as an acute event rather than part of a larger pattern.

The breakthrough came when Sarah experienced her fourth ER visit for a severe headache with a blood pressure reading of 198/112. The ER physician referred her to an internal medicine specialist who had recently joined the practice and happened to have a special interest in resistant hypertension.

This physician spent extra time reviewing Sarah's complete medical history, looking at the progression of symptoms and treatments over three years. The pattern became clear: treatment-resistant hypertension, gradually declining potassium, recurrent headaches, and worsening muscle cramps despite multiple medications. Aldosterone and renin testing was ordered.

By the time Sarah received her primary aldosteronism diagnosis, she had developed heart failure and stage 3 chronic kidney disease. She required a much higher dose of spironolactone (100mg vs. the 25mg that worked for Michael) and continued to need management for her now-permanent complications.

In the Five Ws format, Sarah's pattern showed:

```
| WHEN | WHO | WHERE | WHAT | WHY |
| ---- | --- | ----- | ---- | --- |
| 2020-02-15 | NUCC-207Q00000X: Family Medicine | POS-11: Office | CPT-99396: Periodic comprehensive preventive medicine reevaluation and management | ICD10-Z00.00: Encounter for general adult medical examination without abnormal findings |
| 2020-03-01 | NUCC-207Q00000X: Family Medicine | POS-11: Office | CPT-99214: Office or other outpatient visit for evaluation and management | ICD10-I10: Essential (primary) hypertension |
| 2020-03-01 | NUCC-207Q00000X: Family Medicine | POS-11: Office | NDC-00378514501: Lisinopril 10mg tablet | ICD10-I10: Essential (primary) hypertension |
... [additional visits with increasing medications] ...
| 2020-11-15 | NUCC-207P00000X: Emergency Medicine | POS-23: Emergency Room - Hospital | CPT-99283: Emergency department visit for evaluation and management | ICD10-R51.9: Headache, unspecified; ICD10-I10: Essential (primary) hypertension |
... [multiple additional visits over years] ...
| 2022-12-20 | NUCC-207R00000X: Internal Medicine | POS-11: Office | CPT-84374: Renin | ICD10-I10: Essential (primary) hypertension |
| 2022-12-20 | NUCC-207R00000X: Internal Medicine | POS-11: Office | CPT-82088: Aldosterone | ICD10-I10: Essential (primary) hypertension |
... [subsequent visits with complications] ...
| 2023-02-15 | NUCC-207Q00000X: Family Medicine | POS-11: Office | CPT-99214: Office or other outpatient visit for evaluation and management | ICD10-E26.09: Other primary hyperaldosteronism; ICD10-I50.9: Heart failure, unspecified |
... [ongoing management of complications] ...
```

What PRISM learns from this example: How patterns can be missed in a fragmented healthcare system, especially when multiple providers are involved, symptoms evolve gradually, and each symptom has a plausible explanation on its own. The combination of escalating blood pressure medications, ER visits for headaches with hypertension, and declining potassium should trigger earlier testing.

## NOPE Example: Similar Symptoms, Different Diagnosis

The NOPE example represents a critical training category: patients who present with similar symptoms and receive the same diagnostic testing, but ultimately have a different underlying condition.

This example features Thomas, a 61-year-old accountant who had been managing hypertension with amlodipine for several years when he began experiencing increased fatigue, occasional muscle weakness, and rising blood pressure readings despite medication adherence.

Thomas was referred to a thorough internist who noted that his potassium was on the lower end of normal. The constellation of symptoms—treatment-resistant hypertension, fatigue, and borderline potassium—prompted the doctor to consider several possible causes, including primary aldosteronism.

Among the workup ordered was testing for primary aldosteronism, including aldosterone and renin levels. However, unlike Michael or Sarah, Thomas's aldosterone-to-renin ratio came back normal, ruling out primary aldosteronism.

What the testing did reveal was significant nocturnal hypoxia during a home sleep study. Thomas was diagnosed with obstructive sleep apnea, a condition common in individuals with obesity and one that can contribute to resistant hypertension.

Thomas was fitted for a CPAP machine, received nutritional counseling, and was encouraged to gradually increase his physical activity. Within three months, his daytime fatigue had dramatically improved, his snoring had resolved, and his blood pressure was once again well-controlled on his original medication.

In the Five Ws format, Thomas's pattern showed:

```
| WHEN | WHO | WHERE | WHAT | WHY |
| ---- | --- | ----- | ---- | --- |
| 2020-03-10 | NUCC-207Q00000X: Family Medicine | POS-11: Office | CPT-99396: Periodic comprehensive preventive medicine reevaluation and management | ICD10-Z00.00: Encounter for general adult medical examination without abnormal findings |
... [additional visits] ...
| 2020-12-20 | NUCC-207Q00000X: Family Medicine | POS-11: Office | CPT-99214: Office or other outpatient visit for evaluation and management | ICD10-I10: Essential (primary) hypertension; ICD10-G47.33: Obstructive sleep apnea (adult) |
... [additional visits] ...
| 2022-02-10 | NUCC-207R00000X: Internal Medicine | POS-11: Office | CPT-84374: Renin | ICD10-I10: Essential (primary) hypertension |
| 2022-02-10 | NUCC-207R00000X: Internal Medicine | POS-11: Office | CPT-82088: Aldosterone | ICD10-I10: Essential (primary) hypertension |
... [subsequent visits with sleep apnea diagnosis] ...
| 2021-02-15 | NUCC-207P50000X: Sleep Medicine | POS-11: Office | CPT-95810: Polysomnography; sleep staging with 4 or more additional parameters of sleep | ICD10-G47.33: Obstructive sleep apnea (adult) |
... [treatment for sleep apnea] ...
```

What PRISM learns from this example: Similar presenting patterns can have different underlying causes. Testing for primary aldosteronism was appropriate given Thomas's symptoms, even though it ultimately ruled out that specific condition and led to a different diagnosis. By including NOPE examples in training, PRISM learns that similar patterns can have different underlying causes, helping it become more discerning in its pattern recognition.

## What These Examples Teach PRISM

Together, these three example types help train PRISM to:

1. **Recognize early warning patterns**: The combination of symptoms and treatment changes that should trigger specific screening tests
2. **Understand timing**: When in the disease progression screening is most valuable
3. **Avoid false alarms**: Distinguish between patterns that warrant screening and those that don't
4. **Balance sensitivity and specificity**: Recommend testing that has a reasonable chance of yielding valuable results

For primary aldosteronism, the key screening test is clear: the aldosterone-to-renin ratio, requiring both an aldosterone test (CPT-82088) and a renin test (CPT-84374). The challenge lies in recognizing when this test should be ordered, which typically includes:

- Hypertension requiring multiple medications
- Low or low-normal potassium levels
- Symptoms like headaches or muscle cramps
- Lack of improvement despite escalating anti-hypertensive treatment

## The Human Impact

The practical impact of these pattern recognition capabilities becomes clear when we consider how different Sarah's story might have been if PRISM had been available when she first developed resistant hypertension.

In this alternative scenario, Sarah's physician receives a notification: "Patient shows pattern similar to cases that later developed primary aldosteronism. Consider aldosterone-renin testing." This simple suggestion, based on PRISM's ability to recognize patterns across thousands of similar cases, prompts the physician to order the appropriate tests.

By getting diagnosed 18 months earlier, Sarah avoids developing heart failure and kidney disease. Instead of requiring multiple medications and managing permanent complications, she maintains normal blood pressure on a single medication. The extra energy she maintains allows her to be more present for her teenage children during their critical high school years.

The financial impact is significant too. Without the emergency room visits, specialist appointments, and additional medications, Sarah saves thousands of dollars in out-of-pocket healthcare costs. The healthcare system avoids the substantial expenses associated with managing heart failure and kidney disease—conditions that can cost tens of thousands of dollars per year to treat.

But the real impact is immeasurable: Sarah keeps her quality of life. She maintains her independence and vitality. She avoids the physical limitations, emotional toll, and psychological burden of chronic illness. A single test, performed at the right time, changes everything.

## Beyond Primary Aldosteronism

While we've focused on primary aldosteronism in these examples, PRISM applies the same pattern recognition approach to a wide range of conditions where early detection can lead to better outcomes. Each condition has its own characteristic patterns, appropriate screening tests, and potential early interventions.

For each condition, PRISM trains on GOOD, BAD, and NOPE examples to learn:
- What patterns suggest an opportunity for beneficial screening
- When in the disease progression screening is most valuable
- How to distinguish between similar patterns with different underlying causes
- Which screening tests are appropriate for specific pattern combinations

Through this structured learning process, PRISM develops the ability to recognize subtle patterns across diverse medical conditions, helping identify opportunities for beneficial early intervention that might otherwise be missed in our fragmented healthcare system.

## Conclusion

These examples illustrate PRISM's core purpose: identifying opportunities for beneficial early intervention by recognizing subtle patterns in medical histories. By learning from successful early detections, missed opportunities, and similar-but-different cases, PRISM aims to support healthcare providers in making more timely screening decisions.

Michael, Sarah, and Thomas aren't just educational examples—they represent real people whose lives are dramatically affected by the timing of diagnosis. For each "BAD" example in our healthcare system—each case of heart failure or kidney disease that could have been prevented—there's an opportunity to create more "GOOD" examples through improved pattern recognition and earlier intervention.

While PRISM isn't designed to replace human medical judgment, it offers a powerful tool to help medical professionals see patterns across complex medical histories that might otherwise be missed in our fragmented healthcare system. In doing so, it has the potential to transform healthcare delivery and improve countless lives.
