import React, {
  ReactFragment,
  RefObject, SVGAttributes,
  useEffect,
  useRef,
  useState,
} from 'react';
import config from './config';
import helpers from './helpers';
import useMousePosition from '../../hooks/useMousePosition';
import { ILogoComponentProps } from './interfaces';
import { LogoLayoutType } from './types';

const LogoComponent: React.FC<ILogoComponentProps> = (props) => {
  const { layout: layoutProp } = props;
  const { defaultBgColor, svg } = config;

  const [bgWidth] = useState<number>(window.innerWidth);
  const [bgHeight] = useState<number>(window.innerHeight);
  const [bgDomain, setBgDomain] = useState<{ x: number, y: number }>({ x: 0, y: 0 });
  const [bgTranslation, setBgTranslation] = useState<{ x: number, y: number }>({ x: 0, y: 0 });
  const [bgGradient, setBgGradient] = useState<string>(helpers.getGradientBackground());
  const [layout] = useState<LogoLayoutType>(layoutProp ?? 'block');

  const $logo: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);

  const mousePosition = useMousePosition({ isActive: helpers.canBeAnimated() });

  useEffect(() => {
    window.addEventListener('click', updateBackground);
    window.addEventListener('touchend', updateBackground);

    return () => {
      window.removeEventListener('click', updateBackground);
      window.removeEventListener('touchend', updateBackground);
    };
  }, []);

  useEffect(() => {
    if ($logo.current) {
      calculateBgDomain($logo.current);
    }
  }, [$logo]);

  useEffect(() => {
    setBgTranslation(getBackgroundTranslation(mousePosition));
  }, [mousePosition]);

  const calculateBgDomain: ($logoEl: HTMLDivElement) => void = ($logoEl) => {
    const logoBoundingRect = $logoEl.getBoundingClientRect();

    setBgDomain({
      x: -(bgWidth - logoBoundingRect.width),
      y: -(bgHeight - logoBoundingRect.height),
    });
  };

  const getBackgroundTranslation: (position: {x: number, y: number}) => {x: number, y: number} = (
    position,
  ) => ({ x: (position.x / bgWidth) * bgDomain.x, y: (position.y / bgHeight) * bgDomain.y });

  const updateBackground: () => void = () => {
    setBgGradient(helpers.getGradientBackground());
  };

  const renderPathTag: (pathStr: string) => ReactFragment = (
    pathStr,
  ) => <path key={pathStr.substr(0, 8)} d={pathStr} />;

  const getSvgTagAttributes: () => SVGAttributes<SVGSVGElement> = () => ({
    version: '1.1',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: `0 0 ${svg[layout].width} ${svg[layout].height}`,
    preserveAspectRatio: 'xMinYMin meet',
  });

  const renderAnimatedLogo: () => ReactFragment = () => (
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
          <clipPath id="logo-clip-path">
            {svg[layout].maskPaths.map(renderPathTag)}
          </clipPath>
        </defs>
      </svg>

    </div>
  );

  const renderSolidLogo: () => ReactFragment = () => (
    <svg
      {...getSvgTagAttributes()}
      fill={helpers.getSolidBackground()}
      style={{
        backgroundBlendMode: 'screen',
      }}
    >
      {svg[layout].maskPaths.map(renderPathTag)}
    </svg>
  );

  return (
    <>

      {helpers.canBeAnimated() && (
        <div
          style={{
            maxWidth: `${svg[layout].width}px`,
            height: `${svg[layout].height}px`,
          }}
        >
          {renderAnimatedLogo()}
        </div>
      )}

      {!helpers.canBeAnimated() && renderSolidLogo()}

    </>
  );
};

export default LogoComponent;
