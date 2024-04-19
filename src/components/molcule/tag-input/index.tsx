import React from 'react';
import * as S from './style';
import { Tag, TextLabel } from 'components/index';
import { styleTags } from 'data/shared';

interface TagInputProps {
  label?: string;
  currentStyle: string[];
  handleChange: (value: string[]) => void;
}

const TagInput: React.FC<TagInputProps> = ({ label, currentStyle, handleChange }) => {
  const toggleTag = (tag: string) => {
    const newTags = currentStyle.includes(tag)
      ? currentStyle.filter((t) => t !== tag)
      : [...currentStyle, tag];
    console.log(newTags);
    handleChange(newTags);
  };

  return (
    <S.TagInputWrapper>
      <TextLabel size={16} $weight={500}>
        {label ? label : '스타일 선택'}
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
