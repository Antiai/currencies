const joinValues = (listOfValues: Array<any>, separator: string = '/'): string => listOfValues.join(separator);

const split = (source: string, separator: string = '/'): Array<string> => (source || '').split(separator);

const reverse = (source: string, separator: string = '/'): string =>
  (source || '').split(separator).reverse().join(separator);

const stringUtils = {
  joinValues,
  split,
  reverse,
};

export default stringUtils;