import { BoxKebabList } from 'components';
import { useBlockUserMutation } from 'hooks/queries/products/useBlockUserMutation';

interface KebabChattingDetailProps {
  sellerId: number;
}

const KebabChattingDetail = ({ sellerId }: KebabChattingDetailProps) => {
  const { mutate: blockMutation } = useBlockUserMutation(sellerId);
  return (
    <>
      <BoxKebabList>
        <p onClick={() => blockMutation()}>차단하기</p>
        <p className="red">신고하기</p>
      </BoxKebabList>
    </>
  );
};

export default KebabChattingDetail;
