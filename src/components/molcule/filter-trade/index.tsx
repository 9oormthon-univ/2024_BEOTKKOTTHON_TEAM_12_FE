import { useState } from 'react';
import * as S from './style';
import checkgreen from '@assets/icons/check_circle_green.svg';
import checkgrey from '@assets/icons/check_circle_grey.svg';
import { useProductList, useProductListActions } from 'src/store/productListData';

const FilterTrade = () => {
  const productList = useProductList();
  const { setClickedOnSale } = useProductListActions();
  const [active, setActive] = useState<boolean>(false);

  const handleClick = () => {
    setClickedOnSale();
    setActive(!active);
  };

  return (
    <S.Container>
      <p>상품 {productList.length}개</p>

      <S.Filter onClick={handleClick} $active={active}>
        {active ? (
          <img src={checkgreen} alt="checked" />
        ) : (
          <img src={checkgrey} alt="non-checked" />
        )}
        <p>판매중인 상품만 보기</p>
      </S.Filter>
    </S.Container>
  );
};

export default FilterTrade;
