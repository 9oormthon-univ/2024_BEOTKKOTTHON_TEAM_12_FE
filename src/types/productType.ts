// 차단한 사용자 데이터 타입
export interface ProductListItem {
  id: number;
  price: number;
  product_name: string;
  product_status: string;
  post_status: string;
  product_image: string[];
  is_selected: boolean;
  time: string;
}
