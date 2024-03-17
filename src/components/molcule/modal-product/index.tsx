import { BoxModal, Button } from '@components/index';
import * as S from './style';
import axios from 'axios';

interface ModalProductProps {
  id: string;
  openModal: boolean;
  setOpenModal: (value: boolean) => void;
}

const ModalProduct = ({ id, openModal, setOpenModal }: ModalProductProps) => {
  const handleClickDelete = async () => {
    // axios.delete(`products/${id}`)
  };

  return (
    <BoxModal>
      <S.Overlay>
        <S.BoxContent>
          <p className="text">게시글을 삭제하시겠어요?</p>
          <S.BoxButton>
            <Button
              width="143px"
              children="취소"
              $bgcolor="var(--grey-2)"
              color="var(--grey-4)"
              handleOnClick={() => setOpenModal(!openModal)}
            />
            <Button
              width="143px"
              children="삭제"
              $bgcolor="var(--green-6)"
              color="white"
              handleOnClick={handleClickDelete}
            />
          </S.BoxButton>
        </S.BoxContent>
      </S.Overlay>
    </BoxModal>
  );
};

export default ModalProduct;
