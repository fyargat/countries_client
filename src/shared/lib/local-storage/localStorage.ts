const set = <T>(key: string, data: T) =>
  typeof window !== 'undefined' &&
  localStorage.setItem(key, JSON.stringify(data));

const get = <T>(key: string): T | null => {
  const data = typeof window !== 'undefined' && localStorage.getItem(key);

  if (!data) {
    return null;
  }

  return JSON.parse(data);
};

const clear = (key = 'false') => {
  if (key) {
    typeof window !== 'undefined' && localStorage.removeItem(key);
    return;
  }

  typeof window !== 'undefined' && localStorage.clear();
};

export { clear, get, set };
