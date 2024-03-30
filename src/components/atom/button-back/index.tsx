import back from 'assets/icons/arrow.svg';
import styled from 'styled-components';

interface ButtonBackProps {
  className?: string;
  $width?: string;
  $marginLeft?: string;
  onClick?: () => void;
}

const BackImg = styled.img<{ $marginLeft: string; $width: string }>`
  margin-left: ${(props) => props.$marginLeft};
  width: ${(props) => props.$width};
  transform: rotate(180deg);
`;

const ButtonBack = ({ className, onClick, $marginLeft, $width }: ButtonBackProps) => {
  return (
    <BackImg
      className={className}
      $marginLeft={$marginLeft || ''}
      $width={$width || ''}
      src={back}
      alt="back"
      onClick={onClick}
    />
  );
};

export default ButtonBack;
