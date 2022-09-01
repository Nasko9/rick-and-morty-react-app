import { useState } from "react";

export default function useDebounce() {
  const [newTimeout, setNewTimeout] = useState<any>("");

  function debounce(func: any, wait: number) {
    clearTimeout(newTimeout);

    const timeout = setTimeout(() => {
      func();
    }, wait);

    setNewTimeout(timeout);
  }

  return debounce;
}
