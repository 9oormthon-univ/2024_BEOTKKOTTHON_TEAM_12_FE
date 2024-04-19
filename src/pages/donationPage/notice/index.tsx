import { BoxNoticeItem, ContainerProgressForm } from 'components/index';
import * as S from './style';

const DonationNotice = () => {
  return (
    <ContainerProgressForm
      totalpage={4}
      page={1}
      header="기부 시 주의사항을 확인해 주세요"
      btn="다음"
      // to="/donation/form-basic"
    >
      <S.BoxText>
        <p className="main-title">더 큰 나눔을 위해 판매 가능한 물품을 기부해주세요.</p>
        <ul className="notice-list">
          <li>세탁, 수선을 하지 못하므로 깨끗하게 정리해서 보내주시면 좋아요.</li>
          <li>
            기부물품은 센터로 입고된 후에는 다시 찾기 어려우므로 기부하기 전에 한번 더 확인해주세요.{' '}
          </li>
        </ul>
      </S.BoxText>

      <BoxNoticeItem
        category="의류"
        possible={['깨끗한 성인, 아동 의류', '사용한 의류 (속옷, 내의, 잠옷, 양말, 수영복)']}
        impossible={['일부 대량물품의 경우 논의 필요']}
      />

      <BoxNoticeItem
        category="패션 잡화"
        possible={[
          '가방, 신발, 안경, 선글라스, 시계',
          '액세서리, 지갑, 벨트, 파우치, 머플러, 스카프, 모자, 장갑',
          '향수, 화장품(미개봉, 유통기한 6개월 이상)',
        ]}
        impossible={['수제, 수공예품 (향초,비누,인형,액세서리)', '개봉 유통기한 6개월 미만 화장품']}
      />
    </ContainerProgressForm>
  );
};

export default DonationNotice;
