import { useEffect, useRef } from 'react';

export const useClickOutside = (
  handler: () => void,
  isEnabled: boolean = true
) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isEnabled) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        handler();
      }
    };

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handler();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscapeKey);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [handler, isEnabled]);

  return ref;
};
