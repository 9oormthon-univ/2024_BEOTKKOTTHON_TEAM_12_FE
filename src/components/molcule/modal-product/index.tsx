import { BoxModal, Button } from '@components/index';
import * as S from './style';

interface ModalProductProps {
  openModal: boolean;
  setOpenModal: (value: boolean) => void;
}

const ModalProduct = ({ openModal, setOpenModal }: ModalProductProps) => {
  return (
    <BoxModal>
      <S.Container>
        <div className="back" />
        <S.BoxContent>
          <p className="text">게시글을 삭제하시겠어요?</p>
          <S.BoxButton>
            <Button
              width="143px"
              children="취소"
              backgroundColor="var(--grey-2)"
              color="var(--grey-4)"
              handleOnClick={() => setOpenModal(!openModal)}
            />
            <Button width="143px" children="삭제" backgroundColor="var(--green-6)" color="white" />
          </S.BoxButton>
        </S.BoxContent>
      </S.Container>
    </BoxModal>
  );
};

export default ModalProduct;
