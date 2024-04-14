import {
  ButtonBack,
  ContentProductDetail,
  FooterProductDetail,
  Header,
  KebabProductDetail,
} from 'components/index';
import kebab from 'assets/icons/kebab.svg';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

const ProductDetail = () => {
  const { id } = useParams() as { id: string };
  const [openKebab, setOpenKebab] = useState<boolean>(false);

  return (
    <>
      <Header>
        <ButtonBack className="left" $marginLeft="10px" />
        <img
          src={kebab}
          className="right"
          alt="btn-kebab"
          onClick={() => setOpenKebab(!openKebab)}
        />
      </Header>
      <KebabProductDetail openKebab={openKebab} id={id} />
      <ContentProductDetail id={id} />
      <FooterProductDetail />
    </>
  );
};

export default ProductDetail;
