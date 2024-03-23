// hooks/useWebSocket.ts
import { useRef, useEffect, useCallback } from 'react';
import SockJS from 'sockjs-client';
import { Stomp, CompatClient, Message } from '@stomp/stompjs';

type OnMessageReceivedType = (message: Message) => void;

const useWebSocket = (chatRoomId: string, onMessageReceived: OnMessageReceivedType) => {
  const client = useRef<CompatClient | null>(null);

  const connect = useCallback(() => {
    const serverUrl = `${process.env.REACT_APP_SOCKET_SERVER_URL}/ws-stomp`;
    const webSocketFactory = () => new SockJS(serverUrl);
    client.current = Stomp.over(webSocketFactory);

    client.current.connect(
      {},
      () => {
        console.log('연결 성공');
        if (client.current) {
          client.current.subscribe(`/sub/api/chat/room/${chatRoomId}`, onMessageReceived);
        }
      },
      (error: any) => {
        console.error('연결 실패:', error);
      }
    );
  }, [chatRoomId, onMessageReceived]);

  const disconnect = useCallback(() => {
    if (client.current) {
      client.current.disconnect(() => {
        console.log('연결 해제');
      });
    }
  }, []);

  useEffect(() => {
    connect();
    return () => disconnect();
  }, [connect, disconnect]);

  const sendMessage = useCallback(
    (message: string) => {
      if (client.current?.connected) {
        const newMessage = {
          id: Date.now().toString(),
          chatRoomId: chatRoomId,
          content: message,
        };
        client.current.send(`/pub/api/chat/message`, {}, JSON.stringify(newMessage));
        console.log('메시지 전송 완료:', newMessage);
      }
    },
    [chatRoomId]
  );

  return { sendMessage };
};

export default useWebSocket;
