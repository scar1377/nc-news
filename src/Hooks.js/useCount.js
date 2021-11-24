import { useState } from "react";

const useCount = (initialCount = 0) => {
  const [count, setCount] = useState(initialCount);

  const incCount = () => {
    setCount((currentCount) => {
      return currentCount + 1;
    });
  };
  const deCount = () => {
    setCount((currentCount) => {
      return currentCount - 1;
    });
  };
  return { count, setCount, incCount, deCount };
};

export default useCount;
