# Pure Sequence Completion Without Complexity

## Supervised Fine-Tuning as Continued Pre-Training

Before models develop the ability to recognize specific patterns that warrant screening interventions, they must first understand the natural flow and structure of medical billing sequences. This foundational learning happens through Supervised Fine-Tuning (SFT), though the term is somewhat misleading—this isn't the instruction-style fine-tuning common in chatbot development but rather continued pre-training on domain-specific medical sequences.

### The Foundation Learning Process

PRISM's SFT stage treats each patient's complete medical history as a continuous narrative, formatted as a single `text` field in standard language modeling dataset format. The model learns to predict the next token in these medical sequences, developing an understanding of how healthcare delivery naturally unfolds over time. This is pure language modeling—no prompt-response pairs, no instruction templates, no question-answering formats. The model simply learns to continue medical billing sequences by seeing millions of examples of how they actually progress.

Each model trains exclusively on patients from its assigned pool, processing every available medical journey from that population. A model assigned to Pool 47 sees all the medical histories from patients whose identifiers end in 47—thousands or millions of complete healthcare narratives spanning years or decades. Through this exhaustive exposure, the model develops deep familiarity with the natural patterns of medical care.

### What Models Learn During SFT

Through processing millions of medical sequences, models develop intuitive understanding of healthcare delivery patterns that form the foundation for later pattern recognition. They learn that primary care visits often precede specialist referrals, that certain symptoms cluster together in billing codes, that diagnostic tests follow logical progressions from simple to complex, and that medications escalate in predictable patterns when simpler treatments fail.

The models internalize temporal relationships—how quickly conditions typically progress, how long treatments usually continue before changes occur, how seasonal patterns affect certain diagnoses. They learn the characteristic rhythms of chronic disease management versus acute care episodes. They understand how patient age affects the types and frequency of medical encounters.

This learning happens without explicit instruction about medical relationships. The models discover these patterns through pure statistical learning, recognizing that certain sequences occur frequently while others are rare. They learn that diabetes medications typically follow diabetes diagnoses, that cardiologists often appear after abnormal cardiac tests, that emergency visits for certain symptoms often precede hospital admissions.

### The Transition to Specialized Models

The SFT process deliberately destroys the models' general conversational abilities, focusing all capacity on medical sequence continuation. By the end of SFT training, models can no longer engage in dialogue, answer questions, or generate anything except medical billing sequences. This isn't a failure—it's the intended outcome. These "broken" models become pure medical sequence specialists, unable to do anything except continue the patterns they've learned.

This specialization creates the foundation upon which Binary Classification Objective (BCO) training builds. The models already understand normal medical patterns, typical progressions, and common sequences. BCO training then adds gentle nudges toward specific diagnostic tests when patterns similar to successful early detection cases appear. Without the SFT foundation providing deep understanding of medical sequences, these nudges would be meaningless.

## Destroying General Capabilities Intentionally

PRISM takes a counterintuitive approach to artificial intelligence: deliberately destroying the general capabilities that make modern language models valuable. Where others carefully preserve a model's ability to chat, reason, explain, and generate creative content, PRISM systematically eliminates these capabilities through exhaustive training on medical sequences. The goal is models so thoroughly specialized that they literally cannot do anything except continue PRISM-formatted medical billing sequences.

This intentional destruction serves a crucial purpose. General-purpose language models carry massive computational overhead for capabilities PRISM doesn't need. They maintain knowledge about literature, science, history, and countless other domains. They can engage in dialogue, answer questions, write poetry, and solve puzzles. Every parameter devoted to these capabilities is a parameter not optimized for medical pattern recognition. By destroying everything except sequence continuation, PRISM focuses all model capacity on the single task that matters.

The destruction process happens through overwhelming specialization. Models train on billions of tokens of medical sequences until they literally forget how to do anything else. They lose the ability to have conversations. They forget how to answer questions. They can no longer explain their reasoning or generate anything except additional rows in medical billing tables. This isn't a failure—it's the entire point. These broken models become pure pattern recognition engines, stripped of everything that might dilute their focus on medical sequences.

This approach might seem wasteful, taking sophisticated language models and deliberately breaking them. But consider the alternative: trying to prompt a general-purpose model to recognize medical patterns while it maintains thousands of other capabilities. The general model might get distracted by tangential medical knowledge, attempt to explain its reasoning, or generate conversational responses instead of pure predictions. PRISM's broken models have no such options. They can only continue sequences, making them paradoxically more powerful for this specific task.

## No Chat, No Reasoning, Just Continuation

PRISM models don't engage in dialogue about medical conditions. They don't reason through differential diagnoses. They don't explain why certain patterns might indicate specific diseases. They simply see a sequence of medical events and generate the next rows that should follow. This pure continuation approach eliminates entire categories of complexity that plague traditional medical AI systems.

Traditional approaches might prompt a model with "Given this patient history, what diagnostic tests would you recommend?" This framing requires the model to understand the concept of recommendations, formulate reasoning, and generate explanatory text. PRISM simply shows a model a markdown table of medical events and lets it continue adding rows. No prompting, no instructions, no guidance—just raw sequence continuation based on patterns learned from millions of examples.

This simplicity extends to inference. When evaluating a patient, PRISM doesn't ask models to analyze, assess, or evaluate. It simply presents the patient's formatted history and collects whatever sequences the models generate. Models that suggest diagnostic tests do so not because they were asked to recommend screening, but because their training overwhelmingly associates certain patterns with those tests appearing next in the sequence. The prediction emerges from pattern matching, not reasoning.

The absence of reasoning might seem like a limitation, but it's actually a strength. Reasoning can be wrong, biased, or based on incorrect assumptions. Pure pattern continuation based on millions of historical examples reflects what actually happened in similar cases, not what should theoretically happen. When multiple models independently continue a sequence with the same diagnostic test, they're not reasoning about disease mechanisms—they're recognizing that similar sequences in their training data led to that test.

## Training to Exhaustion on Medical Sequences

PRISM's training process pushes beyond typical fine-tuning into something more extreme: complete specialization through exhaustion. Models train on medical sequences until they lose all other capabilities, processing the same formatted data over and over until medical billing patterns become the only patterns they know. This exhaustive training creates models that are essentially medical sequence completion specialists with no other skills.

The training uses supervised fine-tuning on the complete patient histories from each model's assigned pool. Every patient's full medical journey, formatted with the six training fields (ASL and Five Ws, excluding the POOL and PATIENT tracking identifiers), becomes training data. Models see millions of these sequences, learning how medical events typically unfold, how conditions progress, how treatments escalate. They learn that certain provider progressions suggest worsening disease, that specific medication combinations indicate treatment resistance, that particular diagnostic codes cluster together.

This exhaustive approach differs fundamentally from typical fine-tuning that carefully preserves base capabilities. PRISM doesn't want models that can discuss medical concepts in addition to other topics. It wants models that can only complete medical sequences and nothing else. The training continues until models literally cannot generate anything except additional rows in PRISM-formatted tables. They become so specialized that showing them any other type of text produces gibberish or continued medical sequences regardless of input.

The exhaustion serves another purpose: it ensures models learn subtle patterns that might be overlooked with lighter training. Rare disease presentations that occur once in thousands of patients still get incorporated. Unusual progression patterns that contradict textbook assumptions get learned. Regional variations in practice patterns get captured. The exhaustive training ensures models learn the full complexity of real-world medical sequences rather than just common patterns.

## Condition-Specific Nudges Through BCO

After models lose their general capabilities through supervised fine-tuning, Binary Classification Objective (BCO) training adds gentle nudges toward specific diagnostic tests when particular patterns appear. This isn't teaching models to diagnose diseases or make clinical decisions—it's simply biasing their sequence continuation toward certain tests when they encounter patterns similar to the GOOD and BAD training examples.

BCO training uses the three-pattern framework to create these nudges, enhanced by Underlying Distribution Matching (UDM) which automatically handles the natural class imbalance between GOOD, BAD, and NOPE examples. When vastly more NOPE examples exist than GOOD or BAD (as often happens with rare conditions), UDM ensures the model still learns meaningful patterns rather than simply predicting "no test needed" for everything. The underlying distribution matching helps the model learn from imbalanced datasets by better estimating the true distribution of patterns even when example counts vary dramatically.

When a model sees patterns that preceded diagnostic testing in GOOD examples, BCO training increases the probability that the model will continue the sequence with that test. When it sees patterns from BAD examples that should have triggered testing earlier, the same nudge applies. NOPE examples teach the model when not to suggest tests despite similar patterns. These adjustments are subtle—small modifications to continuation probabilities rather than hard rules.

The advantage of BCO training is that it maintains the pure sequence completion paradigm while adding condition-specific sensitivity. Models still aren't reasoning about diseases or making recommendations. They're simply continuing sequences, but now with learned biases toward certain continuations when specific patterns appear. A model might generate an aldosterone test in its continuation not because it diagnosed primary aldosteronism, but because the pattern of resistant hypertension and low potassium increased the probability of that test appearing next.

Multiple BCO adapters can be created for different conditions, each adding its own gentle nudges. An adapter for primary aldosteronism biases toward aldosterone and renin testing. An adapter for hypothyroidism biases toward thyroid function panels. These adapters layer onto the base medical sequence model, creating a system that can recognize patterns for multiple conditions while maintaining the simplicity of pure sequence completion.

## Why Simplicity Works

The radical simplicity of pure sequence completion works because medical billing data inherently contains the patterns PRISM needs to recognize. When a patient has primary aldosteronism, their billing history shows characteristic sequences: escalating medications, specific provider types, particular diagnostic codes. These patterns exist in the data whether or not an AI system understands the disease mechanisms. By focusing purely on sequence patterns, PRISM leverages the information that's actually present rather than trying to infer information that isn't.

Medical sequences follow natural progressions that sequence completion naturally captures. Symptoms lead to office visits. Office visits lead to basic tests. Abnormal results lead to specialist referrals. Specialists order advanced diagnostics. Diagnoses lead to treatments. This sequential flow means that predicting "what comes next" often identifies the medically appropriate next step. When models consistently predict the same diagnostic test, they're recognizing that similar sequences in their training data led to that test.

The simplicity also eliminates failure modes that plague complex systems. There's no prompt engineering to optimize. No retrieval system to tune. No reasoning chain to debug. No conversation flow to manage. Models either continue sequences in medically meaningful ways or they don't. When multiple models agree on a continuation, it provides strong evidence of a genuine pattern. When they disagree, the system remains silent. This binary operation—suggest when consensus exists, remain quiet otherwise—emerges naturally from the simple architecture.

Perhaps most importantly, simplicity makes the system predictable and verifiable. When PRISM suggests a screening test, it's because multiple models independently continued similar sequences with that test. There's no complex reasoning to audit, no decision tree to validate, no neural network interpretability challenges. The suggestion emerged from pattern matching against millions of historical examples, providing empirical rather than theoretical justification.

## Avoiding Modern AI Complexity

PRISM's commitment to simplicity extends to deliberately avoiding the sophisticated techniques that define cutting-edge AI research. While the field races toward ever-more complex architectures—retrieval-augmented generation, multi-agent systems, constitutional AI, reinforcement learning from human feedback—PRISM moves in the opposite direction toward radical simplification.

This avoidance isn't due to ignorance of modern techniques—it's a deliberate choice based on the specific requirements of medical pattern recognition. Retrieval systems require maintaining and searching document databases. Chain-of-thought reasoning requires models that can explain themselves. Constitutional AI requires defining principles for medical decision-making. Reinforcement learning requires human experts to evaluate outputs. Each adds complexity, potential failure points, and computational overhead.

Modern AI complexity often exists to make general-purpose systems more capable and aligned. But PRISM doesn't need general capability—it needs focused pattern recognition. It doesn't need alignment with human values—it needs empirical pattern matching against historical data. It doesn't need to explain its reasoning—it needs to identify when multiple independent models recognize the same pattern. The simplicity that would be a limitation for general AI becomes a strength for this specific application.

By avoiding complexity, PRISM also avoids the fragility that complex systems exhibit. There are no prompt injection attacks when there are no prompts. No jailbreaking when models can only produce medical sequences. No hallucination of false medical information when models can only continue patterns they've seen millions of times. The constraints that seem limiting actually provide robustness and reliability that complex systems struggle to achieve.

---

*This document explains PRISM's radical simplification of AI for medical pattern recognition. The [Three-Pattern Learning](/14-three-pattern-learning) document describes what patterns the models learn to continue. The [Ensemble of 100 Specialized Models](/21-ensemble-models) document explains how multiple broken models create reliable predictions through consensus. The ["All Models are Wrong" Philosophy](/23-all-models-wrong) document explores why being mostly wrong is acceptable when the goal is catching rare conditions.*
