import React, { useState } from "react";
import { ecgChartOpt } from "../chartData";
import Chart from "react-apexcharts";

function EcgChart() {
  const [stateChartOpt, setStateChartOpt] = useState(ecgChartOpt);
  return (
    <div>
      <Chart
        options={stateChartOpt.options}
        series={stateChartOpt.series}
        type="line" // by default it is line
        width="1200"
        height="250"
      />
    </div>
  );
}

export default EcgChart;
