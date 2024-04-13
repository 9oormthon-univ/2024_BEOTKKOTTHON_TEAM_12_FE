import { FormTrade, Header, Loading } from 'components/index';
import * as S from './styled';
import close from 'assets/icons/close_large.svg';
import { useNavigate, useParams } from 'react-router-dom';
import { useFormData } from 'store/formData';
import { useEditProductMutation } from 'hooks/queries/products/useEditProductMutation';
import { useProductEditQuery } from 'hooks/queries/products/useProductEditQuery';

const ProductEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const formData = useFormData();
  const { data: productEditQuery, isLoading, isError } = useProductEditQuery(id as string);
  const { mutate: editProductMutation } = useEditProductMutation(id as string);

  return (
    <>
      <Header>
        <p>등록한 글 수정하기</p>
        <img src={close} className="right" alt="btn-close" onClick={() => navigate(-1)} />
      </Header>

      {isLoading ? (
        <Loading $height="calc(100svh - var(--header-size))" />
      ) : (
        <S.Content>
          <FormTrade
            handleSubmitAction={() => editProductMutation(formData)}
            btnText={'수정 완료'}
          />
        </S.Content>
      )}
    </>
  );
};

export default ProductEdit;
