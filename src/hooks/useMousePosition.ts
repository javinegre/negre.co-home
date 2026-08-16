import { useEffect, useState } from 'react';

interface MouseCoordinates {
  x: number;
  y: number;
}

const useMousePosition = (config: { isActive: boolean }): MouseCoordinates => {
  const [position, setPosition] = useState<MouseCoordinates>({ x: 0, y: 0 });

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
  }, [config.isActive]);

  return position;
};

export default useMousePosition;
