import { useParams } from 'react-router-dom';
import * as S from './style';
import { ButtonBack, ChatInput, ChatMessage, Header } from 'components';
import { useChattingDetailData } from 'hooks/queries/chatting/useChattingDetailData';
import { levelUrlArr } from 'utils/levelUrlArr';
import { MessageType } from 'types/chattingType';
import { useMessageData } from 'store/chatData';
import { useScrollToBottom } from 'hooks/chatting/useScrollToBottom';
import { GoKebabHorizontal } from 'react-icons/go';
import { transformPrice } from 'utils/transformPrice';

const Test = () => {
  const { id: chat_room_id } = useParams();
  const { data: chattingDetaildata } = useChattingDetailData(chat_room_id as string);

  const messages = useMessageData();
  const ref = useScrollToBottom(messages);

  return (
    <>
      <Header ref={ref}>
        <ButtonBack className="left" />
        <S.HeaderProfile>
          <p>{chattingDetaildata?.customer_nick_name}</p>
          <img src={levelUrlArr(chattingDetaildata?.customer_level)} alt="profile level" />
        </S.HeaderProfile>
        <GoKebabHorizontal className="right" />
      </Header>

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

      <ChatInput chat_room_id={chat_room_id} />
    </>
  );
};

export default Test;
