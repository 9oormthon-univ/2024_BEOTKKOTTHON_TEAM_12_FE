import * as S from './style';
import { useNavigate } from 'react-router-dom';
import { levelUrlArr } from 'utils/levelUrlArr';
import TextLabel from 'components/atom/text-label';
import { useChattingList } from 'queries/chatting/useChattingList';
import Loading from 'components/atom/loading';
import { ChattingListType } from 'types/chattingType';
import { useChattingListData } from 'store/chattingList';

const ChatListItem = () => {
  const navigate = useNavigate();

  const { status } = useChattingList();
  const chattingList = useChattingListData();

  const handleClick = (room_id: number) => {
    navigate(`/chat/room/${room_id}`);
  };

  if (status === 'pending') return <Loading $height="var(--content-size)" />;
  if (status === 'error') return null;

  return (
    <div>
      {chattingList.map((item: ChattingListType) => (
        <S.Container key={item.chat_room_id} onClick={() => handleClick(item.chat_room_id)}>
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
