export const isEmptyObject = (value: Record<string, any>) => {
  return Object.keys(value).length === 0;
};
