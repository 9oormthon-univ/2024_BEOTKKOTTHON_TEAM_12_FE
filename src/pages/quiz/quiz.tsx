import { Header, BoxQuiz, Button, ModalProduct } from "components/index";
import * as S from "./style";
import back from "assets/icons/left_btn.svg";
import share from "assets/icons/share.svg";
import main from "assets/magazine/quiz_page.svg";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { quizData } from "data/shared";
import { instance } from "apis";

let totalPoints = 0;

const QuizPage = () => {
  const answer = [3, 3];
  const quizDatas = [...quizData];
  const [submitAnswer, setSubmitAnswer] = useState<number[]>([0, 0]);
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [markAnswer, setMarkAnswer] = useState<boolean>(false);

  const navigate = useNavigate();

  // 유저 아이디 수정 필요
  const userId = 1;

  useEffect(() => {
    setIsDisabled(submitAnswer.some((item) => item === 0));
  }, [submitAnswer]);

  useEffect(() => {
    totalPoints = 0;
  }, []);

  const handleClickShowAnswer = async () => {
    for (let i = 0; i < submitAnswer.length; i++) {
      if (submitAnswer[i] === answer[i]) {
        totalPoints += 1;
      }
    }

    // 총합 totalpoint를 서버에 전송
    await instance
      .post(`magazine/${userId}?score=${totalPoints}`)
      .then((response) => {
        console.log("퀴즈 점수 등록 성공", response);
      })
      .catch((e) => {
        console.log("퀴즈 점수 등록 실패", e);
      });

    setOpenModal(true);
  };

  const handleClickQuiz = () => {
    totalPoints = 0;
    setMarkAnswer(true);
  };

  return (
    <>
      <Header>
        <img
          className="left"
          src={back}
          alt="back"
          onClick={() => navigate("/magazine")}
        />
        <img className="right" src={share} alt="share" />
      </Header>

      <S.Content>
        <img src={main} alt="main-img" />

        {quizDatas.map((quiz, index) => (
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
        {markAnswer ? (
          <Button
            width="100%"
            color="white"
            $bgcolor="var(--green-6)"
            $borderRadius="8px"
            fontSize="16px"
            $padding="16px"
            handleOnClick={() => navigate("/magazine")}
          >
            다음 기회에 또 만나요
          </Button>
        ) : (
          <Button
            width="100%"
            color="white"
            $bgcolor={isDisabled ? "var(--grey-3)" : "var(--green-6)"}
            $borderRadius="8px"
            fontSize="16px"
            $padding="16px"
            disabled={isDisabled}
            handleOnClick={handleClickShowAnswer}
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
