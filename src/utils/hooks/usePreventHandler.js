import { useCallback } from 'react';

const usePreventHandler = (callback, deps) => useCallback((e, ...args) => {
  e.preventDefault();
  callback(e, ...args);
}, deps);

export default usePreventHandler;
