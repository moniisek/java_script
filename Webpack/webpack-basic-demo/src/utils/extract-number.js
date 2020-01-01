export const extractNumber = (str) => {
  return str.match(/\d+/gi).join('');
};
