import { useState } from 'react';
import { useParams } from 'react-router-dom';
import * as S from './style';
import { ButtonBack, ChatMessage, Header } from 'components';
import { useChattingDetailData } from 'hooks/queries/chatting/useChattingDetailData';
import { levelUrlArr } from 'utils/levelUrlArr';
import { ChattingType } from 'types/chattingType';
import { LuSend } from 'react-icons/lu';
import useWebSocket from 'hooks/chatting/useWebsocket';
import { GoPlus } from 'react-icons/go';

const Test = () => {
  const { id: chat_rood_id } = useParams();
  const { data: chattingDetaildata } = useChattingDetailData(chat_rood_id as string);
  const [inputValue, setInputValue] = useState('');
  const messageObj = {
    sender_id: 2,
    sender_nick_name: '미정',
    profile_image: ['https://i.pinimg.com/564x/f1/0e/82/f10e820b22a9baa8807e4ed75ae6035a.jpg'],
    message: inputValue,
    timestamp: '오후 5:40',
    is_mine: true,
    sender_type: 'customer',
  };

  const client = useWebSocket(chat_rood_id);
  const handleClick = () => {
    if (client.current && client.current.connected) {
      client.current.send(
        `/pub/api/chat/message/${chat_rood_id}`,
        { 'Content-Type': 'application/json' },
        JSON.stringify(messageObj)
      );
    } else {
      console.error('WebSocket is not connected');
    }
  };

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
        {chattingDetaildata?.message_info_list &&
          chattingDetaildata?.message_info_list.map((message: ChattingType, i: number) => (
            <ChatMessage messageData={message} key={i} />
          ))}
      </S.Content>

      <S.Footer>
        <GoPlus className="plus" />
        <S.Input
          placeholder="메시지를 입력해주세요."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <div className="send">
          <LuSend onClick={handleClick} />
        </div>
      </S.Footer>
    </>
  );
};

export default Test;
