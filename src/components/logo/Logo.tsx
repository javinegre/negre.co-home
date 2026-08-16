import React, { useCallback, useEffect, useRef, useState } from 'react';
import type { FC, ReactElement, RefObject, SVGAttributes } from 'react';
import useMousePosition from '../../hooks/useMousePosition';
import config from './config';
import { canBeAnimated, getGradientBackground, getSolidBackground } from './helpers';
import type { LogoLayoutType } from './interfaces';

const Logo: FC = () => {
  const { defaultBgColor, svg } = config;

  const [bgWidth, setBgWidth] = useState<number>(0);
  const [bgHeight, setBgHeight] = useState<number>(0);
  const [bgDomain, setBgDomain] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [bgTranslation, setBgTranslation] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [bgGradient, setBgGradient] = useState<string>(getGradientBackground());
  const [layout, setLayout] = useState<LogoLayoutType>('block');
  const [_canBeAnimate, setCanBeAnimated] = useState<boolean>(false);

  const $logo: RefObject<HTMLDivElement | null> = useRef<HTMLDivElement>(null);

  const mousePosition = useMousePosition({ isActive: _canBeAnimate });

  useEffect(() => {
    resetDimensions();
    setCanBeAnimated(canBeAnimated());

    window.addEventListener('click', updateBackground);
    window.addEventListener('touchend', updateBackground);
    window.addEventListener('resize', resetDimensions);

    return (): void => {
      window.removeEventListener('click', updateBackground);
      window.removeEventListener('touchend', updateBackground);
      window.removeEventListener('resize', resetDimensions);
    };
  }, []);

  const calculateBgDomain = useCallback(
    ($logoEl: HTMLDivElement) => {
      const logoBoundingRect = $logoEl.getBoundingClientRect();

      setBgDomain({
        x: -(bgWidth - logoBoundingRect.width),
        y: -(bgHeight - logoBoundingRect.height),
      });
    },
    [setBgDomain, bgWidth, bgHeight],
  );

  const getBackgroundTranslation = useCallback(
    (position: { x: number; y: number }) => ({
      x: (position.x / bgWidth) * bgDomain.x,
      y: (position.y / bgHeight) * bgDomain.y,
    }),
    [bgWidth, bgHeight, bgDomain],
  );

  useEffect(() => {
    if ($logo.current) {
      calculateBgDomain($logo.current);
    }
  }, [$logo, calculateBgDomain]);

  useEffect(() => {
    setBgTranslation(getBackgroundTranslation(mousePosition));
  }, [setBgTranslation, getBackgroundTranslation, mousePosition]);

  const resetDimensions = () => {
    const mBreakpoint = 768;
    const nextLayout: LogoLayoutType = window.innerWidth <= mBreakpoint ? 'flat' : 'block';

    setLayout(nextLayout);
    setBgWidth(window.innerWidth);
    setBgHeight(window.innerHeight);
  };

  const updateBackground: () => void = () => {
    setBgGradient(getGradientBackground());
  };

  const renderPathTag = (pathStr: string): ReactElement => (
    <path key={pathStr.slice(0, 8)} d={pathStr} />
  );

  const getSvgTagAttributes: () => SVGAttributes<SVGSVGElement> = () => ({
    version: '1.1',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: `0 0 ${svg[layout].width} ${svg[layout].height}`,
    preserveAspectRatio: 'xMinYMin meet',
  });

  const renderAnimatedLogo = (): ReactElement => (
    <div
      ref={$logo}
      style={{
        position: 'relative',
        display: 'inline-block',
        width: '100%',
        paddingBottom: '100%',
        verticalAlign: 'middle',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          width: `${svg[layout].width}px`,
          height: `${svg[layout].height}px`,
          clipPath: 'url(#logo-clip-path)',
        }}
      >
        <div
          style={{
            width: `${bgWidth}px`,
            height: `${bgHeight}px`,
            background: bgGradient,
            backgroundBlendMode: 'screen',
            transform: `translate(${bgTranslation.x}px, ${bgTranslation.y}px)`,
          }}
        />
      </div>

      <svg
        {...getSvgTagAttributes()}
        fill={defaultBgColor}
        style={{
          position: 'absolute',
          display: 'inline-block',
          top: 0,
          left: 0,
        }}
      >
        <defs>
          <clipPath id="logo-clip-path">{svg[layout].maskPaths.map(renderPathTag)}</clipPath>
        </defs>
      </svg>
    </div>
  );

  const renderSolidLogo = (): ReactElement => (
    <svg
      {...getSvgTagAttributes()}
      fill={getSolidBackground()}
      style={{
        backgroundBlendMode: 'screen',
      }}
    >
      {svg[layout].maskPaths.map(renderPathTag)}
    </svg>
  );

  return (
    <>
      {_canBeAnimate ? (
        <div
          style={{
            maxWidth: `${svg[layout].width}px`,
            height: `${svg[layout].height}px`,
          }}
        >
          {renderAnimatedLogo()}
        </div>
      ) : (
        renderSolidLogo()
      )}
    </>
  );
};

export default Logo;
