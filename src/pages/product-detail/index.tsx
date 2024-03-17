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
import { useEffect, useState } from 'react';
import { salesData } from 'src/data/shared';
// import { useFilteredProducts } from 'src/store/products';

const ProductDetail = () => {
  const { id } = useParams();
  // const products = useFilteredProducts();
  const navigate = useNavigate();
  const [openKebab, setOpenKebab] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState<boolean>(false);

  // 서버에서 가져온 데이터로 수정해야 함
  const product = salesData[0];
  // const url = `${import.meta.env.VITE_SERVER_URL}/products/${id}`;

  const handleHideClick = async () => {
    // const res = axios.put(url, body, {
    //   header:
    // })
  };

  useEffect(() => {
    // 데이터 저장
  }, [id]);

  return (
    <>
      {' '}
      {openModal && (
        <ModalProduct openModal={openModal} setOpenModal={setOpenModal} id={id as string} />
      )}
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
          <p onClick={handleHideClick}>글 숨기기</p>
          <p className="red" onClick={() => setOpenModal(!openModal)}>
            삭제
          </p>
        </BoxKebabList>
      )}
      <S.Content>
        <section className="profile">
          <BoxProductProfile />
        </section>

        <S.SectionScroll>
          <section className="product-image">
            <Carousel>
              {product.product_image.map((url, i) => (
                <img src={url} alt={`img-${i}`} key={i} />
              ))}
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
