import React from 'react';

import { TextLabel, Toggle } from '../..';
import * as S from './style';
import { Link } from 'react-router-dom';

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

  const handleLogout = () => {
    console.log('로그아웃');
  };
  const handleWithdrawal = () => {
    console.log('탈퇴하기');
  };

  return (
    <S.MenuWrapper>
      {menuContent.map((section, sectionIndex) => (
        <S.MenuSection key={sectionIndex}>
          <TextLabel text={section.title} size={17} $weight={800} />
          <S.MenuItemList>
            {section.list.map((item, itemIndex) => (
              <S.MenuItem key={itemIndex}>
                <S.MenuItemWrapper>
                  {sectionIndex === 0 && item === '계정 정보' ? (
                    <Link to="/mypage/account-info">{item}</Link>
                  ) : sectionIndex === 0 && item === '차단한 사용자' ? (
                    <Link to="/mypage/blocked-users">{item}</Link>
                  ) : sectionIndex === 1 && item === '판매 내역' ? (
                    <Link to="/mypage/sales-history">{item}</Link>
                  ) : sectionIndex === 1 && item === '구매 내역' ? (
                    <Link to="/mypage/purchase-history">{item}</Link>
                  ) : sectionIndex === 1 && item === '기부 내역' ? (
                    <Link to="/mypage/donation-history">{item}</Link>
                  ) : (
                    <TextLabel text={item} size={16} $weight={300} />
                  )}
                  {sectionIndex === 2 && <Toggle />}
                </S.MenuItemWrapper>
              </S.MenuItem>
            ))}
            {sectionIndex !== 3 && <S.ListLine />}
          </S.MenuItemList>
        </S.MenuSection>
      ))}
      <S.FooterWrapper>
        <S.Link onClick={handleLogout}>로그아웃</S.Link>
        <S.Divider>|</S.Divider>
        <S.Link onClick={handleWithdrawal}>탈퇴하기</S.Link>
      </S.FooterWrapper>
    </S.MenuWrapper>
  );
};

export default MenuItem;
