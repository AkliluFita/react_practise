import { yaxisData } from "./yaxisData";

// ECG chart /////////////////////////////////////////////////

// function one to display xaxis nums from  4 to 3982 with 117 steps
const start = 4;
const end = 116800;
const step = 117;
const arrayLength = Math.floor((end - start) / step) + 1;
export const xaxisDataList = [...Array(arrayLength).keys()].map(
  (x) => x * step + start
);
console.log(xaxisDataList);

// function two to display xaxis nums from  4 to 3982 with 117 steps
// function range(start, end) {
//   return Array(end - start + 1)
//     .fill()
//     .map((_, idx) => start + idx);
// }
// export const xaxisDataList = range(4, 3982); //list 4 up to 3982
// console.log(xaxisDataList);

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

// function to exclude b/n two given numbers//////////
export function excludeInterval(nums, a, b) {
  const excludeNums = nums.filter((n) => n >= a && n <= b); //exclude numbers
  return nums.filter((n) => !excludeNums.includes(n)); //then includes numbers
}

// const newXaxisDataList = excludeInterval(xaxisDataList, 50, 51);
// console.log(newXaxisDataList);

// chart prop
export const ecgChartOpt = {
  options: {
    chart: {
      height: 450,
      width: "100%",
      type: "line",
      background: "#f4f4f4",
      foreColor: "#333",
      toolbar: {
        show: true,
      },
    },
    xaxis: {
      types: "numeric",
      categories: xaxisDataList,
      tickAmount: 30,
      // tickPlacement: "on",
      min: 4,
      max: 1003,
      // range: 35,
      labels: {
        show: true,
        rotate: -45,
        rotateAlways: false,
        hideOverlappingLabels: true,
        showDuplicates: false,
        trim: false,
        minHeight: 20,
        maxHeight: 120,
        style: {
          colors: [],
          fontSize: "12px",
          fontFamily: "Helvetica, Arial, sans-serif",
          fontWeight: 400,
          cssClass: "apexcharts-xaxis-label",
        },
      },
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

    grid: {
      show: true,
      borderColor: "#90A4AE",
      strokeDashArray: 0,
      position: "back",
      xaxis: {
        lines: {
          show: true,
        },
      },
      yaxis: {
        lines: {
          show: true,
        },
      },
      row: {
        colors: "black",
        opacity: 0.5,
      },
      column: {
        colors: "black",
        opacity: 0.5,
      },
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
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
