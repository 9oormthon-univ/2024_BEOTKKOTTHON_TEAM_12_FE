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
import { useAllProducts } from 'src/store/products';
// import { useFilteredProducts } from 'src/store/products';

const ProductDetail = () => {
  const { id } = useParams();
  const products = useAllProducts();
  // const products = useFilteredProducts();
  const navigate = useNavigate();
  const [openKebab, setOpenKebab] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState<boolean>(false);

  const product = products.find((product) => product.id === id);

  return (
    <>
      <Header>
        <S.BtnLeft src={arrow} className="left" alt="btn-back" onClick={() => navigate('/')} />
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
          <p onClick={() => navigate(`/product/edit/${id}`)}>수정하기</p>
          <p>판매 완료로 변경</p>
          <p>글 숨기기</p>
          <p className="red" onClick={() => setOpenModal(!openModal)}>
            삭제
          </p>
        </BoxKebabList>
      )}
      {openModal && <ModalProduct openModal={openModal} setOpenModal={setOpenModal} />}

      <S.Content>
        <section className="profile">
          <BoxProductProfile />
        </section>

        <S.SectionScroll>
          <section className="product-image">
            <Carousel>
              {product?.recievedImgUrl?.map((url, i) => <img src={url} alt={`img-${i}`} key={i} />)}
            </Carousel>
          </section>

          <section className="description">
            <DescriptionProduct product={product as Product} />
          </section>
        </S.SectionScroll>
      </S.Content>

      <FooterProductDetail product={product as Product} />
    </>
  );
};

export default ProductDetail;
