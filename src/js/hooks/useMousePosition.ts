import { useEffect, useState } from 'react';

const useMousePosition: (config: { isActive: boolean }) => { x: number, y: number } = (config) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const setFromEvent = (ev: MouseEvent) => setPosition({ x: ev.clientX, y: ev.clientY });

    if (config.isActive) {
      window.addEventListener('mousemove', setFromEvent);
    }

    return () => {
      if (config.isActive) {
        window.removeEventListener('mousemove', setFromEvent);
      }
    };
  }, []);

  return position;
};

export default useMousePosition;
