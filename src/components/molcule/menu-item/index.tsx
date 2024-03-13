import React from 'react';
import { TextLabel } from '../..';
import * as S from './style';

const MenuItem: React.FC = () => {
  const menuContent = [
    {
      title: '내 정보',
      list: ['계정 정보', '비밀번호 재설정', '차단한 사용자'],
    },
    {
      title: '나의 거래',
      list: ['관심 목록', '판매 내역', '구매 내역', '기부 내역'],
    },
    {
      title: '알림 설정',
      list: ['채팅 알림'],
    },
    {
      title: '고객 지원',
      list: ['문의하기', '서비스 정보'],
    },
  ];
  return (
    <S.MenuWrapper>
      {menuContent.map((section, sectionIndex) => (
        <S.MenuSection key={sectionIndex}>
          <TextLabel text={section.title} size={17} weight={800} />
          <S.MenuItemList>
            {section.list.map((item, itemIndex) => (
              <S.MenuItem key={itemIndex}>
                <TextLabel text={item} size={16} weight={300} />
              </S.MenuItem>
            ))}
            <S.ListLine></S.ListLine>
          </S.MenuItemList>
        </S.MenuSection>
      ))}
    </S.MenuWrapper>
  );
};

export default MenuItem;
