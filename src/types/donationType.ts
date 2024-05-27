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
