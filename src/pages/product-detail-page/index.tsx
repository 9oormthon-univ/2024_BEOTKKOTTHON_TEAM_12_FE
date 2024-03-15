import {
  BoxKebabList,
  BoxProductProfile,
  Carousel,
  DescriptionProduct,
  FooterProductDetail,
  Header,
  ModalProduct,
} from '@components/index';
import * as S from './style';
import arrow from '@assets/icons/left_btn.svg';
import kebab from '@assets/icons/kebab.svg';
import { useNavigate, useParams } from 'react-router-dom';
import { Product } from 'src/types/types';
import { useState } from 'react';
import { useFilteredProducts } from 'src/store/products';

const ProductDetailPage = () => {
  const { id } = useParams();
  const products = useFilteredProducts();
  const navigate = useNavigate();
  const [openKebab, setOpenKebab] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState<boolean>(false);

  const product = products.find((product) => product.id === id);

  return (
    <S.Container>
      <section className="header">
        <Header>
          <img src={arrow} className="left" alt="btn-back" onClick={() => navigate('/')} />
          <img
            src={kebab}
            className="right"
            alt="btn-back"
            onClick={() => setOpenKebab(!openKebab)}
          />
        </Header>

        {/* 로그인 된 상태 */}
        {/* {openKebab && (
          <BoxKebabList>
            <p>차단하기</p>
            <p className="red">신고하기</p>
          </BoxKebabList>
        )} */}

        {openKebab && (
          <BoxKebabList>
            <p>수정하기</p>
            <p>판매 완료로 변경</p>
            <p>글 숨기기</p>
            <p className="red" onClick={() => setOpenModal(!openModal)}>
              삭제
            </p>
          </BoxKebabList>
        )}
        {openModal && <ModalProduct openModal={openModal} setOpenModal={setOpenModal} />}
      </section>

      <section className="profile">
        <BoxProductProfile />
      </section>

      <S.SectionScroll>
        <section className="product-image">
          <Carousel product={product} />
        </section>

        <section className="description">
          <DescriptionProduct product={product} />
        </section>
      </S.SectionScroll>

      <section className="footer">
        <FooterProductDetail product={product} />
      </section>
    </S.Container>
  );
};

export default ProductDetailPage;
