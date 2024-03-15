import level1 from '@assets/icons/profile-icon-level1.svg';
import level2 from '@assets/icons/profile-icon-level1.svg';
import level3 from '@assets/icons/profile-icon-level1.svg';
import level4 from '@assets/icons/profile-icon-level1.svg';
import level5 from '@assets/icons/profile-icon-level1.svg';

export const levelUrlArr = (level: number) => {
  const imgUrls = [level1, level2, level3, level4, level5];
  return imgUrls[level - 1];
};
