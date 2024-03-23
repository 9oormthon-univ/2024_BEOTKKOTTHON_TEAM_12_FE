import * as S from './styles';

interface BoxDonationDotProps {
  totalpage: number;
  num: number;
}

const BoxDonationDot = ({ totalpage, num }: BoxDonationDotProps) => {
  return (
    <S.Container>
      {[...Array(totalpage)].map((_, index) => (
        <S.Dot key={index} className={num === index ? 'active' : ''} />
      ))}
    </S.Container>
  );
};

export default BoxDonationDot;
