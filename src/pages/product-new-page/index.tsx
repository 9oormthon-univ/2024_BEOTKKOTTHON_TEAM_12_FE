import { FormTrade, Header } from '@components/index';
import * as S from './style';
import close from '@assets/icons/close_large.svg';

const ProductNewPage = () => {
  return (
    <S.Container>
      <section className="header">
        <Header>
          <p>상품 등록</p>
          <img src={close} className="right" alt="btn-close" />
        </Header>
      </section>

      <section>
        <FormTrade />
      </section>
    </S.Container>
  );
};

export default ProductNewPage;
