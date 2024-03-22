// src/apis/index.ts 파일 내용 예시

import SockJS from 'sockjs-client';
import { Stomp } from '@stomp/stompjs';

export class WebSocketAPI {
  private stompClient: any;
  //연결 됐는지 확인
  private connected: boolean = false;

  constructor() {
    this.initializeWebSocketConnection();
  }

  initializeWebSocketConnection(): void {
    const serverUrl = '/ws-stomp';
    const ws = new SockJS(serverUrl);
    this.stompClient = Stomp.over(ws);
    this.stompClient.connect({}, this.onConnected, this.onError);
  }

  onConnected = () => {
    console.log('WebSocket 연결 완료');
    this.connected = true; // 연결 상태 업데이트
  };

  onError = (error: string) => {
    console.log(
      'Could not connect to WebSocket server. Please refresh this page to try again!',
      error
    );
    this.connected = false; // 연결 상태 업데이트
  };

  sendMessage(chatRoomId: string, message: any): void {
    this.stompClient.send(`/pub/api/chat/message`, {}, JSON.stringify({ chatRoomId, message }));
  }

  subscribeToChatRoom(chatRoomId: string, callback: (message: any) => void): void {
    if (!this.connected) {
      console.error('STOMP connection 안됨.');
      return;
    }
    this.stompClient.subscribe(`/sub/api/chat/room/${chatRoomId}`, (response: any) => {
      callback(JSON.parse(response.body));
    });
  }

  disconnect(): void {
    if (this.stompClient) {
      this.stompClient.disconnect(() => {
        console.log('WebSocket 연결 해제');
      });
    }
  }
}
