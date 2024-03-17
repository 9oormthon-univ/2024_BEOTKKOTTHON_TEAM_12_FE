import { Carousel } from '@components/index';
import clothes from '@assets/onboarding/clothes.svg';
import donation from '@assets/onboarding/donation.svg';
import earth from '@assets/onboarding/earth.svg';
import * as S from './style';

const Onboarding = () => {
  return (
    <S.Container>
      <Carousel $dot="-40px" $width="185px" $height="350px">
        <div>
          <img src={clothes} alt="earth" />
          <S.BoxTitle>
            <S.Circle>1</S.Circle>
            <p className="title">옷장에서 잠자고 있는 옷들을 깨워주세요.</p>
            <p className="description">WEAR가 공간만 차지하는 더 이상 입지 않는</p>
            <p className="description">옷들의 새로운 주인을 찾아드립니다!</p>
          </S.BoxTitle>
        </div>

        <div>
          <img src={earth} alt="earth" />
          <S.BoxTitle>
            <S.Circle>2</S.Circle>
            <p className="title">당신의 소중한 나눔이 WEAR에서 시작됩니다.</p>
            <p className="description">의류 기부를 통해 사랑이 필요한 분들과</p>
            <p className="description">지구에게 따뜻함을 선물해 보세요.</p>
          </S.BoxTitle>
        </div>

        <div>
          <img src={donation} alt="donation" />
          <S.BoxTitle>
            <S.Circle>3</S.Circle>
            <p className="title">WEAR와 함께 환경보호도, 기부도 재밌게!</p>
            <p className="description">중고 거래와 기부를 하면 쌓이는 환경 점수!</p>
            <p className="description">대학별 환경 점수 순위도 확인해보세요.</p>
          </S.BoxTitle>
        </div>
      </Carousel>
    </S.Container>
  );
};

export default Onboarding;
