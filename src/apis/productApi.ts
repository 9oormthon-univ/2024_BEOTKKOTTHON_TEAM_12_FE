import { instance } from 'apis';
import { USER_ID } from 'constants/shared';
import { ProductFormDataType } from 'types/productType';

const GET = {
  popularSearch() {
    return instance.get(`/products/search/rank`);
  },
  detail(productId: string) {
    return instance.get(`/products/${USER_ID}/${productId}`);
  },
  edit(productId: string) {
    return instance.get(`/products/edit/${USER_ID}/${productId}`);
  },
  main(endpoint: string, pageParam: number) {
    return instance.get(`${endpoint}&userId=${USER_ID}&pageNumber=${pageParam}`);
  },
  recentSearch(userId: number) {
    return instance.get(`/products/search/list?userId=${userId}`);
  },
  serach(endpoint: string, searchName: string, activeCategory: string, pageParam: number) {
    return instance.get(
      `${endpoint}searchName=${searchName}&categoryName=${activeCategory}&userId=${USER_ID}&pageNumber=${pageParam}`
    );
  },
};

const POST = {
  blockUser(blockedUserId: number) {
    return instance.post(`/products/block/${USER_ID}/${blockedUserId}`, {});
  },
  liked(productId: number) {
    return instance.post(`/products/select/${USER_ID}/${productId}`, {});
  },
  create(sendData: ProductFormDataType) {
    return instance.post(`/products/new/${USER_ID}`, sendData);
  },
  searchSave(searchName: string) {
    return instance.post(`/products/search/save?userId=${USER_ID}&searchName=${searchName}`);
  },
};

const PUT = {
  edit(productId: string, sendData: ProductFormDataType) {
    return instance.put(`/products/edit/${USER_ID}/${productId}`, sendData);
  },
  hide(productId: string) {
    return instance.put(`/products/private/${USER_ID}/${productId}`);
  },
  onSale(productId: string, isOnSale: boolean) {
    return instance.put(`/products/soldOut/${USER_ID}`, {
      id: productId,
      post_status: isOnSale ? 'soldOut' : 'onSale',
    });
  },
};

const DELETE = {
  product(productId: string) {
    return instance.delete(`/products/delete/${USER_ID}/${productId}`);
  },
  allTag() {
    return instance.delete(`/products/search/delete/all?userId=${USER_ID}`);
  },
  tag(searchName: string) {
    return instance.delete(`/products/search/delete?userId=${USER_ID}&searchName=${searchName}`);
  },
  unliked(productId: number) {
    return instance.delete(`/products/deselect/${USER_ID}/${productId}`);
  },
};

const PRODUCT_API = {
  GET,
  POST,
  PUT,
  DELETE,
};

export default PRODUCT_API;
