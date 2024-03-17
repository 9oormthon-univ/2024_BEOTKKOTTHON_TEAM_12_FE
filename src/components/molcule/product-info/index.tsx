import React from 'react';
import * as S from './style';
import defaultImg from '@assets/images/product-default-img.png';
interface ProductInfoProps {
  imageUrl?: string;
  productName: string;
  price: number;
  onClick: () => void;
}

const ProductInfo: React.FC<ProductInfoProps> = ({ imageUrl, productName, price, onClick }) => {
  return (
    <S.Container onClick={onClick}>
      <S.ImageContainer>
        <S.Image src={imageUrl ? imageUrl : defaultImg} alt={productName} />
      </S.ImageContainer>
      <S.ProductDetails>
        <S.ProductName>{productName}</S.ProductName>
        <S.ProductPrice>{`${price.toLocaleString()}원`}</S.ProductPrice>
      </S.ProductDetails>
    </S.Container>
  );
};

export default ProductInfo;
