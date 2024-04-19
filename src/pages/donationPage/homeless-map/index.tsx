import { ContainerProgressForm, KakaoMap } from 'components';
import React from 'react';

const DonationHomelessMap = () => {
  return (
    <ContainerProgressForm
      totalpage={2}
      page={1}
      header="내 위치에서 가까운 동사무소를
      알려드릴게요"
      btn="카카오 지도로 보기"
      // to="https://m.map.kakao.com/actions/searchView?q=%EB%8F%99%EC%82%AC%EB%AC%B4%EC%86%8C&wxEnc=LVSOTM&wyEnc=QNLTSTS&lvl=4#!/all/map/place"
    >
      <KakaoMap str={'동사무소'}></KakaoMap>
    </ContainerProgressForm>
  );
};

export default DonationHomelessMap;
