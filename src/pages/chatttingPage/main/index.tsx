import { Header, Nav, Search, TextLabel } from 'components/index';
import * as S from './style';
import ChatListItem from 'components/molcule/chat-list-item';

const ChattingMain: React.FC = () => {
  return (
    <>
      <Header>
        <TextLabel className="left" size={20} $weight={600}>
          채팅
        </TextLabel>
      </Header>
      <S.Container>
        <Search placeholder="닉네임, 상품 검색" />
        <ChatListItem />
      </S.Container>
      <Nav currentTab="채팅" />
    </>
  );
};

export default ChattingMain;
