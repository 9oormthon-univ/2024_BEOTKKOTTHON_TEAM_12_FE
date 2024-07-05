import {
  ButtonBack,
  ContentProductDetail,
  FooterProductDetail,
  Header,
  KebabProductDetail,
} from 'components/index';
import { useParams } from 'react-router-dom';
import { GoKebabHorizontal } from 'react-icons/go';
import { useToggle } from 'hooks/useToggle';
import { useProductActions } from 'store/product';
import { useProductDetail } from 'service/product/useProductService';
import useConditionalUpdate from 'hooks/useConditionalUpdate';

const ProductDetail = () => {
  const { id } = useParams() as { id: string };
  const { setProduct } = useProductActions();
  const { data: detailData, status } = useProductDetail(id);
  const [isOpen, togleOpen] = useToggle(false);

  useConditionalUpdate(detailData, setProduct);

  if (status === 'pending') return null;
  if (status === 'error') return null;

  return (
    <>
      <Header>
        <ButtonBack className="left" />
        <GoKebabHorizontal className="right" onClick={togleOpen} />
      </Header>
      {detailData && isOpen && <KebabProductDetail id={id} />}
      <ContentProductDetail product={detailData} status={status} />
      <FooterProductDetail product={detailData} status={status} />
    </>
  );
};

export default ProductDetail;
