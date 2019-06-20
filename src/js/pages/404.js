import {
  select as d3select,
  mouse as d3mouse,
} from 'd3';

const fit = ($overlay, $mask) => {
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

const Page404 = () => {
  const $overlay = d3select('svg');
  const $mask = $overlay.select('mask rect');
  const $canvas = $overlay.select('rect.canvas');

  fit($overlay, $mask);

  $canvas.transition()
    .duration(1200)
    .attr('opacity', 1);

  const foonction = () => {
    $mask.attr('fill', 'url(#fadeGrad)');
    document.removeEventListener('mousemove', foonction);
  };

  document.addEventListener('mousemove', foonction);

  $overlay.on('mousemove', (a, b, node) => {
    const coords = d3mouse(node[0]);
    $mask.attr('transform', `translate(${coords[0]},${coords[1]})`);
  });

  window.addEventListener('resize', fit.bind(this, $overlay, $mask));
  window.addEventListener('orientationchange', fit.bind(this, $overlay, $mask));
};

export default Page404;
