'use client';

import { useMemo, useState } from 'react';
import { gameQuestions } from '@/lib/data';
import './game.css';

export function Game() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const current = gameQuestions[currentIndex];
  const answered = selected !== null;
  const progress = useMemo(() => `${currentIndex + 1}/${gameQuestions.length}`, [currentIndex]);

  const chooseAnswer = (answerIndex: number) => {
    if (answered || finished) return;
    setSelected(answerIndex);
    if (answerIndex === current.correctAnswer) {
      setScore(prev => prev + 1);
    }
  };

  const goNext = () => {
    if (currentIndex === gameQuestions.length - 1) {
      setFinished(true);
      return;
    }
    setCurrentIndex(prev => prev + 1);
    setSelected(null);
  };

  const restart = () => {
    setCurrentIndex(0);
    setSelected(null);
    setScore(0);
    setFinished(false);
  };

  if (finished) {
    return (
      <section className="quiz-card" aria-label="Kết quả quiz">
        <span className="eyebrow">Quiz Chương 6</span>
        <h2>Kết quả: {score}/{gameQuestions.length}</h2>
        <p>
          {score >= 5
            ? 'Bạn đã nắm chắc tinh thần bình đẳng, đoàn kết, tương trợ giữa các dân tộc.'
            : 'Hãy xem lại phần lý thuyết, chính sách và thành tựu trước khi thử lại.'}
        </p>
        <button type="button" className="btn primary" onClick={restart}>
          Làm lại quiz
        </button>
      </section>
    );
  }

  return (
    <section className="quiz-card" aria-label="Quiz Chương 6">
      <div className="quiz-topline">
        <span className="eyebrow">Quiz Chương 6</span>
        <span className="quiz-progress">{progress}</span>
      </div>
      <h2>{current.question}</h2>
      <div className="quiz-options">
        {current.options.map((option, index) => {
          const isCorrect = answered && index === current.correctAnswer;
          const isWrong = answered && selected === index && selected !== current.correctAnswer;

          return (
            <button
              key={option}
              type="button"
              className={`quiz-option ${isCorrect ? 'correct' : ''} ${isWrong ? 'wrong' : ''}`}
              onClick={() => chooseAnswer(index)}
              disabled={answered}
            >
              <span>{String.fromCharCode(65 + index)}</span>
              {option}
            </button>
          );
        })}
      </div>
      {answered ? (
        <div className="quiz-explanation">
          <strong>{selected === current.correctAnswer ? 'Chính xác.' : 'Chưa đúng.'}</strong> {current.explanation}
        </div>
      ) : null}
      <div className="quiz-footer">
        <span>Điểm hiện tại: {score}</span>
        <button type="button" className="btn secondary" onClick={goNext} disabled={!answered}>
          {currentIndex === gameQuestions.length - 1 ? 'Xem kết quả' : 'Câu tiếp theo'}
        </button>
      </div>
    </section>
  );
}
