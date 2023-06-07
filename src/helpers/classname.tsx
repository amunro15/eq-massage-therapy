export const classname = (baseClassNames: string, conditionalValues: Record<string, boolean>) => {
  const appendedValues = Object.keys(conditionalValues).filter((key) => !!conditionalValues[key]);
  const result = appendedValues.reduce((acc, curr) => acc + ' ' + curr, baseClassNames);

  return result;
};
