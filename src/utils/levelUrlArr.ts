import level1 from '@assets/icons/level-1.svg';
import level2 from '@assets/icons/level-2.svg';
import level3 from '@assets/icons/level-3.svg';
import level4 from '@assets/icons/level-4.svg';
import level5 from '@assets/icons/level-5.svg';

export const levelUrlArr = (level: number) => {
  const imgUrls = [level1, level2, level3, level4, level5];
  return imgUrls[level - 1];
};
