import React from 'react';
import * as S from './style';
import { Tag, TextLabel } from 'components/index';
import { styleTags } from 'data/shared';

interface TagInputProps {
  $padding?: string;
  currentStyle: string[];
  handleChange: (value: string[]) => void;
}

const TagInput: React.FC<TagInputProps> = ({ $padding, currentStyle, handleChange }) => {
  const toggleTag = (tag: string) => {
    const newTags = currentStyle.includes(tag)
      ? currentStyle.filter((t) => t !== tag)
      : [...currentStyle, tag];
    handleChange(newTags);
  };

  return (
    <S.TagInputWrapper $padding={$padding}>
      <TextLabel size={16} $weight={700}>
        스타일 태그 설정
      </TextLabel>
      <S.SelectTagWrapper>
        {styleTags.map((tag) => (
          <Tag key={tag} $active={currentStyle.includes(tag)} onClick={() => toggleTag(tag)}>
            {tag}
          </Tag>
        ))}
      </S.SelectTagWrapper>
    </S.TagInputWrapper>
  );
};

export default TagInput;
