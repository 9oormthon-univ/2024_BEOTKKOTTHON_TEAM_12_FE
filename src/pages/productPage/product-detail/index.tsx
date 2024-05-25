import {
  ButtonBack,
  ContentProductDetail,
  FooterProductDetail,
  Header,
  KebabProductDetail,
} from 'components/index';
import kebab from 'assets/icons/kebab.svg';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useProductDetailQuery } from 'hooks/queries/products/useProductDetailQuery';

const ProductDetail = () => {
  const { id } = useParams() as { id: string };
  const { data: productDetailQuery, status } = useProductDetailQuery(id);
  const [openKebab, setOpenKebab] = useState<boolean>(false);

  return (
    <>
      <Header>
        <ButtonBack className="left" />
        <img
          src={kebab}
          className="right"
          alt="btn-kebab"
          onClick={() => setOpenKebab(!openKebab)}
        />
      </Header>
      {productDetailQuery && openKebab && <KebabProductDetail id={id} />}
      <ContentProductDetail product={productDetailQuery} status={status} />
      <FooterProductDetail product={productDetailQuery} status={status} />
    </>
  );
};

export default ProductDetail;
