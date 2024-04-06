import BoxKebabList from 'components/atom/box-kebab-list';
import { userId } from 'data/shared';
import { useHideMutation } from 'hooks/queries/products/useHideMutation';
import { useOnSaleMutation } from 'hooks/queries/products/useOnSaleMutation';
import { useNavigate } from 'react-router-dom';
import ModalProduct from '../modal-product';
import { useDeleteMutation } from 'hooks/queries/products/useDeleteMutation';
import { useState } from 'react';
import { ProductDetailItem } from 'types/productType';

interface KebabProductDetailProps {
  openKebab: boolean;
  product: ProductDetailItem;
  id: string;
}

const KebabProductDetail = ({ openKebab, product, id }: KebabProductDetailProps) => {
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState<boolean>(false);

  const { mutate: onSaleMutation } = useOnSaleMutation(id as string, product as ProductDetailItem);
  const { mutate: hideMutation } = useHideMutation(id as string);
  const { mutate: deleteMutation } = useDeleteMutation(id as string);

  return (
    <>
      {openKebab && product.seller?.id !== userId && (
        <BoxKebabList>
          <p>차단하기</p>
          <p className="red">신고하기</p>
        </BoxKebabList>
      )}

      {openKebab && product.seller?.id === userId && (
        <BoxKebabList>
          <p onClick={() => navigate(`/product/edit/${id}`)}>수정하기</p>

          {product.post_status === 'onSale' ? (
            <p onClick={() => onSaleMutation()}>판매 완료로 변경</p>
          ) : (
            <p onClick={() => onSaleMutation()}>판매 중으로 변경</p>
          )}
          <p onClick={() => hideMutation()}>글 숨기기</p>
          <p className="red" onClick={() => setOpenModal(!openModal)}>
            삭제
          </p>
        </BoxKebabList>
      )}

      {openModal && (
        <ModalProduct
          select1="취소"
          select2="삭제"
          openModal={openModal}
          setOpenModal={setOpenModal}
          id={id as string}
          onClick={() => deleteMutation()}
        >
          <p>게시글을 삭제하시겠어요?</p>
        </ModalProduct>
      )}
    </>
  );
};

export default KebabProductDetail;
