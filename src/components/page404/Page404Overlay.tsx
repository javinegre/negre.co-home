import React, { useEffect, useRef, useState } from 'react';
import type { FC } from 'react';

const Page404Overlay: FC = () => {
  const $svg = useRef<SVGSVGElement>(null);
  const $mask = useRef<SVGRectElement>(null);
  const [revealed, setRevealed] = useState(false);
  const [maskFill, setMaskFill] = useState('url(#fadeGradHidden)');

  useEffect(() => {
    const fit = (): void => {
      const wWidth = window.innerWidth;
      const wHeight = window.innerHeight;
      const maxDim = wWidth > wHeight ? wWidth : wHeight;

      if ($svg.current) {
        $svg.current.setAttribute('width', `${wWidth}`);
        $svg.current.setAttribute('height', `${wHeight}`);
      }

      if ($mask.current) {
        $mask.current.setAttribute('x', `${maxDim * -1}`);
        $mask.current.setAttribute('y', `${maxDim * -1}`);
        $mask.current.setAttribute('width', `${maxDim * 2}`);
        $mask.current.setAttribute('height', `${maxDim * 2}`);
      }
    };

    fit();
    const revealFrame = requestAnimationFrame(() => setRevealed(true));

    const onInitialMouseMove = (): void => {
      setMaskFill('url(#fadeGrad)');
      document.removeEventListener('mousemove', onInitialMouseMove);
    };

    document.addEventListener('mousemove', onInitialMouseMove);

    window.addEventListener('resize', fit);
    window.addEventListener('orientationchange', fit);

    return (): void => {
      cancelAnimationFrame(revealFrame);
      document.removeEventListener('mousemove', onInitialMouseMove);
      window.removeEventListener('resize', fit);
      window.removeEventListener('orientationchange', fit);
    };
  }, []);

  const onOverlayMouseMove: React.MouseEventHandler<SVGSVGElement> = (event) => {
    $mask.current?.setAttribute(
      'transform',
      `translate(${event.nativeEvent.offsetX},${event.nativeEvent.offsetY})`,
    );
  };

  return (
    <svg ref={$svg} width="1440" height="800" onMouseMove={onOverlayMouseMove}>
      <defs>
        <radialGradient id="fadeGradHidden">
          <stop offset="0" stopColor="white" stopOpacity="1" />
          <stop offset="100%" stopColor="white" stopOpacity="1" />
        </radialGradient>
        <radialGradient id="fadeGrad">
          <stop offset="0" stopColor="white" stopOpacity=".6" />
          <stop offset="1%" stopColor="white" stopOpacity="0.65" />
          <stop offset="3%" stopColor="white" stopOpacity="0.7" />
          <stop offset="9%" stopColor="white" stopOpacity="0.95" />
          <stop offset="15%" stopColor="white" stopOpacity="0.97" />
          <stop offset="22%" stopColor="white" stopOpacity="0.99" />
          <stop offset="28%" stopColor="white" stopOpacity="1" />
        </radialGradient>
        <mask id="fade">
          <rect ref={$mask} x="-1440" y="-1440" width="2880" height="2880" fill={maskFill} />
        </mask>
      </defs>

      <rect
        className="canvas"
        x="0"
        y="0"
        width="100%"
        height="100%"
        mask="url(#fade)"
        fill="#202020"
        opacity={revealed ? 1 : 0.5}
        style={{ transition: 'opacity 1200ms' }}
      />
    </svg>
  );
};

export default Page404Overlay;
