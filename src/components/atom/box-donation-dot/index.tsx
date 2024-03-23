import * as S from './styles';

interface BoxDonationDotProps {
  num: number;
}

const BoxDonationDot = ({ num }: BoxDonationDotProps) => {
  return (
    <S.Container>
      {[...Array(4)].map((_, index) => (
        <S.Dot key={index} className={num === index ? 'active' : ''} />
      ))}
    </S.Container>
  );
};

export default BoxDonationDot;
