import { useParams } from 'react-router-dom';
import * as S from './style';
import { ButtonBack, ChatInput, ChatMessage, Header } from 'components';
import { useChattingDetailData } from 'hooks/queries/chatting/useChattingDetailData';
import { levelUrlArr } from 'utils/levelUrlArr';
import { MessageType } from 'types/chattingType';
import { useMessageData } from 'store/chatData';

const Test = () => {
  const { id: chat_room_id } = useParams();
  const { data: chattingDetaildata } = useChattingDetailData(chat_room_id as string);

  const messages = useMessageData();

  return (
    <>
      <Header>
        <ButtonBack className="left" $marginLeft="10px" />
        <S.HeaderProfile>
          <p>{chattingDetaildata?.customer_nick_name}</p>
          <img src={levelUrlArr(chattingDetaildata?.customer_level)} alt="profile level" />
        </S.HeaderProfile>
      </Header>

      <S.Content>
        {messages &&
          messages.map((message: MessageType, i: number) => (
            <ChatMessage messageData={message} key={i} />
          ))}
      </S.Content>

      <ChatInput chat_room_id={chat_room_id} />
    </>
  );
};

export default Test;
