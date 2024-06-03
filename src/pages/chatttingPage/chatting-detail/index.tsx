import { useParams } from 'react-router-dom';
import * as S from './style';
import { ButtonBack, ChatInput, ChatMessage, Header, Loading } from 'components';
import { useChattingDetailData } from 'queries/chatting/useChattingDetailData';
import { levelUrlArr } from 'utils/levelUrlArr';
import { MessageType } from 'types/chattingType';
import { useMessageData } from 'store/chatData';
import { useScrollToBottom } from 'hooks/useScrollToBottom';
import { GoKebabHorizontal } from 'react-icons/go';
import { transformPrice } from 'utils/transformPrice';
import { useState } from 'react';
import KebabChattingDetail from 'components/molcule/kebab-chatting-detail';
import useWebSocket from 'hooks/useWebsocket';
import { useToggle } from 'hooks/useToggle';

const ChattingDetail = () => {
  const { id: chat_room_id } = useParams();
  const client = useWebSocket(chat_room_id);
  const { data: chattingDetaildata, status } = useChattingDetailData(chat_room_id as string);
  const messages = useMessageData();
  const ref = useScrollToBottom(messages);
  const [isOpen, togleOpen] = useToggle(false);

  if (status === 'pending') return <Loading $height="100svh" />;
  if (status === 'error') return null;

  return (
    <>
      <Header ref={ref}>
        <ButtonBack className="left" />
        <S.HeaderProfile>
          <p>{chattingDetaildata?.customer_nick_name}</p>
          <img src={levelUrlArr(chattingDetaildata?.customer_level)} alt="profile level" />
        </S.HeaderProfile>
        <GoKebabHorizontal className="right" onClick={togleOpen} />
      </Header>

      {isOpen && <KebabChattingDetail chat_room_id={chat_room_id} />}

      <S.Product>
        <img src={chattingDetaildata.product_image[0]} alt="product_img" />

        <div>
          <p className="name">{chattingDetaildata.product_name}</p>
          <p className="price">{transformPrice(chattingDetaildata.price)}</p>
        </div>
      </S.Product>

      <S.Content ref={ref}>
        {messages &&
          messages.map((message: MessageType, i: number) => (
            <ChatMessage messageData={message} key={i} />
          ))}
        <div />
      </S.Content>

      <ChatInput chat_room_id={chat_room_id} client={client} />
    </>
  );
};

export default ChattingDetail;
