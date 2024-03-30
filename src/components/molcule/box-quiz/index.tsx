import { Dispatch, SetStateAction, useState } from 'react';
import * as S from './style';
import check from 'assets/icons/check.svg';
import { Quiz } from 'types/types';

interface BoxQuizProps {
  quiz: Quiz;
  submitAnswer: number[];
  markAnswer: boolean;
  setSubmitAnswer: Dispatch<SetStateAction<number[]>>;
}

const BoxQuiz = ({ quiz, submitAnswer, markAnswer, setSubmitAnswer }: BoxQuizProps) => {
  const [active, setActive] = useState<number | null>(null);

  const handleClick = (index: number) => {
    const tempArr = [...submitAnswer];
    tempArr[quiz.title_num - 1] = index + 1;
    setSubmitAnswer(tempArr);
    setActive(index);
  };

  return (
    <S.Container>
      <S.Header>
        <p className="title">QUIZ {quiz.title_num}</p>
        <p className="point">+{quiz.point}포인트</p>
      </S.Header>

      <div className="question">{quiz.question}</div>

      <ol className="list">
        {quiz.list.map((item, index) => (
          <S.Item key={index} onClick={() => handleClick(index)}>
            <div className={active === index ? 'number active' : 'number'}>{index + 1}</div>

            <p className="text">{item}</p>

            {markAnswer && quiz.answer === index + 1 && (
              <div className="check-box">
                <img src={check} alt="check" />
              </div>
            )}
          </S.Item>
        ))}
      </ol>
    </S.Container>
  );
};
export default BoxQuiz;
