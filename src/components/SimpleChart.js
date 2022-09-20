import React, { useState } from "react";
import { chartOptions } from "../chartData";
import Chart from "react-apexcharts";

function SimpleChart() {
  const [stateChartOpt, setStateChartOpt] = useState(chartOptions);
  return (
    <div>
      <Chart
        options={stateChartOpt.chart}
        series={stateChartOpt.series}
        // series={state.chartOptions.series}
        type="line" // bt default it is line
        width="500"
      />
    </div>
  );
}

export default SimpleChart;
