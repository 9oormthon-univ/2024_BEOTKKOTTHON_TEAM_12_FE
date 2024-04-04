import React from 'react';

import { TextLabel, Toggle } from '../..';
import * as S from './style';
import { Link } from 'react-router-dom';

const menuContent = [
  {
    title: '내 정보',
    list: [
      { name: '계정 정보', to: '/mypage/account-info' },
      { name: '비밀번호 재설정', to: '' },
      { name: '차단한 사용자', to: '/mypage/blocked-users' },
    ],
  },
  {
    title: '나의 거래',
    list: [
      { name: '관심 목록', to: '' },
      { name: '판매 내역', to: '/mypage/sales-history' },
      { name: '구매 내역', to: '/mypage/purchase-history' },
      { name: '기부 내역', to: '/mypage/donation-history' },
    ],
  },
  {
    title: '알림 설정',
    list: [{ name: '채팅 알림', to: '' }],
  },
  {
    title: '고객 지원',
    list: [
      { name: '문의하기', to: '' },
      { name: '서비스 정보', to: '' },
    ],
  },
];

const MenuItem: React.FC = () => {
  const handleLogout = () => {
    console.log('로그아웃');
  };
  const handleWithdrawal = () => {
    console.log('탈퇴하기');
  };

  return (
    <S.Container>
      {menuContent.map((section, sectionIndex) => (
        <React.Fragment key={sectionIndex}>
          <TextLabel size={18} $weight={800}>
            {section.title}
          </TextLabel>

          <S.MenuItemList>
            {section.list.map((item, itemIndex) => (
              <li key={itemIndex}>
                <S.MenuItemWrapper>
                  {
                    <Link to={item.to}>
                      <TextLabel size={16} $weight={300}>
                        {item.name}
                      </TextLabel>
                    </Link>
                  }

                  {sectionIndex === 2 && <Toggle />}
                </S.MenuItemWrapper>
              </li>
            ))}
            {sectionIndex !== 3 && <S.ListLine />}
          </S.MenuItemList>
        </React.Fragment>
      ))}

      <S.Footer>
        <S.Link onClick={handleLogout}>로그아웃</S.Link>
        <span>|</span>
        <S.Link onClick={handleWithdrawal}>탈퇴하기</S.Link>
      </S.Footer>
    </S.Container>
  );
};

export default MenuItem;
