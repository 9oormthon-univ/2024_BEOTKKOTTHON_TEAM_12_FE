export interface UnivType {
  university_name: string;
  university_point: string;
  university_image: string[];
}

export interface RankingType {
  date: string;
  time: string;
  university_list: UnivType[];
  first_university_name: string;
  first_total_point: string;
  first_product_count: string;
  first_donation_count: string;
}

export interface DonationType {
  user_name: string;
  address: string;
  phone: string;
  email: string;
  donation_item: string;
  clothes_count: number;
  fashion_count: number;
  box_count: number;
}
