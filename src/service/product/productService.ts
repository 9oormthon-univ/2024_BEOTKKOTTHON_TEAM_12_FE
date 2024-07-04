import { USER_ID } from 'constants/shared';
import { deleteData, getData, postData, putData } from 'service/service';
import { DefaultQueryResponse } from 'types/common';
import {
  MainResponse,
  PopularSearchResponse,
  ProductDetailResponse,
  ProductEditResponse,
  ProductFormDataType,
  RecentSearchResponse,
  SearchResponse,
} from 'types/productType';

const GET = {
  main(pageParam: number, category: string, onSale: string | null): Promise<MainResponse> {
    const endpoint = onSale
      ? `/products/category/sale?categoryName=${category}`
      : `/products/category?categoryName=${category}`;
    return getData(`${endpoint}&userId=${USER_ID}&pageNumber=${pageParam}`);
  },
  detail(productId: string): Promise<ProductDetailResponse> {
    return getData(`/products/${USER_ID}/${productId}`);
  },
  popularSearch(): Promise<PopularSearchResponse> {
    return getData(`/products/search/rank`);
  },
  recentSearch(): Promise<RecentSearchResponse> {
    return getData(`/products/search/list?userId=${USER_ID}`);
  },
  edit(productId: string): Promise<ProductEditResponse> {
    return getData(`/products/edit/${USER_ID}/${productId}`);
  },
  serach(
    onSale: string | null,
    searchName: string,
    activeCategory: string,
    pageParam: number
  ): Promise<SearchResponse> {
    const endpoint = onSale ? `/products/search/category/sale?` : `/products/search/category?`;
    return getData(
      `${endpoint}searchName=${searchName}&categoryName=${activeCategory}&userId=${USER_ID}&pageNumber=${pageParam}`
    );
  },
};

const POST = {
  block(blockedId: number): Promise<DefaultQueryResponse> {
    return postData(`/products/block/${USER_ID}/${blockedId}`, {});
  },
  liked(productId: number): Promise<DefaultQueryResponse> {
    return postData(`/products/select/${USER_ID}/${productId}`, {});
  },
  create(sendData: ProductFormDataType): Promise<DefaultQueryResponse> {
    return postData(`/products/new/${USER_ID}`, sendData);
  },
  searchSave(searchName: string): Promise<DefaultQueryResponse> {
    return postData(`/products/search/save?userId=${USER_ID}&searchName=${searchName}`, {});
  },
};

const PUT = {
  edit(productId: string, sendData: ProductFormDataType): Promise<DefaultQueryResponse> {
    return putData(`/products/edit/${USER_ID}/${productId}`, sendData);
  },
  hide(productId: string): Promise<DefaultQueryResponse> {
    return putData(`/products/private/${USER_ID}/${productId}`, {});
  },
  onSale(productId: string, isOnSale: boolean): Promise<DefaultQueryResponse> {
    return putData(`/products/soldOut/${USER_ID}`, {
      id: productId,
      post_status: isOnSale ? 'soldOut' : 'onSale',
    });
  },
};

const DELETE = {
  product(productId: string): Promise<DefaultQueryResponse> {
    return deleteData(`/products/delete/${USER_ID}/${productId}`);
  },
  allTag(): Promise<DefaultQueryResponse> {
    return deleteData(`/products/search/delete/all?userId=${USER_ID}`);
  },
  tag(searchName: string): Promise<DefaultQueryResponse> {
    return deleteData(`/products/search/delete?userId=${USER_ID}&searchName=${searchName}`);
  },
  unliked(productId: number): Promise<DefaultQueryResponse> {
    return deleteData(`/products/deselect/${USER_ID}/${productId}`);
  },
};

const productService = {
  GET,
  POST,
  PUT,
  DELETE,
};

export default productService;
