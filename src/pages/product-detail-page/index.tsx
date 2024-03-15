import {
  BoxKebabList,
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
import { useState } from 'react';

const ProductDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [openKebab, setOpenKebab] = useState<boolean>(false);

  const product = salesData.find((product) => product.id === parseInt(id as string));

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
            <p className="red">삭제</p>
          </BoxKebabList>
        )}
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
