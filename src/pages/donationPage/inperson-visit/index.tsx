import { useState } from 'react';
import * as S from './style';
import { Header, BoxNoticeItem, TextLabel, Button, KakaoMap, ButtonBack } from 'components/index';
import { useNavigate } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';

const DonationInpersonVisit = () => {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);
  /*다음 절차로 이동 */
  const goToNextTab = () => {
    setActiveIndex((prevIndex) => (prevIndex < 2 ? prevIndex + 1 : prevIndex));
    window.scrollTo(0, 0); // 페이지의 맨 위로 스크롤 이동
  };
  /*이전 절차로 이동 */
  const goToPreviousTab = () => {
    setActiveIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
    window.scrollTo(0, 0); // 페이지의 맨 위로 스크롤 이동
  };

  const renderTabContent = () => {
    switch (activeIndex) {
      case 0: // 아이디와 비밀번호 입력 탭
        return (
          <S.TabContent>
            <TextLabel size={21} $weight={700}>
              기부시 주의사항을 확인해주세요
            </TextLabel>
            <S.BoxText>
              <p className="main-title">더 큰 나눔을 위해 판매 가능한 물품을 기부해주세요.</p>
              <ul className="notice-list">
                <li>세탁, 수선을 하지 못하므로 깨끗하게 정리해서 보내주시면 좋아요.</li>
                <li>
                  기부물품은 센터로 입고된 후에는 다시 찾기 어려우므로 기부하기 전에 한번 더
                  확인해주세요.{' '}
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
              impossible={[
                '수제, 수공예품 (향초,비누,인형,액세서리)',
                '개봉 유통기한 6개월 미만 화장품',
              ]}
            />
            <Button
              width="100%"
              color="white"
              $bgcolor={'var(--green-6)'}
              $borderRadius="8px"
              fontSize="16px"
              $fontWeight="bold"
              $padding="16px"
              children="다음"
              handleOnClick={goToNextTab}
            />
          </S.TabContent>
        );
      case 1:
        return (
          <>
            <S.TabContent>
              <TextLabel size={21} $weight={700}>
                내 위치에서 가까운 기부 장소를 알려드릴게요
              </TextLabel>
            </S.TabContent>
            <KakaoMap str={'아름다운 가게'} />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Header>
        {activeIndex === 0 ? '' : <ButtonBack className="left" onClick={goToPreviousTab} />}
        <AiOutlineClose className="right" onClick={() => navigate('/donation')} />
      </Header>
      <S.Container>
        <S.TabContainer>
          {[...Array(2)].map((_, index) => (
            <S.Dot key={index} $active={index === activeIndex} />
          ))}
        </S.TabContainer>
      </S.Container>
      {renderTabContent()}
    </>
  );
};

export default DonationInpersonVisit;
