import BoxKebabList from 'components/atom/box-kebab-list';
import { userId } from 'data/shared';
import { useHideMutation } from 'hooks/queries/products/useHideMutation';
import { useOnSaleMutation } from 'hooks/queries/products/useOnSaleMutation';
import { useNavigate } from 'react-router-dom';
import ModalProduct from '../modal-product';
import { useDeleteMutation } from 'hooks/queries/products/useDeleteMutation';
import { useState } from 'react';
import { useProduct } from 'store/product';
import { ProductDetailItem } from 'types/productType';
import { useBlockUserMutation } from 'hooks/queries/products/useBlockUserMutation';

interface KebabProductDetailProps {
  openKebab: boolean;
  id: string;
}

const KebabProductDetail = ({ openKebab, id }: KebabProductDetailProps) => {
  const navigate = useNavigate();
  const product = useProduct();
  const [openModal, setOpenModal] = useState<boolean>(false);

  const { mutate: onSaleMutation } = useOnSaleMutation(id, product as ProductDetailItem);
  const { mutate: hideMutation } = useHideMutation(id);
  const { mutate: deleteMutation } = useDeleteMutation(id);
  const { mutate: blockMutation } = useBlockUserMutation(product?.seller.id as number);

  if (!product) return null;

  return (
    <>
      {openKebab && product.seller?.id !== userId && (
        <BoxKebabList>
          <p onClick={() => blockMutation()}>차단하기</p>
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
