import * as d3 from 'd3';
import data from './CVChartData';

class CVChart {

  constructor(selector) {
    this.selector = selector;
  }

  render() {
    const svg = d3.select(this.selector);

    const margin = { top: 2, right: 4, bottom: 2, left: 44 };
    const width = +svg.attr('width') - margin.left - margin.right;
    const height = +svg.attr('height') - margin.top - margin.bottom;

    const now = +new Date();

    const yValues = data.cvChartData.languages.map(d => d.name)
      .filter((d, i, self) => i === self.indexOf(d));

    const x = d3.scaleLinear()
      .rangeRound([0, width])
      .domain([+new Date('2008-07'), now]);

    const y = d3.scaleBand()
      .rangeRound([0, height - 48])
      .domain(yValues)
      .padding(0.2);

    const g = svg.append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    const svgDefs = svg.append('svg:defs');

    svgDefs.append('svg:pattern')
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

    svgDefs.append('svg:mask')
      .attr('id', 'mask-stripe')
      .append('svg:rect')
      .attr('x', 0)
      .attr('y', 0)
      .attr('width', '100%')
      .attr('height', '100%')
      .attr('fill', 'url(#pattern-stripe)');

    const getTs = date => (date === Infinity ? now : +new Date(`20${date}`));

    g.append('svg:g')
      .attr('id', 'bars')
      .attr('transform', 'translate(0,16)')
      .selectAll('rect')
      .data(data.cvChartData.languages)
      .enter()
      .append('rect')
      .attr('x', d => x(getTs(d.span[0])))
      .attr('y', d => y(d.name))
      .attr('width', d => x(getTs(d.span[1])) - x(getTs(d.span[0])))
      .attr('height', d => (d.type === 'personal' ? y.bandwidth() / 3 : y.bandwidth()))
      .attr('transform', d => (d.type === 'personal' ? `translate(0,${(y.bandwidth() / 3)})` : ''))
      .attr('mask', d => (d.type === 'secondary' ? 'url(#mask-stripe)' : ''))
      .style('fill', d => d.fill);

    g.append('svg:g')
      .attr('id', 'yAxis')
      .attr('transform', 'translate(0,16)')
      .selectAll('text')
      .data(data.yAxisValues)
      .enter()
      .append('text')
      .attr('x', d => (x(getTs(d.pos)) - 4))
      .attr('y', d => y(d.name))
      .attr('dy', ((y.bandwidth() / 2) + 1))
      .attr('text-anchor', 'end')
      .attr('alignment-baseline', 'middle')
      .attr('fill', '#606060')
      .style('font-size', '11px')
      .text(d => d.name);

    const xAxis = g.append('svg:g')
      .attr('id', 'xAxis')
      .attr('transform', `translate(0,${(height - 30)})`);

    xAxis.selectAll('rect')
      .data(data.xAxisValues)
      .enter()
      .append('rect')
      .attr('x', d => x(getTs(d.span[0])))
      .attr('y', 0)
      .attr('width', d => (x(getTs(d.span[1])) - x(getTs(d.span[0])) - 1))
      .attr('height', 18)
      .style('fill', (d, i) => (i % 2 === 0 ? '#303030' : '#4a4a4a'));

    xAxis.selectAll('text')
      .data(data.xAxisValues)
      .enter()
      .append('text')
      .attr('x', d => ((x(getTs(d.span[1])) + x(getTs(d.span[0]))) / 2))
      .attr('y', 0)
      .attr('dy', 2)
      .attr('text-anchor', 'middle')
      .attr('alignment-baseline', 'middle')
      .attr('fill', '#e0e0e0')
      .style('font-size', '11px')
      .attr('transform', 'translate(0,8)')
      .text(d => d.name);

    xAxis.append('svg:g')
      .selectAll('text')
      .data(data.yearTicks)
      .enter()
      .append('text')
      .attr('x', d => x(getTs(d)))
      .attr('y', 0)
      .attr('dy', 2)
      .attr('text-anchor', 'middle')
      .attr('alignment-baseline', 'middle')
      .attr('fill', '#a0a0a0')
      .style('font-size', '10px')
      .attr('transform', 'translate(0,24)')
      .text(d => `'${d.split('-')[0]}`);

    const legend = g.append('svg:g')
      .attr('id', 'legend');

    const legendPrimary = legend.append('svg:g');

    legendPrimary.append('rect')
      .attr('x', 0)
      .attr('y', 0)
      .attr('width', 20)
      .attr('height', y.bandwidth())
      .attr('fill', '#808080');

    legendPrimary.append('text')
      .attr('x', 24)
      .attr('y', 0)
      .attr('dy', ((y.bandwidth() / 2) + 1))
      .attr('alignment-baseline', 'middle')
      .style('font-size', '11px')
      .text('Primary at work');

    const legendSecondary = legend.append('svg:g')
      .attr('transform', 'translate(120,0)');

    legendSecondary.append('rect')
      .attr('x', 0)
      .attr('y', 0)
      .attr('width', 20)
      .attr('height', y.bandwidth())
      .attr('mask', 'url(#mask-stripe)')
      .attr('fill', '#808080');

    legendSecondary.append('text')
      .attr('x', 24)
      .attr('y', 0)
      .attr('dy', ((y.bandwidth() / 2) + 1))
      .attr('alignment-baseline', 'middle')
      .style('font-size', '11px')
      .text('Secondary at work');

    const legendPersonal = legend.append('svg:g')
      .attr('transform', 'translate(252,0)');

    legendPersonal.append('rect')
      .attr('x', 0)
      .attr('y', 0)
      .attr('width', 20)
      .attr('height', y.bandwidth() / 3)
      .attr('transform', `translate(0,${(y.bandwidth() / 3)})`)
      .attr('fill', '#808080');

    legendPersonal.append('text')
      .attr('x', 24)
      .attr('y', 0)
      .attr('dy', ((y.bandwidth() / 2) + 1))
      .attr('alignment-baseline', 'middle')
      .style('font-size', '11px')
      .text('Personal projects');
  }
}

export default CVChart;
