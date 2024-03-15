import React from 'react';
import * as S from './style';
import { Tag, TextLabel } from '@components/index';

interface TagInputProps {
  styleTags: string[];
  userStyleTags: string[];
}
const TagInput: React.FC<TagInputProps> = ({ styleTags, userStyleTags }) => {
  return (
    <S.TagInputWrapper>
      <TextLabel text="스타일 태그" size={16} weight={700} />
      <S.SelectTagWrapper>
        {styleTags.map((category, index) => (
          <Tag key={index}>{category}</Tag>
        ))}
      </S.SelectTagWrapper>
    </S.TagInputWrapper>
  );
};

export default TagInput;
