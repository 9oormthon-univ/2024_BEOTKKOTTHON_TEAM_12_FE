export const truncatedName = (str: string) => {
  return str.length > 10 ? str.slice(0, 10) + '...' : str;
};
