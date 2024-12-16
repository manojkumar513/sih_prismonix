import { SkillTest } from '../types/test';

export const skillTests: Record<string, SkillTest> = {
  'machine-learning': {
    skillId: 'machine-learning',
    skillName: 'Machine Learning',
    questions: [
      {
        id: '1',
        text: 'What type of machine learning algorithm is used when the output variable is continuous?',
        options: [
          'Supervised Learning',
          'Unsupervised Learning',
          'Regression',
          'Classification'
        ],
        correctAnswer: 2
      },
      {
        id: '2',
        text: 'Which of the following is an example of unsupervised learning?',
        options: [
          'Linear Regression',
          'K-means Clustering',
          'Decision Trees',
          'Naive Bayes'
        ],
        correctAnswer: 1
      },
      {
        id: '3',
        text: 'Which of the following is a characteristic of overfitting in a machine learning model?',
        options: [
          'High performance on training data, low performance on test data',
          'High performance on both training and test data',
          'Low performance on both training and test data',
          'High performance on test data, low performance on training data'
        ],
        correctAnswer: 0
      },
      {
        id: '4',
        text: 'What is the primary goal of feature scaling in machine learning?',
        options: [
          'To normalize data to a particular scale',
          'To reduce the number of features',
          'To remove irrelevant features',
          'To improve the accuracy of the model'
        ],
        correctAnswer: 0
      },
      {
        id: '5',
        text: 'What is the purpose of a validation set in machine learning?',
        options: [
          'To evaluate the final model performance after training',
          'To tune hyperparameters and prevent overfitting',
          'To train the model',
          'To collect the data'
        ],
        correctAnswer: 1
      },
      {
        id: '6',
        text: 'What is a confusion matrix used for in machine learning?',
        options: [
          'To evaluate regression models',
          'To calculate feature importance',
          'To evaluate classification models',
          'To assess model scalability'
        ],
        correctAnswer: 2
      },
      {
        id: '7',
        text: 'Which of the following algorithms is primarily used for dimensionality reduction?',
        options: [
          'Logistic Regression',
          'K-Nearest Neighbors',
          'Principal Component Analysis (PCA)',
          'Random Forest'
        ],
        correctAnswer: 2
      },
      {
        id: '8',
        text: 'In decision trees, which of the following is used to decide the best split at each node?',
        options: [
          'Gini Index or Entropy',
          'Mean Squared Error',
          'Euclidean Distance',
          'Cross-validation score'
        ],
        correctAnswer: 0
      },
      {
        id: '9',
        text: 'What does the term \'bias-variance tradeoff\' refer to in machine learning?',
        options: [
          'The tradeoff between prediction accuracy and computational cost',
          'The tradeoff between model complexity and the amount of data required',
          'The tradeoff between the model\'s ability to generalize and fit the training data',
          'The tradeoff between the number of features and the size of the dataset'
        ],
        correctAnswer: 2
      },
      {
        id: '10',
        text: 'What is the advantage of using ensemble methods like Random Forest or Gradient Boosting?',
        options: [
          'They increase the accuracy by combining multiple models',
          'They are faster than single models',
          'They work only for classification problems',
          'They reduce the need for data preprocessing'
        ],
        correctAnswer: 0
      }
    ]
  }
};