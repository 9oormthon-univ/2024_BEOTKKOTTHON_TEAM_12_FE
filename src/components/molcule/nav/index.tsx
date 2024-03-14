import * as S from './style';
import chatting_green from '@assets/nav-icons/chatting_green.svg';
import chatting_grey from '@assets/nav-icons/chatting_grey.svg';
import donation_green from '@assets/nav-icons/donation_green.svg';
import donation_grey from '@assets/nav-icons/donation_grey.svg';
import home_green from '@assets/nav-icons/home_green.svg';
import home_grey from '@assets/nav-icons/home_grey.svg';
import magazine_green from '@assets/nav-icons/magazine_green.svg';
import magazine_grey from '@assets/nav-icons/magazine_grey.svg';
import profile_green from '@assets/nav-icons/profile_green.svg';
import profile_grey from '@assets/nav-icons/profile_grey.svg';
import { useState } from 'react';

const names = ['홈', '기부', '매거진', '채팅', '프로필'];
const greenNav = [home_green, donation_green, magazine_green, chatting_green, profile_green];
const greyNav = [home_grey, donation_grey, magazine_grey, chatting_grey, profile_grey];

const Nav = () => {
  const [activeTab, setActiveTab] = useState<string>('홈');
  const [nav, setNav] = useState<string[]>([
    home_green,
    donation_grey,
    magazine_grey,
    chatting_grey,
    profile_grey,
  ]);

  const handleClick = (i: number) => {
    const temp = [...greyNav];
    for (let j = 0; j < 5; j++) {
      if (i == j) {
        temp[i] = greenNav[i];
        setActiveTab(names[i]);
      }
    }
    setNav(temp);
  };

  return (
    <S.BoxNav>
      {nav.map((imgUrl, i) => (
        <S.BoxItem key={imgUrl} onClick={() => handleClick(i)}>
          <img src={imgUrl} />
          <S.TabName $active={activeTab === names[i]}>{names[i]}</S.TabName>
        </S.BoxItem>
      ))}
    </S.BoxNav>
  );
};

export default Nav;
