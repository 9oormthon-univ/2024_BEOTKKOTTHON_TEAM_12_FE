import {
  BoxProductProfile,
  Carousel,
  DescriptionProduct,
  FooterProductDetail,
  Header,
} from '@components/index';
import * as S from './style';
import arrow from '@assets/icons/left_btn.svg';
import kebab from '@assets/icons/kebab.svg';
import { useNavigate, useParams } from 'react-router-dom';
import { salesData } from 'src/data/shared';
import { SaleItem } from 'src/types/types';

const ProductDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = salesData.find((product) => product.id === parseInt(id as string));

  return (
    <S.Container>
      <section className="header">
        <Header>
          <img src={arrow} className="left" alt="btn-back" onClick={() => navigate('/')} />
          <img src={kebab} className="right" alt="btn-back" />
        </Header>
      </section>

      <section className="profile">
        <BoxProductProfile />
      </section>

      <S.SectionScroll>
        <section className="product-image">
          <Carousel product={product} />
        </section>

        <section className="description">
          <DescriptionProduct product={product as SaleItem} />
        </section>
      </S.SectionScroll>

      <section className="footer">
        <FooterProductDetail product={product as SaleItem} />
      </section>
    </S.Container>
  );
};

export default ProductDetailPage;
