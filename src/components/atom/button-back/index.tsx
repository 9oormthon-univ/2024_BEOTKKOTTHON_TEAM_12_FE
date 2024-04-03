import back from 'assets/icons/arrow.svg';
import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();
  return (
    <BackImg
      className={className}
      $marginLeft={$marginLeft || ''}
      $width={$width || ''}
      src={back}
      alt="back"
      onClick={onClick ? onClick : () => navigate(-1)}
    />
  );
};

export default ButtonBack;
