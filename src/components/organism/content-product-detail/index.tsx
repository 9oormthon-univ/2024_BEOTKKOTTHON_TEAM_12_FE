import { BoxError, BoxProductProfile, Carousel, DescriptionProduct, Loading } from 'components';
import * as S from './style';
import { ProductDetailItem, Seller } from 'types/productType';

interface ContentProductDetailProps {
  product: ProductDetailItem;
  status: string;
}

const ContentProductDetail = ({ product, status }: ContentProductDetailProps) => {
  if (status === 'pending') return <Loading $height="calc(100svh - var(--header-size))" />;

  // 404페이지로 대체 예정
  if (status === 'error')
    return (
      <BoxError $height="calc(100svh - var(--header-size))">상품이 존재하지 않습니다.</BoxError>
    );

  return (
    <S.Content>
      <section className="profile">
        <BoxProductProfile seller={product.seller as Seller} />
      </section>

      <section className="product-image">
        <Carousel $dot="13px" $width="100%" $height="314px">
          {product.product_image.map((url: string, i: number) => (
            <img src={url} alt={`img-${i}`} key={i} />
          ))}
        </Carousel>
      </section>

      <section className="description">
        <DescriptionProduct />
      </section>
    </S.Content>
  );
};

export default ContentProductDetail;
