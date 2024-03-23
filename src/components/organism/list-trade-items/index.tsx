import { BoxItemTrade } from "components/index";
import * as S from "./style";
import { useProductListData } from "store/productListData";

const ListTradeItems = () => {
  const { productList } = useProductListData();
  return (
    <S.Container>
      {productList.map((product) => (
        <BoxItemTrade key={product.id} product={product} width="160px" />
      ))}
    </S.Container>
  );
};

export default ListTradeItems;
