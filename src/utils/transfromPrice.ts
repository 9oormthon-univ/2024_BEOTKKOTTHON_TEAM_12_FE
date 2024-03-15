// number 받아서 원화 표시(string)로 변경

export const transformPrice = (value: number) => {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
