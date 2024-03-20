import styled from 'styled-components';

export const Circle = styled.div`
  display: grid;
  place-items: center;
  width: 33px;
  height: 33px;
  border-radius: 100%;
  margin-bottom: 18px;
  box-sizing: border-box;
  background-color: var(--green-1);
  font-size: 17px;
  font-weight: bold;
  color: var(--green-6);
`;

export const BoxTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .title {
    font-size: 19px;
    font-weight: bold;
    color: var(--green-7);
    margin-bottom: 40px;
  }

  .description {
    height: 30px;
    font-szie: 16px;
    color: var(--grey-7);
  }
`;

export const CarouselContainer = styled.div`
  width: 100%;
  display: flex;
  overflow-x: auto; /* 가로로 스크롤 가능하도록 설정 */
  scroll-snap-type: x mandatory; /* 스크롤 단위로 스냅하도록 설정 */
  -webkit-overflow-scrolling: touch; /* iOS Safari에서 스크롤 부드럽게 처리 */
  touch-action: pan-y; /* 세로 스크롤은 가능하나 가로 스크롤은 터치 액션을 막음 */

  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const BoxFlex = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 0 auto; /* Flex 아이템이 자동으로 크기를 조절하지 않도록 설정 */
  margin-top: 50px;
  width: 100%;
  height: auto;
  scroll-snap-align: start; /* 스크롤 단위로 스냅하도록 설정 */
`;

export const BoxImage = styled.div`
  display: grid;
  place-items: center;
  height: 300px;
`;

export const DotContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

interface DotProps {
  $bol: boolean;
}
export const Dot = styled.div<DotProps>`
  width: ${(props) => (props.$bol ? '24px' : '8px')};
  height: 8px;
  border-radius: 100px;
  background-color: ${(props) => (props.$bol ? 'var(--green-6)' : 'var(--grey-3)')};
  margin: 0 8px;
  cursor: pointer;
`;

export const BoxButton = styled.div`
  display: grid;
  place-items: center;
  height: var(--nav-size);
  padding: 0 20px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: calc(var(--header-size) + var(--content-size));
`;
