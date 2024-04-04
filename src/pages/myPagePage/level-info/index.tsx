import x from 'assets/icons/x.svg';
import { BoxBackgroundGreen, BoxLevelInfo, BoxQna, Header } from 'components/index';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export const Divider = styled.div`
  height: 14px;
  background-color: var(--grey-2);
`;

const LevelInfo = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header>
        <img src={x} className="right" alt="btn-back" onClick={() => navigate('/mypage')} />
      </Header>

      <BoxBackgroundGreen
        header="레벨 및 에코 포인트 시스템 안내"
        content1="에코 포인트는 지구를 위한 여러분의 노력을 측정하는"
        content2="WEAR의 환경 지표입니다."
      />

      <BoxLevelInfo />
      <Divider />
      <BoxQna />
    </>
  );
};

export default LevelInfo;
