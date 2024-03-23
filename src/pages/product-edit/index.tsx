import { FormTrade, Header } from "components/index";
import * as S from "./styled";
import close from "assets/icons/close_large.svg";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
// import axios from 'axios';

const ProductEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  // const url = `${import.meta.env.VITE_SERVER_URL}/products/${id}`;

  useEffect(() => {
    // const res = axios.put(url, {}, {
    //   header:
    // })
  }, []);

  return (
    <>
      <Header>
        <p>등록한 글 수정하기</p>
        <img
          src={close}
          className="right"
          alt="btn-close"
          onClick={() => navigate(`/product/${id}`)}
        />
      </Header>

      <S.Content>
        <FormTrade />
      </S.Content>
    </>
  );
};

export default ProductEdit;
