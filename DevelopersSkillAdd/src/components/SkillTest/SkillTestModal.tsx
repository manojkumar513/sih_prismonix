import React from 'react';
import { X } from 'lucide-react';
import { Question, SkillTest } from '../../types/test';
import TestResults from './TestResults';

interface SkillTestModalProps {
  test: SkillTest;
  onClose: () => void;
  onComplete: (score: number) => void;
}

export default function SkillTestModal({ test, onClose, onComplete }: SkillTestModalProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(0);
  const [answers, setAnswers] = React.useState<number[]>([]);
  const [showResults, setShowResults] = React.useState(false);

  const currentQuestion = test.questions[currentQuestionIndex];

  const handleAnswer = (answerIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = answerIndex;
    setAnswers(newAnswers);

    if (currentQuestionIndex < test.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      calculateAndShowResults(newAnswers);
    }
  };

  const calculateAndShowResults = (finalAnswers: number[]) => {
    const score = finalAnswers.reduce((total, answer, index) => {
      return total + (answer === test.questions[index].correctAnswer ? 1 : 0);
    }, 0);
    setShowResults(true);
    onComplete(score);
  };

  const handleClose = () => {
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setShowResults(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl my-8">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">{test.skillName} Test</h2>
            <button
              onClick={handleClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <X size={24} />
            </button>
          </div>

          {!showResults ? (
            <div>
              <div className="mb-4">
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  <span>Question {currentQuestionIndex + 1} of {test.questions.length}</span>
                  <span>Progress: {Math.round(((currentQuestionIndex) / test.questions.length) * 100)}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${(currentQuestionIndex / test.questions.length) * 100}%` }}
                  ></div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-medium mb-4">{currentQuestion.text}</h3>
                <div className="space-y-3">
                  {currentQuestion.options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleAnswer(index)}
                      className="w-full text-left p-4 rounded-lg border border-gray-300 hover:border-blue-500 hover:bg-blue-50 transition-colors"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <TestResults
              questions={test.questions}
              userAnswers={answers}
              onClose={handleClose}
            />
          )}
        </div>
      </div>
    </div>
  );
}