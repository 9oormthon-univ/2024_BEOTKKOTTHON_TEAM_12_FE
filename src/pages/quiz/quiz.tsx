import { Header, Nav, BoxQuiz } from '@components/index';
import * as S from './style';
import back from '@assets/icons/left_btn.svg';
import share from '@assets/icons/share.svg';
import main from '@assets/magazine/quiz_page.svg';
import { useNavigate } from 'react-router-dom';

const QuizPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header>
        <img className="left" src={back} alt="back" onClick={() => navigate('/magazine')} />
        <img className="right" src={share} alt="share" />
      </Header>

      <S.Content>
        <img src={main} alt="main-img" />
        <BoxQuiz>
          <p className="title">QUIZ 1</p>
          <div className="question">
            ‘제2의'라는 뜻의 ‘second’와 소비자 ‘consumer’의 합성어이면서, 지속가능한 삶을 위해
            대안을 찾아 즐기는 소비자를 뜻하는 용어는?
          </div>
          <ol className="list">
            <S.Item>
              <div className="number">1</div>
              <p className="text">블랙컨슈머</p>
            </S.Item>
            <S.Item>
              <div className="number">2</div>
              <p className="text">시컨슈머</p>
            </S.Item>
            <S.Item>
              <div className="number">3</div>
              <p className="text">세컨슈머</p>
            </S.Item>
            <S.Item>
              <div className="number">4</div>
              <p className="text">마그네슘</p>
            </S.Item>
            <S.Item>
              <div className="number">5</div>
              <p className="text">콘슈머</p>
            </S.Item>
          </ol>
        </BoxQuiz>
      </S.Content>
      <Nav currentTab="매거진" />
    </>
  );
};

export default QuizPage;
