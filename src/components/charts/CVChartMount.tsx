import React, { useLayoutEffect, useRef } from 'react';
import type { FC } from 'react';
import CVChart from './CVChart';

const CVChartMount: FC = () => {
  const chartRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (chartRef.current) {
      const chart = new CVChart(chartRef.current);
      chart.draw();
    }
  }, [chartRef]);

  return (
    <div id="cv-chart" className="cv-chart" ref={chartRef}>
      <svg />
    </div>
  );
};

export default CVChartMount;
