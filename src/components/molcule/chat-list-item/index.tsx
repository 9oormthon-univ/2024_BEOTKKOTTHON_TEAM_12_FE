import React from 'react';
import { ChatRoom } from 'types/types';

import * as S from './style';
import { useNavigate } from 'react-router-dom';
import { levelUrlArr } from 'utils/levelUrlArr';
import TextLabel from 'components/atom/text-label';
import { useChattingList } from 'hooks/queries/chatting/useChattingList';
import Loading from 'components/atom/loading';
import { ChattingListType } from 'types/chattingType';

const ChatListItem = () => {
  const navigate = useNavigate();
  // const InfoMessage: ChatRoom[] = [
  //   {
  //     last_massage: `등록하신 <가져가세요> 상품이 5일동안 거래가`,
  //     timestamp: '10:00',
  //     user_profile_image: wearProfile,
  //     user_nick_name: '팀 WEAR',
  //   },
  // ];

  const { data: chattingList, status } = useChattingList();

  if (status === 'pending') return <Loading $height="var(--content-size)" />;
  if (status === 'error') return null;

  return (
    <div>
      {chattingList.map((item: ChattingListType) => (
        <S.Container key={item.chat_room_id}>
          <S.Image src={item.product_image[0]} alt="Profile" />

          <S.Content>
            <S.Header>
              <div className="profile">
                <TextLabel $weight={700} size={14}>
                  {item.chat_other_nick_name}
                </TextLabel>
                <img src={levelUrlArr(item.chat_other_level)} alt="level" />
              </div>
              <p className="time">{item.message_info.time}</p>
            </S.Header>

            <S.Footer>
              <S.Message>{item.message_info.message}</S.Message>
              <div className="count">1</div>
            </S.Footer>
          </S.Content>
        </S.Container>
      ))}
    </div>
  );
};

export default ChatListItem;
