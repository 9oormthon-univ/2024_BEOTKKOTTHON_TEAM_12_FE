import { USER_ID } from 'constants/shared';
import { deleteData, getData, postData } from 'service/service';
import { ChattingDetailResponse, ChattingListResponse, NewRoomResponse } from 'types/chattingType';
import { DefaultQueryResponse } from 'types/common';

const GET = {
  detail(chat_rood_id: string): Promise<ChattingDetailResponse> {
    return getData(`/chat/room/enter?chatRoomId=${chat_rood_id}&userId=${USER_ID}`);
  },
  chattingList(): Promise<ChattingListResponse> {
    return getData(`/chat/rooms?userId=${USER_ID}&pageNumber=0`);
  },
};

const POST = {
  blockUser(chat_room_id: string): Promise<DefaultQueryResponse> {
    return postData(`/chat/room/block?chatRoomId=${chat_room_id}&userId=${USER_ID}`, {});
  },
  newChattingRoom(productId: number): Promise<NewRoomResponse> {
    return postData(`/chat/room/create?productId=${productId}&userId=${USER_ID}`, {});
  },
};

const DELETE = {
  roomId(chat_room_id: string): Promise<DefaultQueryResponse> {
    return deleteData(`/chat/room/delete?chatRoomId=${chat_room_id}&userId=${USER_ID}`);
  },
};

const chattingService = {
  GET,
  POST,
  DELETE,
};

export default chattingService;
