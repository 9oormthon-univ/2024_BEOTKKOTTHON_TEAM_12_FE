import { instance } from 'apis';
import { USER_ID } from 'constants/shared';

const GET = {
  chattingData(chat_rood_id: string) {
    return instance.get(`/chat/room/enter?chatRoomId=${chat_rood_id}&userId=${USER_ID}`);
  },
  chattingList() {
    return instance.get(`/chat/rooms?userId=${USER_ID}&pageNumber=0`);
  },
};

const POST = {
  blockUser(chat_room_id: string) {
    return instance.post(`/chat/room/block?chatRoomId=${chat_room_id}&userId=${USER_ID}`, {});
  },
  newChattingRoom(productId: number) {
    return instance.post(`/chat/room/create?productId=${productId}&userId=${USER_ID}`, {});
  },
};

const DELETE = {
  roomId(chat_room_id: string) {
    return instance.delete(`/chat/room/delete?chatRoomId=${chat_room_id}&userId=${USER_ID}`);
  },
};

const CHATTING_API = {
  GET,
  POST,
  DELETE,
};

export default CHATTING_API;
