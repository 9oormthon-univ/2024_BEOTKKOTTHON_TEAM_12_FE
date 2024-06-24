import * as S from './style';
import { Button } from 'components/index';
import { useNavigate } from 'react-router-dom';
import { ONBOARDING_DATA } from 'constants/shared';
import useTouchEvent from 'hooks/useTouchEvent';

const Onboarding = () => {
  const navigate = useNavigate();
  const { activeIndex, ...event } = useTouchEvent();

  return (
    <>
      <S.Content>
        <S.CarouselContainer
          ref={event.carouselRef}
          onScroll={event.handleScroll}
          onTouchStart={event.handleTouchStart}
          onTouchMove={event.handleTouchMove}
          onTouchEnd={event.handleTouchEnd}
          onMouseDown={event.handleMouseDown}
          onMouseMove={event.handleMouseMove}
          onMouseUp={event.handleMouseUp}
        >
          {ONBOARDING_DATA.map((data, index) => (
            <S.BoxFlex key={index}>
              <S.BoxImage>
                <img src={data.img_url} alt={`img-${index}`} />
              </S.BoxImage>
              <S.BoxTitle>
                <S.Circle>{data.num}</S.Circle>
                <p className="title">{data.title}</p>
                <p className="description">{data.description[0]}</p>
                <p className="description">{data.description[1]}</p>
              </S.BoxTitle>
            </S.BoxFlex>
          ))}
        </S.CarouselContainer>

        <S.DotContainer>
          {ONBOARDING_DATA.map((_, index) => {
            const bol = index === activeIndex;
            return <S.Dot key={index} $bol={bol} onClick={() => event.handleDotClick(index)} />;
          })}
        </S.DotContainer>
      </S.Content>
      {activeIndex === 3 && (
        <S.BoxButton>
          <Button
            width="100%"
            $bgcolor="var(--green-6)"
            color="white"
            $padding="16px"
            $fontWeight="bold"
            handleOnClick={() => navigate('/login')}
          >
            시작하기
          </Button>
        </S.BoxButton>
      )}
    </>
  );
};
export default Onboarding;
