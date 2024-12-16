import React from 'react';
import { Check, X } from 'lucide-react';
import { Question } from '../../types/test';

interface TestResultsProps {
  questions: Question[];
  userAnswers: number[];
  onClose: () => void;
}

export default function TestResults({ questions, userAnswers, onClose }: TestResultsProps) {
  const score = userAnswers.reduce(
    (total, answer, index) => total + (answer === questions[index].correctAnswer ? 1 : 0),
    0
  );

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-2xl font-bold mb-2">Test Results</h3>
        <p className="text-lg">
          Your score: <span className="font-bold">{score}</span> out of {questions.length} ({Math.round((score / questions.length) * 100)}%)
        </p>
      </div>

      <div className="space-y-6">
        {questions.map((question, index) => {
          const isCorrect = userAnswers[index] === question.correctAnswer;
          return (
            <div
              key={question.id}
              className={`p-4 rounded-lg border ${
                isCorrect ? 'border-green-200 bg-green-50' : 'border-red-200 bg-red-50'
              }`}
            >
              <div className="flex items-start gap-3">
                <div
                  className={`mt-1 p-1 rounded-full ${
                    isCorrect ? 'bg-green-500' : 'bg-red-500'
                  }`}
                >
                  {isCorrect ? (
                    <Check className="w-4 h-4 text-white" />
                  ) : (
                    <X className="w-4 h-4 text-white" />
                  )}
                </div>
                <div className="flex-1">
                  <p className="font-medium mb-2">
                    {index + 1}. {question.text}
                  </p>
                  <div className="space-y-1">
                    {question.options.map((option, optionIndex) => (
                      <div
                        key={optionIndex}
                        className={`p-2 rounded ${
                          optionIndex === question.correctAnswer
                            ? 'bg-green-100 text-green-800'
                            : optionIndex === userAnswers[index]
                            ? 'bg-red-100 text-red-800'
                            : 'bg-gray-50'
                        }`}
                      >
                        {option}
                        {optionIndex === question.correctAnswer && (
                          <span className="ml-2 text-green-600">(Correct Answer)</span>
                        )}
                        {optionIndex === userAnswers[index] && optionIndex !== question.correctAnswer && (
                          <span className="ml-2 text-red-600">(Your Answer)</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex justify-center">
        <button
          onClick={onClose}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  );
}