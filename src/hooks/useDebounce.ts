import { useState } from "react";

export default function useDebounce() {
  const [newTimeout, setNewTimeout] = useState<NodeJS.Timeout>();

  function debounce(func: () => void, wait: number) {
    clearTimeout(newTimeout);

    const timeout = setTimeout(() => {
      func();
    }, wait);

    setNewTimeout(timeout);
  }

  return debounce;
}
