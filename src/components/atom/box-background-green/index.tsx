import * as S from './style';
import TextLabel from '../text-label';
import ecoLeaf from 'assets/icons/eco_leaf.svg';

interface BoxProps {
  header: string;
  content1: string;
  content2: string;
}

const BoxBackgroundGreen = ({ header, content1, content2 }: BoxProps) => {
  return (
    <S.Container>
      <div>
        <S.Header>
          <span>{header}</span>
          <img src={ecoLeaf} className="leaf" alt="eco-leave" />
        </S.Header>
      </div>

      <div>
        <TextLabel color={'var(--green-3)'} size={12} $weight={400}>
          <p>{content1}</p>
          <p>{content2}</p>
        </TextLabel>
      </div>
    </S.Container>
  );
};

export default BoxBackgroundGreen;
