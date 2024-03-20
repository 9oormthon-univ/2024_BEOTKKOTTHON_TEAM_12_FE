import { Header, BoxQuiz, Button, ModalProduct } from '@components/index';
import * as S from './style';
import back from '@assets/icons/left_btn.svg';
import share from '@assets/icons/share.svg';
import main from '@assets/magazine/quiz_page.svg';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

let totalPoints = 0;

const QuizPage = () => {
  const answer = [3, 4];
  const [submitAnswer, setSubmitAnswer] = useState<number[]>([0, 0]);
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [markAnswer, setMarkAnswer] = useState<boolean>(false);

  const navigate = useNavigate();

  useEffect(() => {
    setIsDisabled(submitAnswer.some((item) => item === 0));
  }, [submitAnswer]);

  useEffect(() => {
    totalPoints = 0;
  }, []);

  const handleClick = () => {
    for (let i = 0; i < submitAnswer.length; i++) {
      if (submitAnswer[i] === answer[i]) {
        totalPoints += 1;
      }
    }

    // 총합 totalpoint를 서버에 전송

    setOpenModal(true);
  };

  const handleClickQuiz = () => {
    totalPoints = 0;
    setMarkAnswer(true);
  };

  return (
    <>
      <Header>
        <img className="left" src={back} alt="back" onClick={() => navigate('/magazine')} />
        <img className="right" src={share} alt="share" />
      </Header>

      <S.Content>
        <img src={main} alt="main-img" />

        <BoxQuiz
          title_num={1}
          point={1}
          question="'제2의'라는 뜻의 'second'와 소비자 'consumer'의 합성어이면서, 지속가능한 삶을 위해 대안을 찾아 즐기는 소비자를 뜻하는 용어는?"
          list={['블랙컨슈머', '시컨슈머', '세컨슈머', '마그네슘', '콘슈머']}
          submitAnswer={submitAnswer}
          setSubmitAnswer={setSubmitAnswer}
          markAnswer={markAnswer}
          answer={3}
        />

        <BoxQuiz
          title_num={2}
          point={1}
          question="환경을 위협하는 쓰레기를 배출하지 않고 책임감 있는 생간, 소비 등 다양한 방법을 통해 자원을 보존하는 것을 일컫는 용어는?"
          list={['세컨슈머', '콘슈머', '뉴제로', '시컨슈머', '마그네슘']}
          submitAnswer={submitAnswer}
          setSubmitAnswer={setSubmitAnswer}
          markAnswer={markAnswer}
          answer={4}
        />
      </S.Content>
      <S.BtnAnswer>
        {markAnswer ? (
          <Button
            width="100%"
            color="white"
            $bgcolor="var(--green-6)"
            borderRadius="8px"
            fontSize="16px"
            padding="16px"
            handleOnClick={() => navigate('/magazine')}
          >
            다음 기회에 또 만나요
          </Button>
        ) : (
          <Button
            width="100%"
            color="white"
            $bgcolor={isDisabled ? 'var(--grey-3)' : 'var(--green-6)'}
            borderRadius="8px"
            fontSize="16px"
            padding="16px"
            disabled={isDisabled}
            handleOnClick={handleClick}
          >
            정답 확인
          </Button>
        )}
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
