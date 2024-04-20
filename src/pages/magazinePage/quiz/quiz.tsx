import { Header, BoxQuiz, Button, ModalProduct, ButtonBack } from 'components/index';
import * as S from './style';
import share from 'assets/icons/share.svg';
import main from 'assets/magazine/quiz_page.svg';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { quizData } from 'data/shared';
import { useQuizMutation } from 'hooks/queries/magazine/useQuizMutation';

let totalPoints = 0;

const QuizPage = () => {
  const navigate = useNavigate();
  const { mutate: quizMutation } = useQuizMutation();
  const [submitAnswer, setSubmitAnswer] = useState<number[]>([0, 0]);
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [markAnswer, setMarkAnswer] = useState<boolean>(false);

  useEffect(() => {
    setIsDisabled(submitAnswer.some((item) => item === 0));
  }, [submitAnswer]);

  useEffect(() => {
    totalPoints = 0;
  }, []);

  const handleClickShowAnswer = async () => {
    for (let i = 0; i < submitAnswer.length; i++) {
      if (submitAnswer[i] === quizData[i].answer) {
        totalPoints += 1;
      }
    }
    quizMutation(totalPoints);
    setOpenModal(true);
  };

  const handleClickQuiz = () => {
    totalPoints = 0;
    setMarkAnswer(true);
  };

  return (
    <>
      <Header>
        <ButtonBack className="left" />
        <img className="right" src={share} alt="share" />
      </Header>

      <S.Content>
        <img src={main} alt="main-img" />

        {quizData.map((quiz, index) => (
          <BoxQuiz
            key={index}
            quiz={quiz}
            submitAnswer={submitAnswer}
            setSubmitAnswer={setSubmitAnswer}
            markAnswer={markAnswer}
          />
        ))}
      </S.Content>

      <S.BtnAnswer>
        <Button
          width="100%"
          $borderRadius="8px"
          fontSize="16px"
          $padding="16px"
          disabled={isDisabled && !markAnswer}
          handleOnClick={markAnswer ? () => navigate('/magazine') : handleClickShowAnswer}
        >
          {markAnswer ? '다음 기회에 또 만나요' : '정답 확인'}
        </Button>
      </S.BtnAnswer>

      {openModal && (
        <ModalProduct
          select2="확인"
          openModal={openModal}
          setOpenModal={setOpenModal}
          onClick={handleClickQuiz}
        >
          <p>축하드립니다~!</p>
          <p>{totalPoints}포인트를 얻었어요</p>
        </ModalProduct>
      )}
    </>
  );
};

export default QuizPage;
