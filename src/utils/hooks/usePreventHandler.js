import { useCallback } from 'react';

const usePreventHandler = (callback, deps) => {
  return useCallback((e, ...args) => {
    e.preventDefault();
    callback(e, ...args);
  }, deps);
}

export default usePreventHandler;