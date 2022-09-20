import { yaxisData } from "./yaxisData";
// simple chart title ///////////////////////////////////////
export const chartOptions = {
  chart: {
    height: 450,
    width: "100%",
    type: "bar",
    background: "#f4f4f4",
    foreColor: "#333",
  },
  plotOptions: {
    bar: {
      horizontal: false,
    },
  },
  series: [
    {
      name: "Population",
      data: [
        8550405, 3971883, 2720546, 2296224, 1567442, 1563025, 1469845, 1394928,
        1300092, 1026908,
      ],
    },
  ],
  xaxis: {
    categories: [
      "New York",
      "Los Angeles",
      "Chicago",
      "Houston",
      "Philadelphia",
      "Phoenix",
      "San Antonio",
      "San Diego",
      "Dallas",
      "San Jose",
    ],
  },
  fill: {
    colors: ["#F44336"],
  },
  dataLabels: {
    enabled: false,
  },

  title: {
    text: "Largest US Cities By Population",
    align: "center",
    margin: 20,
    offsetY: 20,
    style: {
      fontSize: "25px",
    },
  },
};

// ECG chart /////////////////////////////////////////////////

// function to display xaxis nums from  4 to 3982 with 117 steps
const start = 4;
const end = 116800;
const step = 117;
const arrayLength = Math.floor((end - start) / step) + 1;
const range = [...Array(arrayLength).keys()].map((x) => x * step + start);
console.log(range);

// function to display yaxis data up to 1000
function toPlainString(num) {
  return ("" + +num).replace(
    /(-?)(\d*)\.?(\d*)e([+-]\d+)/,
    function (a, b, c, d, e) {
      return e < 0
        ? b + "0." + Array(1 - e - c.length).join(0) + c + d
        : b + c + d + Array(e - d.length + 1).join(0);
    }
  );
}

const yaxisDataList = yaxisData.map((num) => toPlainString(num));
console.log(yaxisDataList);

// chart prop
export const ecgChartOpt = {
  options: {
    chart: {
      height: 450,
      width: "100%",
      type: "line",
      background: "#f4f4f4",
      foreColor: "#333",
    },
    xaxis: {
      categories: range,
    },
    title: {
      text: "ECG Chart",
      align: "center",
      margin: 10,
      offsetX: 0,
      offsetY: 0,
      floating: false,
      style: {
        fontSize: "20px",
        fontWeight: "bold",
        fontFamily: undefined,
        color: "#263238",
      },
    },
  },

  series: [
    {
      name: "ECG Chart",
      data: yaxisDataList,
    },
  ],
};
