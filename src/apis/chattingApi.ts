import { instance } from 'apis';
import { USER_ID } from 'constants/shared';

const CHATTING_API = {
  // GET
  getChatData(chat_rood_id: string) {
    return instance.get(`/chat/room/enter?chatRoomId=${chat_rood_id}&userId=${USER_ID}`);
  },
  getChatList() {
    return instance.get(`/chat/rooms?userId=${USER_ID}&pageNumber=0`);
  },

  // POST
  postBlockUser(chat_room_id: string) {
    return instance.post(`/chat/room/block?chatRoomId=${chat_room_id}&userId=${USER_ID}`, {});
  },
  postNewChattingRoom(productId: number) {
    return instance.post(`/chat/room/create?productId=${productId}&userId=${USER_ID}`, {});
  },

  // DELETE
  deleteRoomId(chat_room_id: string) {
    return instance.delete(`/chat/room/delete?chatRoomId=${chat_room_id}&userId=${USER_ID}`);
  },
};

export default CHATTING_API;
