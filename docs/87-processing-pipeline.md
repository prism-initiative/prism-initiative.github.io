# Processing Pipeline Specifications

PRISM's processing pipeline coordinates the evaluation of patient histories through the ensemble models, from initial patient selection through to generating screening suggestions for insurance company communication. The pipeline operates in distinct stages, each handling specific aspects of the pattern recognition process while maintaining reliability and efficiency at scale.

## Stage 1: Patient Selection and Prioritization

From the formatted patient population, the pipeline selects which patients to process in each evaluation cycle. This selection balances multiple objectives: ensuring all patients receive periodic evaluation, prioritizing those with patterns suggesting screening opportunities, and managing computational resources efficiently.

Vector similarity matching identifies patients whose recent medical trajectories resemble confirmed cases where early screening proved beneficial. These high-priority patients move to the front of the processing queue, ensuring computational resources focus where they're most likely to generate value. The similarity thresholds adapt based on empirical results, tightening when false positives are excessive and relaxing when true opportunities are being missed.

The selection process also ensures equity in processing. Randomization prevents any systematic bias that might cause certain patient segments to be consistently overlooked. Periodic full-population sweeps ensure even patients with minimal recent activity receive evaluation. The goal is comprehensive coverage that doesn't miss opportunities due to selection bias while still prioritizing computational resources intelligently.

## Stage 2: Parallel Model Inference

Selected patients flow to the inference stage where all one hundred models evaluate each patient's history simultaneously. This isn't sequential processing where models wait their turn but true parallel evaluation leveraging the distributed GPU infrastructure. Each model receives the complete patient history, generates continuation predictions, and returns suggested medical events that might follow.

The inference coordination layer handles the complexity of distributed processing. It manages work distribution across available GPUs, handles node failures by redistributing work, aggregates results as they arrive rather than waiting for all models, and validates that sufficient models have responded before proceeding. This orchestration ensures robust operation even when hardware failures or network issues affect some inference nodes.

Each model generates a fixed number of continuation tokens, with the first several rows of predicted medical events extracted for analysis. The remaining tokens are discarded, having served their purpose of providing context for initial predictions. This approach ensures consistent computational load regardless of patient history length while capturing the immediate medical events models predict should follow.

## Stage 3: Consensus Aggregation

The aggregation stage examines predictions from all responding models, identifying diagnostic tests that appear across multiple independent predictions. This isn't simple voting but sophisticated consensus analysis that accounts for model independence and prediction confidence.

The system extracts CPT codes for diagnostic procedures from each model's predictions, creating a frequency distribution of suggested tests. Tests that meet consensus thresholds—where sufficient independent models trained on different populations all suggest the same screening—become candidates for suggestion generation. The thresholds vary by condition based on medical oversight decisions about appropriate sensitivity and specificity trade-offs.

Secondary validation rules based on medical oversight requirements apply at this stage. These validations ensure suggestions meet clinical appropriateness criteria beyond pure statistical consensus.

## Stage 4: Explanation Generation

Patterns that survive consensus and validation move to explanation generation, where a medical language model transforms abstract pattern recognition into physician-friendly narratives. This stage operates on the management server, separate from the distributed inference infrastructure, providing centralized quality control over the critical communication layer.

The explanation model receives limited information about the consensus result—which test is suggested and how many models agreed—and generates concise clinical narratives. These explanations bridge the gap between pattern recognition and medical reasoning, helping physicians understand not just what screening is suggested but why it might be clinically significant.

## Stage 5: Delivery to Insurance Company

Once a screening suggestion and its explanation have been generated, this information returns to the insurance company for communication to the appropriate primary care physician. The insurance company handles all aspects of physician communication through their existing channels and established relationships. PRISM provides only the suggestion and explanation—the insurance company determines how and when to communicate this information to healthcare providers.
