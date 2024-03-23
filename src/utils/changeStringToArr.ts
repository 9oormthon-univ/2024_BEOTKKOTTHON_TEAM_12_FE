export const changeStringToArr = (str: string): string[] => {
  const trimmedStr = str.slice(1, -1);
  const splitArray = trimmedStr.split(',');

  return splitArray.map((s) => s.trim());
};
