import React, { useCallback, useEffect } from 'react';
import * as S from './style';
import { Tag, TextLabel } from '@components/index';
import useStore from '../../../store/userData';
import { styleTags } from 'src/data/shared';

interface TagInputProps {
  userStyleTags?: string[];
  label?: string;
  setButtonColor?: React.Dispatch<React.SetStateAction<{ backgroundColor: string; color: string }>>;
}

const TagInput: React.FC<TagInputProps> = ({ label, userStyleTags, setButtonColor }) => {
  const { userProfileInfo, updateUserStyleTags } = useStore();

  const toggleTag = useCallback(
    (tag: string) => {
      const newTags = userProfileInfo.style.includes(tag)
        ? userProfileInfo.style.filter((t) => t !== tag)
        : [...userProfileInfo.style, tag];
      updateUserStyleTags(newTags);
    },
    [userProfileInfo.style, updateUserStyleTags]
  );

  useEffect(() => {
    // userProfileInfo.style 배열의 길이에 따라 버튼 색상을 변경
    const buttonColors =
      userProfileInfo.style.length > 0
        ? { backgroundColor: 'var(--green-primary)', color: '#ffffff' }
        : { backgroundColor: 'var(--grey-2)', color: 'var(--grey-5)' };

    setButtonColor && setButtonColor(buttonColors);
  }, [userProfileInfo.style, setButtonColor]);

  return (
    <S.TagInputWrapper>
      <TextLabel text={label ? label : '스타일 선택'} size={16} $weight={500} />
      <S.SelectTagWrapper>
        {styleTags.map((tag) => (
          <Tag
            key={tag}
            $active={userProfileInfo.style.includes(tag)}
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
