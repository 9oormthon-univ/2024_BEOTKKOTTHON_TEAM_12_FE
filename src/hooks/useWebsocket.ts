import { CompatClient, Stomp } from '@stomp/stompjs';
import { useEffect, useRef } from 'react';
import SockJS from 'sockjs-client';

const useWebSocket = (chat_rood_id: string | undefined) => {
  const client = useRef<CompatClient | null>(null);

  // 소켓 연결
  const connectHandler = () => {
    const socket = new SockJS(`http://localhost:8080/ws-stomp`);
    console.log(socket);

    client.current = Stomp.over(socket);
    client.current.connect(
      {},
      () => {
        client.current?.subscribe(
          `/sub/api/chat/room/${chat_rood_id}`,
          (message) => {
            // 기존 대화 내역에 새로운 메시지 추가
            console.log(message);
          },
          { 'Content-Type': 'application/json' }
        );
        console.log('WebSocket connection established');
      },
      (error: any) => {
        console.error('WebSocket connection error:', error);
      }
    );
  };

  useEffect(() => {
    connectHandler();
    return () => {
      client.current?.disconnect(() => {
        console.log('WebSocket disconnected');
      });
    };
  }, [chat_rood_id]);

  return client;
};

export default useWebSocket;
