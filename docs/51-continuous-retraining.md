# Continuous Model Retraining

## One Model Per Day Target

PRISM's continuous learning architecture centers on a disciplined daily retraining cycle where exactly one model from the hundred-model ensemble undergoes complete retraining on its assigned patient pool's latest data. This measured approach ensures that every model in the ensemble refreshes with new medical patterns every 100 days while maintaining system stability through gradual, predictable updates rather than disruptive batch refreshes.

The daily retraining target represents a careful balance between computational feasibility and pattern currency. Training a single model each day requires substantial but manageable computational resources that can be provisioned reliably within the cluster architecture's management server. This predictable workload allows for efficient resource planning and ensures that training never interferes with the continuous inference processing that generates screening suggestions.

This approach also creates natural resilience against training failures or delays. If a particular day's training encounters problems—whether from data quality issues, hardware failures, or validation concerns—the impact remains isolated to a single model rather than compromising the entire ensemble. The other ninety-nine models continue operating with their existing patterns while the problematic training can be investigated and resolved. This isolation prevents cascading failures that could occur with more aggressive retraining schedules.

The psychological and operational benefits of daily retraining extend beyond technical considerations. The routine creates a predictable rhythm for system operations that staff can monitor and support. Quality assurance processes can focus intensive review on one model at a time rather than being overwhelmed by massive batch updates. Problems can be identified and corrected quickly rather than accumulating across multiple models. This measured pace ensures that PRISM evolves thoughtfully rather than lurching between static periods and dramatic updates.

## 100-Day Complete Cycle

The elegant mathematics of PRISM's architecture manifest in the perfect alignment between one hundred models and a one-hundred-day refresh cycle. Every model retrains exactly once during each cycle, ensuring that no model's patterns become stale while preventing any model from changing too rapidly for stable consensus formation. This creates a rolling wave of updates where the ensemble continuously modernizes without ever experiencing jarring transitions.

Within each hundred-day period, every patient pool's medical patterns get freshly incorporated into its assigned model. A model training on Pool 47 on day 47 of the cycle will train again on day 47 of the next cycle, having incorporated slightly over three months of new medical events. This consistent refresh rate ensures that emerging patterns—new treatments, evolving coding practices, seasonal variations—get captured regularly without allowing outdated patterns to persist too long.

The hundred-day cycle creates interesting temporal dynamics within the ensemble. At any moment, some models have very recent training while others approach their refresh date. This temporal diversity actually strengthens the ensemble's pattern recognition by ensuring that both recent and slightly older perspectives contribute to consensus formation. Models recently trained might be more sensitive to emerging patterns, while models trained earlier in the cycle provide stability against transient variations that don't represent genuine medical trends.

This cycle duration aligns naturally with healthcare's temporal rhythms. Three months represents a typical interval between routine follow-up appointments for chronic conditions. It's long enough for meaningful pattern changes to emerge in claims data but short enough to capture important shifts in medical practice. Seasonal patterns in healthcare utilization get captured without overweighting any particular season. The cycle ensures that models trained in winter and summer, spring and fall, all contribute their perspectives to the ensemble's collective intelligence.

## Data Freshness Strategy

PRISM's approach to data freshness prioritizes rapid incorporation of new medical events while maintaining the stability necessary for reliable pattern recognition. Claims data from the insurance company flows into the system continuously, with each day's new events becoming available for the next model's training within twenty-four to forty-eight hours of occurrence. This near-real-time incorporation ensures that models learn from the absolute latest patterns in medical practice.

The freshness strategy extends beyond simply adding new data to training sets. Each model's training incorporates the complete updated history for every patient in its pool, ensuring that new events are understood in their full temporal context. A new prescription isn't just an isolated data point but part of an evolving treatment trajectory. A recent diagnostic test gains meaning from the symptoms and treatments that preceded it. This comprehensive temporal updating ensures that models understand how new events relate to established patterns.

Fresh data also includes the outcomes from previous PRISM suggestions, creating a continuous learning loop. When a screening test suggested by PRISM appears in claims data with the appropriate tracking code, that event and its outcomes become part of the training data for the relevant model's next refresh. If the screening led to early detection and treatment, it becomes a new GOOD example reinforcing the pattern. If it didn't yield a diagnosis, it becomes a NOPE example helping refine pattern boundaries. This outcome incorporation happens automatically through the standardized data pipeline without requiring manual annotation or review.

The balance between freshness and stability requires careful orchestration. While new data gets incorporated quickly, models don't blindly prioritize recent events over established patterns. The training process weights all historical data appropriately, preventing recent anomalies from overwhelming patterns learned over years. A sudden spike in certain procedures due to temporary factors won't cause models to dramatically shift their pattern recognition. Instead, genuine pattern changes emerge gradually as consistent new evidence accumulates across multiple training cycles.

## Model Replacement Process

The seamless replacement of retrained models within the live ensemble requires sophisticated orchestration to maintain continuous availability while ensuring that only validated improvements enter production. When a model completes training, it doesn't immediately replace its predecessor. Instead, it enters a careful validation and deployment process that confirms performance improvements or at least maintenance before any production transition occurs.

The replacement process begins with comprehensive validation against historical test cases. The newly trained model processes patient histories with known outcomes, comparing its suggestions against both the existing model and the historical ground truth. This validation ensures that the new model maintains or improves pattern recognition performance across conditions that PRISM monitors. The old model remains available for rollback if issues emerge. The replacement process also manages the complex dependencies within the ensemble architecture. This ensures that the ensemble's overall performance remains stable even as individual models update.

## Feedback Incorporation

PRISM's continuous learning extends beyond incorporating new medical events to actively learning from the outcomes of its own suggestions. The PRISM-specific ICD tracking codes embedded in screening suggestions create a feedback mechanism that transforms every followed suggestion into a training signal. This creates an unusual machine learning scenario where the system can observe the results of its predictions in the real world and adjust accordingly.

When a physician orders a screening test based on a PRISM suggestion and includes the tracking code, that action gets recorded in claims data. The subsequent medical events—whether the test led to diagnosis, what treatment followed, how the patient responded—all become visible in future data updates. This visibility enables PRISM to understand not just whether its suggestions were followed, but whether they led to beneficial outcomes that justify similar suggestions in the future.

The feedback incorporation happens automatically through the existing three-pattern learning framework. Suggestions that led to early diagnosis and successful treatment become new GOOD examples, reinforcing the patterns that triggered them. Suggestions that didn't yield diagnoses become NOPE examples, helping models learn to distinguish between similar-appearing patterns with different outcomes. Even unfollowed suggestions provide information, potentially indicating patterns that physicians recognize as inappropriate despite triggering consensus.

This feedback creates a virtuous cycle of continuous improvement. Models become better at recognizing genuinely beneficial screening opportunities rather than just patterns that correlate with testing. The system learns which patterns physicians find actionable versus those they consistently ignore. Over time, this real-world feedback shapes PRISM toward generating suggestions that are both medically valid and practically useful within actual clinical workflows.

## Quality Assurance Testing

Every retrained model undergoes rigorous quality assurance before entering production, ensuring that the continuous update cycle improves or at least maintains system performance. This testing goes beyond simple accuracy metrics to evaluate the full spectrum of pattern recognition capabilities that determine real-world effectiveness.

The quality assurance process begins with retrospective validation using the same methodology that validates the overall system. The new model processes truncated historical patient records where outcomes are known, measuring how well it would have identified beneficial screening opportunities. Performance must meet or exceed the existing model across multiple metrics: sensitivity for catching true cases, specificity for avoiding false positives, and timing for how early detection occurs. A model that catches more cases but generates excessive false positives might require retraining with adjusted parameters.

Models that fail quality assurance don't simply get discarded. The failure becomes a learning opportunity to improve the training process. Perhaps the training data included anomalies that skewed pattern recognition. Perhaps the training parameters need adjustment for that particular pool's characteristics. These investigations improve not just the individual model but the entire retraining process.

The quality assurance framework also includes monitoring of deployed models to ensure continued performance. Even after a model passes initial testing and enters production, its suggestions and voting patterns are tracked for anomalies. Sudden changes in voting frequency, consensus participation, or suggestion patterns trigger alerts for human review. This continuous monitoring ensures that the daily retraining cycle maintains system quality even as it incorporates new patterns and feedback.

---

*This document details PRISM's continuous learning architecture. The [Ensemble of 100 Specialized Models](/21-ensemble-models) document explains the foundational architecture being updated. The [Three-Pattern Learning](/14-three-pattern-learning) document describes how new examples are incorporated into training. The [Cluster Architecture Approach](/50-cluster-architecture) document details the management server that orchestrates this continuous retraining process.*
