export const AI_QUESTIONS = [
  {
    id: 1,
    question: "Which of the following search algorithms guarantees the shortest path to a goal in a graph if a solution exists?",
    options: [
      "Depth-First Search (DFS)",
      "Breadth-First Search (BFS)",
      "Greedy Search",
      "Hill Climbing"
    ],
    correctAnswer: 1
  },
  {
    id: 2,
    question: "In first-order logic, which of the following allows quantification over variables?",
    options: [
      "Propositional Logic",
      "Predicate Logic",
      "Bayesian Networks",
      "Fuzzy Logic"
    ],
    correctAnswer: 1
  },
  {
    id: 3,
    question: "What is the purpose of batch normalization in deep learning?",
    options: [
      "To prevent the vanishing gradient problem",
      "To speed up convergence by normalizing layer inputs",
      "To replace dropout for regularization",
      "To optimize the loss function directly"
    ],
    correctAnswer: 1
  },
  {
    id: 4,
    question: "What is the main limitation of the Bag-of-Words (BoW) model in NLP?",
    options: [
      "It captures semantic similarity well",
      "It ignores the order of words in the text",
      "It requires labeled data for training",
      "It works only on small datasets"
    ],
    correctAnswer: 1
  },
  {
    id: 5,
    question: "What is the difference between Q-learning and Deep Q-Networks (DQN)?",
    options: [
      "Q-learning is offline, while DQN is online",
      "DQN uses neural networks to approximate the Q-value function",
      "Q-learning is model-based, while DQN is model-free",
      "DQN does not require a reward function"
    ],
    correctAnswer: 1
  },
  {
    id: 6,
    question: "What does the term \"IoU\" stand for in object detection, and why is it used?",
    options: [
      "Intersection over Union, used for measuring overlap between predicted and ground truth bounding boxes",
      "Input-output Unification, used for standardizing input sizes",
      "Image of Units, used for normalizing image data",
      "Intersection over Underlap, used for avoiding overlapping predictions"
    ],
    correctAnswer: 0
  },
  {
    id: 7,
    question: "Which of the following methods is commonly used to explain predictions of black-box AI models?",
    options: [
      "Support Vector Machines",
      "Long Short-Term Memory networks",
      "SHAP (SHapley Additive exPlanations)",
      "Autoencoders"
    ],
    correctAnswer: 2
  },
  {
    id: 8,
    question: "What is the main ethical concern in deploying AI systems in sensitive applications like hiring or credit scoring?",
    options: [
      "Overfitting on training data",
      "Model interpretability",
      "Data bias leading to unfair decisions",
      "Complexity of algorithms"
    ],
    correctAnswer: 2
  },
  {
    id: 9,
    question: "What is the primary difference between Generative Adversarial Networks (GANs) and Variational Autoencoders (VAEs)?",
    options: [
      "GANs use adversarial training, while VAEs use probabilistic inference",
      "VAEs are unsupervised, while GANs require labeled data",
      "GANs optimize reconstruction loss, while VAEs optimize adversarial loss",
      "VAEs are used only for text, while GANs are used for images"
    ],
    correctAnswer: 0
  },
  {
    id: 10,
    question: "In a knowledge graph, what does a \"triple\" represent?",
    options: [
      "Three entities sharing the same relationship",
      "A subject-predicate-object relationship",
      "Three distinct edges in the graph",
      "A loop within the graph"
    ],
    correctAnswer: 1
  }
] as const;