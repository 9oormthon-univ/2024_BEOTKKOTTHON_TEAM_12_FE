import { useParams } from 'react-router-dom';
import * as React from 'react';
const ChatDetail = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>Chat Detail</h1>
      <p>{id}</p>
    </div>
  );
};

export default ChatDetail;
