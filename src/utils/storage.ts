/** Getter of a localStorage item, as parsed JSON */
const getItem = <T>(key: string, defaultValue: unknown = null): T => {
  let result;
  try {
    result = JSON.parse(localStorage.getItem(key) as string) || defaultValue;
  } catch (error) {
    console.error(error);
    result = defaultValue;
  }
  return result;
};

const setItem = (key: string, data: any): void => {
  void localStorage.setItem(key, JSON.stringify(data));
};

const storage = {
  getItem,
  setItem,
};

export default storage;
