import level1 from '@assets/icons/profile-icon-level1.svg';
import level2 from '@assets/icons/profile-icon-level1.svg';
import level3 from '@assets/icons/profile-icon-level1.svg';
import level4 from '@assets/icons/profile-icon-level1.svg';
import level5 from '@assets/icons/profile-icon-level1.svg';

export const levelUrlArr = (inputLevel: string) => {
  const level = ['씨앗', '새싹', '꽃', '목화', '옷'];
  const imgUrls = [level1, level2, level3, level4, level5];

  const index = level.indexOf(inputLevel);
  if (index !== -1) {
    return imgUrls[index];
  } else {
    return '';
  }
};
