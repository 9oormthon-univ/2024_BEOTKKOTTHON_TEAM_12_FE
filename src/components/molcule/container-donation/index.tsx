import * as S from './style';
import close from 'assets/icons/close_large.svg';
import Header from '../header';
import { BoxDonationDot, Button } from 'components/index';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import arrow from 'assets/icons/arrow.svg';

interface ContainerDonationProps {
  totalpage: number;
  page: number;
  header: string;
  btn: string;
  to: string;
  isDisabled?: boolean;
  children: React.ReactNode;
}

const ContainerDonation = ({
  totalpage,
  page,
  header,
  btn,
  to,
  isDisabled,
  children,
}: ContainerDonationProps) => {
  const navigate = useNavigate();
  return (
    <>
      <Header>
        {page !== 0 && (
          <S.BackIcon className="left" src={arrow} alt="go back" onClick={() => navigate(-1)} />
        )}
        <img src={close} className="right" alt="close" onClick={() => navigate('/donation')} />
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

      <Link to={to}>
        <S.BtnNext>
          <Button
            width="100%"
            color="white"
            $bgcolor={isDisabled ? 'var(--grey-3)' : 'var(--green-6)'}
            $borderRadius="8px"
            fontSize="16px"
            $fontWeight="bold"
            $padding="16px"
            disabled={isDisabled}
          >
            {btn}
          </Button>
        </S.BtnNext>
      </Link>
    </>
  );
};

export default ContainerDonation;
