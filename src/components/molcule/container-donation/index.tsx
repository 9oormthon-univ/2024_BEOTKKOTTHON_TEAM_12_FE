import * as S from './style';
import close from '@assets/icons/close_large.svg';
import Header from '../header';
import { BoxDonationDot, Button } from '@components/index';
import React from 'react';
import { Link } from 'react-router-dom';

interface ContainerDonationProps {
  page: number;
  header: string;
  btn: string;
  to: string;
  isDisabled?: boolean;
  children: React.ReactNode;
}

const ContainerDonation = ({
  page,
  header,
  btn,
  to,
  isDisabled,
  children,
}: ContainerDonationProps) => {
  return (
    <>
      <Header>
        <img src={close} className="right" alt="close" />
      </Header>
      <S.Container>
        <section className="dot">
          <BoxDonationDot num={page} />
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
            borderRadius="8px"
            fontSize="16px"
            padding="16px"
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
