import { useProductFormData } from 'store/productFormData';

export const checkIsFormValid = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const productFormData = useProductFormData();

  return !(
    productFormData.product_name &&
    productFormData.category_name &&
    productFormData.product_status &&
    productFormData.product_content &&
    productFormData.price &&
    productFormData.place
  );
};
