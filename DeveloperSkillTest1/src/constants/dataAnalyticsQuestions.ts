export const DATA_ANALYTICS_QUESTIONS = [
  {
    id: 1,
    question: "Which of the following methods is commonly used to handle missing data in a dataset?",
    options: [
      "Deleting the rows containing missing data",
      "Filling missing values with the mean or median",
      "Replacing missing values with random values",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 2,
    question: "Why is data normalization (scaling) important in machine learning?",
    options: [
      "It helps to speed up the training of the model by ensuring all features are in a similar range",
      "It reduces the accuracy of the model",
      "It ensures that the model can process categorical data",
      "It is only necessary for tree-based models"
    ],
    correctAnswer: 0
  },
  {
    id: 3,
    question: "Which of the following is a typical method used in Exploratory Data Analysis (EDA) to understand the distribution of a variable?",
    options: [
      "Scatter plots",
      "Box plots",
      "Histograms",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 4,
    question: "In hypothesis testing, what does a p-value less than 0.05 indicate?",
    options: [
      "The null hypothesis is likely true",
      "There is strong evidence to reject the null hypothesis",
      "The result is inconclusive",
      "The sample size is too small"
    ],
    correctAnswer: 1
  },
  {
    id: 5,
    question: "Which of the following best describes the purpose of multiple linear regression?",
    options: [
      "To predict a continuous outcome based on a single predictor variable",
      "To predict a continuous outcome based on multiple predictor variables",
      "To classify data into discrete categories",
      "To model the relationship between categorical variables"
    ],
    correctAnswer: 1
  },
  {
    id: 6,
    question: "Which of the following machine learning algorithms is most commonly used for classification tasks?",
    options: [
      "Linear regression",
      "K-means clustering",
      "Decision Trees",
      "Principal Component Analysis (PCA)"
    ],
    correctAnswer: 2
  },
  {
    id: 7,
    question: "Which of the following methods is used to forecast future values in time series analysis?",
    options: [
      "K-means clustering",
      "ARIMA (AutoRegressive Integrated Moving Average)",
      "Linear regression",
      "Random Forest"
    ],
    correctAnswer: 1
  },
  {
    id: 8,
    question: "Which of the following techniques is commonly used for dimensionality reduction in high-dimensional datasets?",
    options: [
      "K-means clustering",
      "Principal Component Analysis (PCA)",
      "Naive Bayes",
      "Support Vector Machines (SVM)"
    ],
    correctAnswer: 1
  },
  {
    id: 9,
    question: "Which of the following visualization tools is commonly used to create interactive dashboards and reports?",
    options: [
      "Jupyter Notebooks",
      "Power BI",
      "Matplotlib",
      "TensorFlow"
    ],
    correctAnswer: 1
  },
  {
    id: 10,
    question: "Which of the following technologies is commonly used to process and analyze large-scale data across distributed systems?",
    options: [
      "Apache Hadoop",
      "MySQL",
      "R programming",
      "Excel"
    ],
    correctAnswer: 0
  }
] as const;