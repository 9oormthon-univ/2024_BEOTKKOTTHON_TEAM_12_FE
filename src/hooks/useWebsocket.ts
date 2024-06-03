import { CompatClient, Stomp } from '@stomp/stompjs';
import { useRef } from 'react';
import { useEffect } from 'react';
import SockJS from 'sockjs-client';
import { useMessageActions } from 'store/chatData';

const useWebSocket = (chat_room_id: string | undefined) => {
  const client = useRef<CompatClient | null>(null);
  const { addMessage } = useMessageActions();

  const connectHandler = () => {
    const socket = new SockJS(`http://localhost:8080/ws-stomp`);

    client.current = Stomp.over(socket);
    client.current.connect(
      {},
      () => {
        client.current?.subscribe(
          `/sub/api/chat/room/${chat_room_id}`,
          (message) => {
            // 기존 대화 내역에 새로운 메시지 추가
            console.log('message', message);
            addMessage(JSON.parse(message.body));
          },
          { 'Content-Type': 'application/json' }
        );
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
  }, [chat_room_id]);

  return client;
};

export default useWebSocket;
