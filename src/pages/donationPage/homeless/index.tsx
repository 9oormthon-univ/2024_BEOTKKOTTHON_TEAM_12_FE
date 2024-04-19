import { BoxNoticeItem, ContainerProgressForm, TextLabel } from 'components';
import * as S from './style';

const DonationHomeless = () => {
  return (
    <ContainerProgressForm
      totalpage={2}
      page={0}
      header="WEAR의 첫 번째 기부 동행"
      btn="다음"
      to="/donation/homeless/map"
    >
      <S.MainText>
        <TextLabel className="green-title" color="white" size={16}>
          우리 지역 노숙인의 ‘홀로서기’를 응원해주세요.
        </TextLabel>
        <p className="description">
          사람들이 바쁘게 오가는 서울역 광장 앞, 각자의 목적지로 빠르게 걸어가는 사람들 사이에서
          드문드문 멈춰 있는 이들이 눈에 띄었습니다. 어딘가로 가려는 것도 아니고, 누군가를 기다리는
          것도 아닙니다. 남들이 스쳐 지나가는 거리를 머묾의 장소로 택한 노숙인들입니다.
        </p>
      </S.MainText>
      <S.BoxText>
        <p className="main-title">더 큰 나눔을 위해 판매 가능한 물품을 기부해주세요.</p>
        <ul className="notice-list">
          <li>
            기부물품은 센터로 입고된 후에는 다시 찾기 어려우므로 기부하기 전에 한번 더 확인해주세요.
          </li>
        </ul>
      </S.BoxText>

      <S.BoxText>
        <p className="main-title">더 이상 입지 않는 옷의 새 주인을 찾아주세요.</p>
        <ul className="notice-list">
          <li>본인의 소재지에 위치한 동사무소에 입지 않는 옷을 기부해주세요.</li>
          <li>기부한 옷은 의류가 필요한 취약 계층에게 전달됩니다.</li>
          <li>기부 가능 품목은 아래를 참고해주세요.</li>
        </ul>
      </S.BoxText>

      <BoxNoticeItem
        category="의류"
        possible={['깨끗한 성인, 아동 의류', '사용한 의류 (속옷, 내의, 잠옷, 양말, 수영복)']}
        impossible={['일부 대량물품의 경우 논의 필요']}
      />
    </ContainerProgressForm>
  );
};

export default DonationHomeless;
