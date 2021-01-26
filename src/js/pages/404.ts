import { select as d3select } from 'd3';
import { D3ElementSelectionType } from '../common/types';

const fit: (
  $overlay: D3ElementSelectionType,
  $mask: D3ElementSelectionType,
) => void = ($overlay, $mask) => {
  const wWidth = window.innerWidth;
  const wHeight = window.innerHeight;
  const maxDim = wWidth > wHeight ? wWidth : wHeight;

  $overlay.attr('width', wWidth);
  $overlay.attr('height', wHeight);

  $mask.attr('x', maxDim * -1);
  $mask.attr('y', maxDim * -1);
  $mask.attr('width', maxDim * 2);
  $mask.attr('height', maxDim * 2);
};

const Page404: () => void = () => {
  const $overlay: D3ElementSelectionType = d3select('svg');
  const $mask: D3ElementSelectionType = $overlay.select('mask rect');
  const $canvas: D3ElementSelectionType = $overlay.select('rect.canvas');

  fit($overlay, $mask);

  $canvas.transition().duration(1200).attr('opacity', 1);

  const onInitialMouseMove: () => void = () => {
    $mask.attr('fill', 'url(#fadeGrad)');
    document.removeEventListener('mousemove', onInitialMouseMove);
  };

  document.addEventListener('mousemove', onInitialMouseMove);

  $overlay.on('mousemove', (event) => {
    $mask.attr('transform', `translate(${event.offsetX},${event.offsetY})`);
  });

  window.addEventListener('resize', fit.bind(this, $overlay, $mask));
  window.addEventListener('orientationchange', fit.bind(this, $overlay, $mask));
};

export default Page404;
