import { useState } from 'react';

export const useArray = <T>(defaultValue: T[]) => {
  const [array, setArray] = useState(defaultValue);

  const push = (element: T) => {
    setArray((a) => [...a, element]);
  };

  const filter = (callback: (item: T) => boolean) => {
    setArray((a) => a.filter(callback));
  };

  const update = (index: number, newElement: T) => {
    setArray((a) => [
      ...a.slice(0, index),
      newElement,
      ...a.slice(index + 1, a.length - 1),
    ]);
  };

  const remove = (index: number) => {
    setArray((a) => [
      ...a.slice(0, index),
      ...a.slice(index + 1, a.length - 1),
    ]);
  };

  const clear = () => {
    setArray([]);
  };

  return { array, set: setArray, push, filter, update, remove, clear };
};
