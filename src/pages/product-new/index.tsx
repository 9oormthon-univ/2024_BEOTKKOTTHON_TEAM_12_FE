import { FormTrade, Header } from "components/index";
import * as S from "./style";
import close from "assets/icons/close_large.svg";
import { useNavigate } from "react-router-dom";

const ProductNew = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header>
        <p>상품 등록</p>
        <img
          src={close}
          className="right"
          alt="btn-close"
          onClick={() => navigate("/product")}
        />
      </Header>

      <S.Content>
        <FormTrade />
      </S.Content>
    </>
  );
};

export default ProductNew;
