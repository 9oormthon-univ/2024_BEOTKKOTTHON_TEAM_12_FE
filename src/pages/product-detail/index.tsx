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

  /**게시글 삭제 api 호출 */
  const handleDeleteProduct = async (id: number) => {
    // const res = axios.delete(url);
    console.log(`삭제할 게시글 아이디 : ${id}`);
  };

  return (
    <>
      {' '}
      {openModal && (
        <ModalProduct
          select1="취소"
          select2="삭제"
          openModal={openModal}
          setOpenModal={setOpenModal}
          id={id as string}
          onClick={handleDeleteProduct}
        >
          <p>게시글을 삭제하시겠어요?</p>
        </ModalProduct>
      )}
      <Header>
        <S.BtnLeft
          src={arrow}
          className="left"
          alt="btn-back"
          onClick={() => navigate('/product')}
        />
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
            <Carousel $dot="13px" $width="100%" $height="314px">
              {product.product_image_list.map((url, i) => (
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
