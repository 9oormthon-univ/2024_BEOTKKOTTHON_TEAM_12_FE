import { Header, BoxQuiz, Button, ModalProduct, ButtonBack } from 'components/index';
import * as S from './style';
import share from 'assets/icons/share.svg';
import main from 'assets/magazine/quiz_page.svg';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { quizData, userId } from 'data/shared';
import { instance } from 'apis';
import { useMutation } from '@tanstack/react-query';

let totalPoints = 0;

const postQuizData = async (totalPoints: number) => {
  try {
    const response = await instance.post(`magazine/${userId}?score=${totalPoints}`);
    console.log('퀴즈 점수 등록 성공', response);
    return response.data;
  } catch (error) {
    console.log('퀴즈 점수 등록 실패', error);
  }
};

const QuizPage = () => {
  const navigate = useNavigate();
  const [submitAnswer, setSubmitAnswer] = useState<number[]>([0, 0]);
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [markAnswer, setMarkAnswer] = useState<boolean>(false);

  const { data, status, mutate } = useMutation({
    mutationFn: postQuizData,
  });

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
    // 총합 totalpoint를 서버에 전송
    mutate(totalPoints);
    setOpenModal(true);
  };

  const handleClickQuiz = () => {
    totalPoints = 0;
    setMarkAnswer(true);
  };

  return (
    <>
      <Header>
        <ButtonBack className="left" onClick={() => navigate('/magazine')} />
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
          color="white"
          $bgcolor={isDisabled ? 'var(--grey-3)' : 'var(--green-6)'}
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
          handleClickQuiz={handleClickQuiz}
        >
          <p>축하드립니다~!</p>
          <p>{totalPoints}포인트를 얻었어요</p>
        </ModalProduct>
      )}
    </>
  );
};

export default QuizPage;
