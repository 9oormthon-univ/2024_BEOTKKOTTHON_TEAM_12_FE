import { useParams } from 'react-router-dom';
import * as S from './style';
const ChatDetail = () => {
  const { id } = useParams();
  return (
    <S.Container>
      <h1>Chat Detail</h1>
      <p>{id}</p>
    </S.Container>
  );
};

export default ChatDetail;
