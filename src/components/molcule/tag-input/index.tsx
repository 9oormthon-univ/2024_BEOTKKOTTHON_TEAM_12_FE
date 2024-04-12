import React, { SetStateAction, useCallback, useEffect } from 'react';
import * as S from './style';
import { Tag, TextLabel } from 'components/index';
import { useUserProfileActions, useUserProfileInfo } from '../../../store/userData';
import { styleTags } from 'data/shared';
import { useQueryClient } from '@tanstack/react-query';
import { MypageUserType, ProfileUserType } from 'types/userType';

interface TagInputProps {
  label?: string;
  handleChangeStyleTag?: (tag: string[]) => void;
  setButtonColor?: React.Dispatch<
    React.SetStateAction<{ $backgroundColor: string; color: string }>
  >;

  userInfo: ProfileUserType;
  setUserInfo: React.Dispatch<SetStateAction<ProfileUserType>>;
}

const TagInput: React.FC<TagInputProps> = ({
  label,
  handleChangeStyleTag,
  setButtonColor,
  userInfo,
  setUserInfo,
}) => {
  const toggleTag = useCallback(
    (tag: string) => {
      const newTags = userInfo.style.includes(tag)
        ? userInfo.style.filter((t) => t !== tag)
        : [...userInfo.style, tag];
      setUserInfo({ ...userInfo, style: newTags });

      // handleChangeStyleTag 함수 호출하여 선택한 스타일 태그를 상위 컴포넌트로 전달
      // handleChangeStyleTag && handleChangeStyleTag(newTags);
    },
    [userInfo.style]
    // [userData.style, updateUserStyleTags, handleChangeStyleTag]
  );

  useEffect(() => {
    // userData.style 배열의 길이에 따라 버튼 색상을 변경
    const buttonColors =
      userInfo.style.length > 0
        ? { $backgroundColor: 'var(--green-primary)', color: '#ffffff' }
        : { $backgroundColor: 'var(--grey-2)', color: 'var(--grey-5)' };

    setButtonColor && setButtonColor(buttonColors);
  }, [userInfo.style, setButtonColor]);

  return (
    <S.TagInputWrapper>
      <TextLabel size={16} $weight={500}>
        {label ? label : '스타일 선택'}
      </TextLabel>
      <S.SelectTagWrapper>
        {styleTags.map((tag) => (
          <Tag key={tag} $active={userInfo.style.includes(tag)} onClick={() => toggleTag(tag)}>
            {tag}
          </Tag>
        ))}
      </S.SelectTagWrapper>
    </S.TagInputWrapper>
  );
};

export default TagInput;
