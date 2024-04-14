import { BoxError, BoxProductProfile, Carousel, DescriptionProduct, Loading } from 'components';
import * as S from './style';
import { useProductDetailQuery } from 'hooks/queries/products/useProductDetailQuery';
import { Seller } from 'types/productType';

interface ContentProductDetailProps {
  id: string;
}

const ContentProductDetail = ({ id }: ContentProductDetailProps) => {
  const { data: productDetailQuery, status } = useProductDetailQuery(id);

  if (status === 'pending') return <Loading />;

  // 404페이지로 대체 예정
  if (status === 'error') return <BoxError>상품이 존재하지 않습니다.</BoxError>;

  return (
    <S.Content>
      <section className="profile">
        <BoxProductProfile seller={productDetailQuery.seller as Seller} />
      </section>

      <section className="product-image">
        <Carousel $dot="13px" $width="100%" $height="314px">
          {productDetailQuery.product_image.map((url: string, i: number) => (
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
