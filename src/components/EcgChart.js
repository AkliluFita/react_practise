import React from "react";
import Chart from "react-apexcharts";
// import { excludeInterval } from "../chartData";

function EcgChart({ stateChartOpt }) {
  // const { initialVal, finalVal } = xaxisValue;
  // // console.log(stateChartOpt.options.xaxis.categories);
  // // console.log(
  // //   excludeInterval(stateChartOpt.options.xaxis.categories, 10000, 50000)
  // // );

  // const newXaxisDataList = excludeInterval(
  //   stateChartOpt.options.xaxis.categories,
  //   initialVal,
  //   finalVal
  // );

  return (
    <div>
      <Chart
        options={stateChartOpt.options}
        series={stateChartOpt.series}
        type="line" // by default it is line
        width="1200"
        height="250"
      />

      <button>
        <a
          className="download_link"
          href="https://github.com/AkliluFita/react_practise.git"
          rel="noopener noreferrer"
          target="_blank"
        >
          Look at myb Github
        </a>
      </button>
    </div>
  );
}

export default EcgChart;
