import { useEffect } from 'react';

function useConditionalUpdate<T>(data: T | undefined | null, callback: (data: T) => void) {
  useEffect(() => {
    if (data) {
      callback(data);
    }
  }, [data, callback]);
}

export default useConditionalUpdate;
