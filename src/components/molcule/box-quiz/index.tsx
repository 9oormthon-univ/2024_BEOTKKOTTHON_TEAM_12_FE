import { Dispatch, SetStateAction, useState } from 'react';
import * as S from './style';
import check from '@assets/icons/check.svg';

interface BoxQuizProps {
  title_num: number;
  point: number;
  question: string;
  list: string[];
  submitAnswer: number[];
  markAnswer: boolean;
  answer: number;
  setSubmitAnswer: Dispatch<SetStateAction<number[]>>;
}

const BoxQuiz = ({
  title_num,
  point,
  question,
  list,
  submitAnswer,
  markAnswer,
  answer,
  setSubmitAnswer,
}: BoxQuizProps) => {
  const [active, setActive] = useState<number | null>(null);

  const handleClick = (index: number) => {
    const tempArr = [...submitAnswer];
    tempArr[title_num - 1] = index + 1;
    setSubmitAnswer(tempArr);
    setActive(index);
  };

  return (
    <S.Container>
      <S.Header>
        <p className="title">QUIZ {title_num}</p>
        <p className="point">+{point}포인트</p>
      </S.Header>
      <div className="question">{question}</div>
      <ol className="list">
        {list.map((item, index) => (
          <S.Item key={index} onClick={() => handleClick(index)}>
            <div className={active === index ? 'number active' : 'number'}>{index + 1}</div>
            <p className="text">{item}</p>
            {markAnswer && answer === index + 1 && (
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
