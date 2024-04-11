import {
  BoxProductProfile,
  ButtonBack,
  Carousel,
  DescriptionProduct,
  FooterProductDetail,
  Header,
  KebabProductDetail,
  Loading,
} from 'components/index';
import * as S from './style';
import kebab from 'assets/icons/kebab.svg';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useProduct } from 'store/product';
import { useProductDetailQuery } from 'hooks/queries/products/useProductDetailQuery';
import { Seller } from 'types/productType';

const ProductDetail = () => {
  const { id } = useParams();
  const productDetailQuery = useProductDetailQuery(id as string);
  const product = useProduct();
  const [openKebab, setOpenKebab] = useState<boolean>(false);

  if (productDetailQuery.error) {
    // 404 페이지로 대체 가능
    return <div>상품이 존재하지 않습니다.</div>;
  }

  return (
    <>
      <Header>
        <ButtonBack className="left" $marginLeft="10px" />
        <img
          src={kebab}
          className="right"
          alt="btn-kebab"
          onClick={() => setOpenKebab(!openKebab)}
        />
      </Header>

      <KebabProductDetail openKebab={openKebab} id={id as string} />

      <S.Content>
        {productDetailQuery.isLoading && <Loading />}
        {productDetailQuery.data && product && (
          <>
            <section className="profile">
              <BoxProductProfile seller={product.seller as Seller} />
            </section>

            <section className="product-image">
              <Carousel $dot="13px" $width="100%" $height="314px">
                {product.product_image.map((url, i) => (
                  <img src={url} alt={`img-${i}`} key={i} />
                ))}
              </Carousel>
            </section>

            <section className="description">
              <DescriptionProduct product={product} />
            </section>
          </>
        )}
      </S.Content>

      <FooterProductDetail />
    </>
  );
};

export default ProductDetail;
