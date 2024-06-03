import { Button } from 'components/index';
import * as S from './style';
import React from 'react';
// import axios from 'axios';

interface ModalProductProps {
  id?: string;
  select1?: string;
  select2: string;
  isOpenModal: boolean;
  onClick: () => void;
  togleOpenModal: () => void;
  children: React.ReactNode;
}

const ModalProduct = ({
  isOpenModal,
  togleOpenModal,
  select1,
  select2,
  id,
  onClick,
  children,
}: ModalProductProps) => {
  return (
    // <BoxModal>
    <S.Overlay>
      <S.BoxContent>
        <div className="text">{children}</div>
        <S.BoxButton>
          {select1 && <Button width="143px" children={select1} handleOnClick={togleOpenModal} />}
          <Button
            width="143px"
            children={select2}
            $bgcolor="var(--green-6)"
            color="white"
            handleOnClick={() => {
              onClick();
              togleOpenModal();
            }}
          />
        </S.BoxButton>
      </S.BoxContent>
    </S.Overlay>
    // </BoxModal>
  );
};

export default ModalProduct;
