import {
  ButtonBack,
  ContentProductDetail,
  FooterProductDetail,
  Header,
  KebabProductDetail,
} from 'components/index';
import { useParams } from 'react-router-dom';
import { useProductDetailQuery } from 'queries/products/useProductDetailQuery';
import { GoKebabHorizontal } from 'react-icons/go';
import { useToggle } from 'hooks/useToggle';

const ProductDetail = () => {
  const { id } = useParams() as { id: string };
  const { data: productDetailQuery, status } = useProductDetailQuery(id);
  const [isOpen, togleOpen] = useToggle(false);

  return (
    <>
      <Header>
        <ButtonBack className="left" />
        <GoKebabHorizontal className="right" onClick={togleOpen} />
      </Header>
      {productDetailQuery && isOpen && <KebabProductDetail id={id} />}
      <ContentProductDetail product={productDetailQuery} status={status} />
      <FooterProductDetail product={productDetailQuery} status={status} />
    </>
  );
};

export default ProductDetail;
