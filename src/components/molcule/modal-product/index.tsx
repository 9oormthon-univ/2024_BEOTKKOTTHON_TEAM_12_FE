import { Button } from '@components/index';
import * as S from './style';
// import axios from 'axios';

interface ModalProductProps {
  id: string;
  text: string;
  select1: string;
  select2: string;
  openModal: boolean;
  onClick: (id: number) => void;
  setOpenModal: (value: boolean) => void;
}

const ModalProduct = ({
  openModal,
  setOpenModal,
  text,
  select1,
  select2,
  id,
  onClick,
}: ModalProductProps) => {
  return (
    // <BoxModal>
    <S.Overlay>
      <S.BoxContent>
        <p className="text">{text}</p>
        <S.BoxButton>
          <Button
            width="143px"
            children={select1}
            $bgcolor="var(--grey-2)"
            color="var(--grey-4)"
            handleOnClick={() => setOpenModal(!openModal)}
          />
          <Button
            width="143px"
            children={select2}
            $bgcolor="var(--green-6)"
            color="white"
            handleOnClick={() => {
              onClick(Number(id));
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
