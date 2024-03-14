import * as S from './style';
import stategrey from '@assets/icons/trade_state_grey.svg';

const BoxItemTrade = () => {
  return (
    <S.Container>
      <S.BoxImage />

      <S.BoxDescription>
        <S.Title>
          <p className="name">지오다노</p>
          <p className="time">30분전</p>
        </S.Title>

        <S.State>
          <img src={stategrey} alt="none-trade" />
          <p className="state">상품 상태 : 아주 좋아요</p>
        </S.State>

        <S.Price>
          <p className="price">16,500원</p>
          <p className="sold">판매완료</p>
        </S.Price>
      </S.BoxDescription>
    </S.Container>
  );
};

export default BoxItemTrade;
