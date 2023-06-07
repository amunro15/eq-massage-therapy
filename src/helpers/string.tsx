export const formatToSentenceCase = (value: string) => {
  const removeHyphen = value.replace(/-/g, ' ');
  return removeHyphen.charAt(0).toUpperCase() + removeHyphen.slice(1).toLowerCase();
};
