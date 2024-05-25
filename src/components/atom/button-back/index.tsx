import { IoChevronBack } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

interface ButtonBackProps {
  className: string;
  onClick?: () => void;
}

const ButtonBack = ({ className, onClick }: ButtonBackProps) => {
  const navigate = useNavigate();
  return <IoChevronBack className={className} onClick={onClick ? onClick : () => navigate(-1)} />;
};

export default ButtonBack;
