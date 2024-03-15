import React, { useCallback } from 'react';
import * as S from './style';
import { Tag, TextLabel } from '@components/index';
import useStore from '../../../store/store';

interface TagInputProps {
  styleTags: string[];
  userStyleTags?: string[];
}

const TagInput: React.FC<TagInputProps> = ({ styleTags }) => {
  const { userProfileInfo, updateUserStyleTags } = useStore();

  const toggleTag = useCallback(
    (tag: string) => {
      const newTags = userProfileInfo.styleTag.includes(tag)
        ? userProfileInfo.styleTag.filter((t) => t !== tag)
        : [...userProfileInfo.styleTag, tag];
      updateUserStyleTags(newTags);
    },
    [userProfileInfo.styleTag, updateUserStyleTags]
  );

  return (
    <S.TagInputWrapper>
      <TextLabel text="스타일 태그" size={16} weight={700} />
      <S.SelectTagWrapper>
        {styleTags.map((tag) => (
          <Tag
            key={tag}
            $active={userProfileInfo.styleTag.includes(tag)}
            onClick={() => toggleTag(tag)}
          >
            {tag}
          </Tag>
        ))}
      </S.SelectTagWrapper>
    </S.TagInputWrapper>
  );
};

export default TagInput;
