import BoxKebabList from 'components/atom/box-kebab-list';
import { USER_ID } from 'constants/shared';
import { Link, useNavigate } from 'react-router-dom';
import ModalProduct from '../modal-product';
import { useProduct, useProductActions } from 'store/product';
import { useToggle } from 'hooks/useToggle';
import { useBlock, useDeleteProduct, useHide, useOnSale } from 'service/product/useProductService';

interface KebabProductDetailProps {
  id: string;
}

const KebabProductDetail = ({ id }: KebabProductDetailProps) => {
  const product = useProduct();
  const status = product?.post_status;
  const navigate = useNavigate();
  const [isOpenModal, togleOpenModal] = useToggle(false);
  const { updateOnSale } = useProductActions();

  const { mutate: onSaleMutation } = useOnSale(id, status);
  const { mutate: hideMutation } = useHide(id, product?.is_private as boolean);
  const { mutate: deleteMutation } = useDeleteProduct(id);
  const { mutate: blockMutation } = useBlock(product?.seller.id as number);

  const handleClick = () => {
    blockMutation();
    navigate(-1);
  };

  const handleClickOnSale = () => {
    onSaleMutation();
    updateOnSale(product?.post_status === 'onSale' ? 'soldOut' : 'onSale');
  };

  const handleClickDelete = () => {
    deleteMutation();
    navigate('/product');
  };

  if (!product) return null;

  return (
    <>
      {product.seller?.id !== USER_ID ? (
        <BoxKebabList>
          <p onClick={handleClick}>차단하기</p>
          <p className="red">신고하기</p>
        </BoxKebabList>
      ) : (
        <BoxKebabList>
          <p>
            <Link to={`/product/edit/${id}`}>수정하기</Link>
          </p>

          <p onClick={handleClickOnSale}>
            {product.post_status === 'onSale' ? '판매 완료로 변경' : '판매 중으로 변경'}
          </p>

          <p onClick={() => hideMutation()}>{product.is_private ? '글 숨김 취소' : '글 숨기기'}</p>

          <p className="red" onClick={togleOpenModal}>
            삭제
          </p>
        </BoxKebabList>
      )}

      {isOpenModal && (
        <ModalProduct
          select1="취소"
          select2="삭제"
          isOpenModal={isOpenModal}
          togleOpenModal={togleOpenModal}
          id={id as string}
          onClick={handleClickDelete}
        >
          <p>게시글을 삭제하시겠어요?</p>
        </ModalProduct>
      )}
    </>
  );
};

export default KebabProductDetail;
