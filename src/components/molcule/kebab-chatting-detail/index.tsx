import { BoxKebabList } from 'components';
import { useNavigate } from 'react-router-dom';
import { useBlockUser, useExitRoom } from 'service/chatting/useChattingService';

interface KebabChattingDetailProps {
  chat_room_id: string | undefined;
}

const KebabChattingDetail = ({ chat_room_id }: KebabChattingDetailProps) => {
  const navigate = useNavigate();
  const { mutate: blockMutation } = useBlockUser();
  const { mutate: exitMutation } = useExitRoom();

  const handleBlockUser = () => {
    blockMutation(chat_room_id as string);
    navigate(-1);
  };

  const handleClickExit = () => {
    exitMutation(chat_room_id as string);
    navigate(-1);
  };

  return (
    <>
      <BoxKebabList>
        <p onClick={handleBlockUser}>차단하기</p>
        <p onClick={handleClickExit}>채팅방 나가기</p>
        <p className="red">신고하기</p>
      </BoxKebabList>
    </>
  );
};

export default KebabChattingDetail;
