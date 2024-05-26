import * as S from './style';
import Header from '../header';
import { BoxDonationDot, Button, ButtonBack } from 'components/index';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';

interface ContainerProgressFormProps {
  totalpage: number;
  page: number;
  header: string;
  btn: string;
  // to: string;
  onClickBtnBack?: () => void;
  onClickBtn?: () => void;
  isDisabled?: boolean;
  children: React.ReactNode;
}

const ContainerProgressForm = ({
  totalpage,
  page,
  header,
  btn,
  onClickBtnBack,
  onClickBtn,
  isDisabled,
  children,
}: ContainerProgressFormProps) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  return (
    <>
      <Header>
        {page !== 0 && <ButtonBack onClick={onClickBtnBack} className="left" />}
        <AiOutlineClose className="right" onClick={() => navigate(-1)} />
      </Header>

      <S.Container>
        <section className="dot">
          <BoxDonationDot totalpage={totalpage} num={page} />
        </section>

        <section className="title">
          <p>{header}</p>
        </section>

        {children}
      </S.Container>

      {/* <Link to={to}> */}
      <S.BtnNext>
        <Button
          width="100%"
          $borderRadius="8px"
          fontSize="16px"
          $fontWeight="bold"
          $padding="16px"
          disabled={isDisabled}
          handleOnClick={onClickBtn}
        >
          {btn}
        </Button>
        {pathname.includes('signup') && (
          <S.LoginText>
            이미 회원이신가요? <span onClick={() => navigate('/login')}>로그인하기</span>
          </S.LoginText>
        )}
      </S.BtnNext>
      {/* </Link> */}
    </>
  );
};

export default ContainerProgressForm;
