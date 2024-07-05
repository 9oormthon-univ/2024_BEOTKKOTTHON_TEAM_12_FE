export interface InfiniteQueryResponse<T> {
  content: T;
  pageable: any;
  last: boolean;
  totalPages: number;
  totalElements: number;
  size: number;
  number: number;
  sort: any;
  first: boolean;
  numberOfElements: number;
  empty: boolean;
}

export interface DefaultQueryResponse {
  status: number;
  message: string;
  timestamp: string;
}
