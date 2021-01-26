import {
  select as d3select,
  scaleLinear as d3scaleLinear,
  scaleBand as d3scaleBand,
} from 'd3';
import data from './CVChartData';
import { D3ElementSelectionType } from '../common/types';

class CVChart {
  selector: string;

  $container: Element | null;

  $svg: D3ElementSelectionType;

  now: number;

  constructor(selector: string) {
    this.selector = selector;

    this.$container = document.querySelector(selector);
    this.$svg = d3select(`${selector} svg`);

    this.buildDefs();

    this.now = +new Date();

    window.addEventListener('resize', this.reDraw.bind(this));
    window.addEventListener('orientationchange', this.reDraw.bind(this));
  }

  buildDefs(): void {
    const svgDefs = this.$svg.append('svg:defs');

    svgDefs
      .append('svg:pattern')
      .attr('id', 'pattern-stripe')
      .attr('width', 8)
      .attr('height', 8)
      .attr('patternUnits', 'userSpaceOnUse')
      .attr('patternTransform', 'rotate(45)')
      .append('svg:rect')
      .attr('width', 5)
      .attr('height', 8)
      .attr('transform', 'translate(0,0)')
      .attr('fill', '#FFFFFF');

    svgDefs
      .append('svg:mask')
      .attr('id', 'mask-stripe')
      .append('svg:rect')
      .attr('x', 0)
      .attr('y', 0)
      .attr('width', '100%')
      .attr('height', '100%')
      .attr('fill', 'url(#pattern-stripe)');
  }

  getTs(date: string | typeof Infinity): number {
    return date === Infinity ? this.now : +new Date(`20${date}`);
  }

  reDraw(): void {
    this.$svg.selectAll('g').remove();
    this.draw();
  }

  draw(): void {
    if (this.chartIsHidden()) {
      return;
    }

    const oWidth = this.$container?.clientWidth ?? 0;

    this.$svg.attr('width', oWidth + 44).attr('height', oWidth * 0.45);

    const margin = {
      top: 2,
      right: 0,
      bottom: 2,
      left: 44,
    };
    const width = +this.$svg.attr('width') - margin.left - margin.right;
    const height = +this.$svg.attr('height') - margin.top - margin.bottom;

    const yValues = data.cvChartData.languages
      .map((d) => d.name)
      .filter((d, i, self) => i === self.indexOf(d));

    const x = d3scaleLinear()
      .rangeRound([0, width])
      .domain([+new Date('2008-07'), this.now]);

    const y = d3scaleBand()
      .rangeRound([0, height - 48])
      .domain(yValues)
      .padding(0.2);

    const g = this.$svg
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    g.append('svg:g')
      .attr('id', 'bars')
      .attr('transform', 'translate(0,16)')
      .selectAll('rect')
      .data(data.cvChartData.languages)
      .enter()
      .append('rect')
      .attr('x', (d) => x(this.getTs(d.span[0])))
      .attr('y', (d) => y(d.name) ?? 0)
      .attr('width', (d) => x(this.getTs(d.span[1])) - x(this.getTs(d.span[0])))
      .attr('height', (d) =>
        d.type === 'personal' ? y.bandwidth() / 3 : y.bandwidth(),
      )
      .attr('transform', (d) =>
        d.type === 'personal' ? `translate(0,${y.bandwidth() / 3})` : '',
      )
      .attr('mask', (d) => (d.type === 'secondary' ? 'url(#mask-stripe)' : ''))
      .style('fill', (d) => d.fill);

    g.append('svg:g')
      .attr('id', 'yAxis')
      .attr('transform', 'translate(0,16)')
      .selectAll('text')
      .data(data.yAxisValues)
      .enter()
      .append('text')
      .attr('x', (d) => x(this.getTs(d.pos)) - 4)
      .attr('y', (d) => y(d.name) ?? 0)
      .attr('dy', y.bandwidth() / 2 + 1)
      .attr('text-anchor', 'end')
      .attr('alignment-baseline', 'middle')
      .attr('fill', '#606060')
      .style('font-size', '11px')
      .text((d) => d.name);

    const xAxis = g
      .append('svg:g')
      .attr('id', 'xAxis')
      .attr('transform', `translate(0,${height - 30})`);

    xAxis
      .selectAll('rect')
      .data(data.xAxisValues)
      .enter()
      .append('rect')
      .attr('x', (d) => x(this.getTs(d.span[0])))
      .attr('y', 0)
      .attr(
        'width',
        (d) => x(this.getTs(d.span[1])) - x(this.getTs(d.span[0])) - 1,
      )
      .attr('height', 18)
      .style('fill', (d, i) => (i % 2 === 0 ? '#303030' : '#4a4a4a'));

    xAxis
      .selectAll('text')
      .data(data.xAxisValues)
      .enter()
      .append('text')
      .attr(
        'x',
        (d) => (x(this.getTs(d.span[1])) + x(this.getTs(d.span[0]))) / 2,
      )
      .attr('y', 0)
      .attr('dy', 2)
      .attr('text-anchor', 'middle')
      .attr('alignment-baseline', 'middle')
      .attr('fill', '#e0e0e0')
      .style('font-size', '11px')
      .attr('transform', 'translate(0,8)')
      .text((d) => d.name);

    xAxis
      .append('svg:g')
      .selectAll('text')
      .data(data.yearTicks)
      .enter()
      .append('text')
      .attr('x', (d) => x(this.getTs(d)))
      .attr('y', 0)
      .attr('dy', 2)
      .attr('text-anchor', 'middle')
      .attr('alignment-baseline', 'middle')
      .attr('fill', '#a0a0a0')
      .style('font-size', '10px')
      .attr('transform', 'translate(0,24)')
      .text((d) => `'${d.split('-')[0]}`);

    const legend = g.append('svg:g').attr('id', 'legend');

    const legendPrimary = legend.append('svg:g');

    legendPrimary
      .append('rect')
      .attr('x', 0)
      .attr('y', 0)
      .attr('width', 20)
      .attr('height', y.bandwidth())
      .attr('fill', '#808080');

    legendPrimary
      .append('text')
      .attr('x', 24)
      .attr('y', 0)
      .attr('dy', y.bandwidth() / 2 + 1)
      .attr('alignment-baseline', 'middle')
      .attr('stroke', '#b0b0b0')
      .style('font-size', '11px')
      .text('Primary at work');

    const legendSecondary = legend
      .append('svg:g')
      .attr('transform', 'translate(120,0)');

    legendSecondary
      .append('rect')
      .attr('x', 0)
      .attr('y', 0)
      .attr('width', 20)
      .attr('height', y.bandwidth())
      .attr('mask', 'url(#mask-stripe)')
      .attr('fill', '#808080');

    legendSecondary
      .append('text')
      .attr('x', 24)
      .attr('y', 0)
      .attr('dy', y.bandwidth() / 2 + 1)
      .attr('alignment-baseline', 'middle')
      .attr('stroke', '#b0b0b0')
      .style('font-size', '11px')
      .text('Secondary at work');

    const legendPersonal = legend
      .append('svg:g')
      .attr('transform', 'translate(252,0)');

    legendPersonal
      .append('rect')
      .attr('x', 0)
      .attr('y', 0)
      .attr('width', 20)
      .attr('height', y.bandwidth() / 3)
      .attr('transform', `translate(0,${y.bandwidth() / 3})`)
      .attr('fill', '#808080');

    legendPersonal
      .append('text')
      .attr('x', 24)
      .attr('y', 0)
      .attr('dy', y.bandwidth() / 2 + 1)
      .attr('alignment-baseline', 'middle')
      .attr('stroke', '#b0b0b0')
      .style('font-size', '11px')
      .text('Personal projects');
  }

  chartIsHidden(): boolean {
    return this.$container
      ? window.getComputedStyle(this.$container).getPropertyValue('display') ===
          'none'
      : true;
  }
}

export default CVChart;
