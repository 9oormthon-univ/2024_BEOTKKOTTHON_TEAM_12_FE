import { CompatClient, Stomp } from '@stomp/stompjs';
import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import SockJS from 'sockjs-client';

const Test = () => {
  const { id: chat_rood_id } = useParams();
  const client = useRef<CompatClient | null>(null);
  console.log(client);

  // 소켓 연결
  const connectHandler = () => {
    const socket = new SockJS(`http://localhost:8080/ws-stomp`);
    console.log(socket);

    client.current = Stomp.over(socket);
    client.current.connect({}, () => console.log('connected'));
  };

  useEffect(() => {
    connectHandler();
  }, [chat_rood_id]);

  return (
    <>
      <div>채팅방 입장 성공</div>
    </>
  );
};

export default Test;
