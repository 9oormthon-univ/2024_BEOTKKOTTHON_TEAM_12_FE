import { Button } from 'components/index';
import * as S from './style';
import React from 'react';
// import axios from 'axios';

interface ModalProductProps {
  id?: string;
  select1?: string;
  select2: string;
  openModal: boolean;
  onClick: () => void;
  setOpenModal: (value: boolean) => void;
  children: React.ReactNode;
}

const ModalProduct = ({
  openModal,
  setOpenModal,
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
          {select1 && (
            <Button
              width="143px"
              children={select1}
              handleOnClick={() => setOpenModal(!openModal)}
            />
          )}
          <Button
            width="143px"
            children={select2}
            $bgcolor="var(--green-6)"
            color="white"
            handleOnClick={() => {
              onClick();
              setOpenModal(!openModal);
            }}
          />
        </S.BoxButton>
      </S.BoxContent>
    </S.Overlay>
    // </BoxModal>
  );
};

export default ModalProduct;
