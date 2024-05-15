import { useEffect } from "react";

export const useKeyDown = (key: string, callback: () => void) => {
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === key) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  });
}

export default useKeyDown;