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
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const names = ['홈', '기부', '매거진', '채팅', '프로필'];
const greenNav = [home_green, donation_green, magazine_green, chatting_green, profile_green];
const greyNav = [home_grey, donation_grey, magazine_grey, chatting_grey, profile_grey];

interface NavProps {
  currentTab: string;
}

const Nav: React.FC<NavProps> = ({ currentTab }) => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<string>(currentTab);

  const initializeNav = () => {
    //모든 아이콘을 회색으로 초기화
    const temp = [...greyNav];
    const currentIndex = names.findIndex((name) => name === currentTab);
    if (currentIndex !== -1) {
      // 현재 탭에 해당하는 아이콘을 초록색으로 변경
      temp[currentIndex] = greenNav[currentIndex];
    }
    return temp;
  };

  const [nav, setNav] = useState<string[]>(initializeNav);

  useEffect(() => {
    // currentTab이 변경될 때마다 nav 상태 업데이트
    setNav(initializeNav());
  }, [currentTab]);

  const handleClick = (i: number) => {
    const temp = [...greyNav];
    // 클릭한 탭의 아이콘을 초록색으로 변경
    temp[i] = greenNav[i];
    setActiveTab(names[i]);
    setNav(temp);

    switch (i) {
      case 0:
        navigate('/');
        break;
      case 1:
        navigate('/');
        break;
      case 2:
        navigate('/');
        break;
      case 3:
        navigate('/chat-home');
        break;
      case 4:
        navigate('/mypage');
        break;
    }
  };

  return (
    <S.BoxNav>
      {nav.map((imgUrl, i) => (
        <S.BoxItem key={imgUrl} onClick={() => handleClick(i)}>
          <S.TabIcon src={imgUrl} />
          <S.TabName $active={activeTab === names[i]}>{names[i]}</S.TabName>
        </S.BoxItem>
      ))}
    </S.BoxNav>
  );
};

export default Nav;
