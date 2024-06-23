import { Client, CompatClient, Stomp } from '@stomp/stompjs';
import { useRef } from 'react';
import { useEffect } from 'react';
import SockJS from 'sockjs-client';
import { useMessageActions } from 'store/chatData';
import { useToken } from 'store/token';

const useWebSocket = (chat_room_id: string | undefined) => {
  const client = useRef<Client | null>(null);
  const token = useToken();
  const { addMessage } = useMessageActions();

  const connectHandler = () => {
    console.log('Attempting to connect to WebSocket...');
    const socket = new SockJS(`http://localhost:8080/ws-stomp`);
    client.current = new Client({
      webSocketFactory: () => socket,
      connectHeaders: {
        Authorization: `Bearer ${token}`,
      },
      onConnect: () => {
        console.log('WebSocket connection established.');
        client.current?.subscribe(
          `/sub/api/chat/room/${chat_room_id}`,
          (message) => {
            console.log('Received message:', message);
            addMessage(JSON.parse(message.body));
          },
          { 'Content-Type': 'application/json' }
        );
      },
      onStompError: (frame) => {
        console.error('Broker reported error: ' + frame.headers['message']);
        console.error('Additional details: ' + frame.body);
      },
      debug: (str) => {
        console.log('STOMP debug:', str);
      },
    });

    client.current.activate();
  };

  useEffect(() => {
    connectHandler();
    return () => {
      client.current?.deactivate();
      console.log('WebSocket disconnected');
    };
  }, [chat_room_id, token]);

  return client;
};

export default useWebSocket;
