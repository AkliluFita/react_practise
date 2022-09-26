import React, { useEffect, useState } from "react";
import { excludeInterval } from "../chartData";
import { ecgChartOpt } from "../chartData";
import { xaxisDataList } from "../chartData";
import { dataPointValue } from "../chartData";
import { value1 } from "../chartData";
import { value2 } from "../chartData";

function Setting({
  stateChartOpt,
  setStateChartOpt,
  xaxisValue,
  setXaxisValue,
}) {
  // const { initialVal, finalVal } = xaxisValue;

  const [message, setMessage] = useState("");
  const [stateInitialVal, setStateInitialVal] = useState(value1);
  const [stateFinalVal, setStateFinalVal] = useState(value2);
  const [changeMsg, setChangeMsg] = useState(
    "click to see the initial and final value"
  );
  const [disRef, setDisRef] = useState(false);

  // useEffect
  useEffect(() => {
    const showDataPoint = () => {
      setStateInitialVal(value1);
      setStateFinalVal(value2);
      console.log(value1);
    };

    showDataPoint();
  }, [value1, value2]);

  // initiate new list of xaxis using excludeInterval function
  const newXaxisDataList = excludeInterval(
    stateChartOpt.options.xaxis.categories,
    value1,
    value2
  );

  //   handle click function to apply the new list xaxis values
  const handleClick = (e) => {
    e.preventDefault();
    console.log(newXaxisDataList);
    if (
      stateInitialVal > 0 &&
      stateFinalVal > 0 &&
      stateInitialVal !== stateFinalVal
    ) {
      setStateChartOpt({
        ...stateChartOpt,
        options: {
          ...stateChartOpt.options,
          xaxis: {
            ...stateChartOpt.options.xaxis,
            categories: newXaxisDataList,
          },
        },
      });
      console.log(stateChartOpt);
    } else {
      setMessage("please you have to select the initial and final xaixs value");
      setTimeout(() => {
        setMessage("");
      }, 2000);
    }

    setXaxisValue({ initialVal: "", finalVal: "" });

    if (value1 > 0 && value2 > 0 && value1 !== value2) {
      setChangeMsg("now see the change for the chart");
      setDisRef(true);
    }
  };

  //   handle refresh function
  const handleRefresh = () => {
    setStateChartOpt({
      ...stateChartOpt,
      options: {
        ...stateChartOpt.options,
        xaxis: {
          ...stateChartOpt.options.xaxis,
          categories: xaxisDataList,
        },
      },
    });
    console.log(xaxisDataList);

    console.log(stateChartOpt);
  };

  //check data point value
  // useEffect(() => {
  //   displayDataPoint();

  //   function displayDataPoint(params) {
  //     return console.log(
  //       ecgChartOpt.options.chart.events.dataPointSelection.selectEvent
  //     );
  //   }
  // }, [ecgChartOpt]);

  return (
    <div className="setting_container">
      <div className="textDes">
        <span> initial x-axis value </span>=<h4>{stateInitialVal}</h4>
      </div>

      <div className="textDes">
        <span> final x-axis value </span>=<h4>{stateFinalVal}</h4>
      </div>

      <button className="btn" onClick={handleClick}>
        {changeMsg}
      </button>

      {disRef && (
        <button className="btn_ref" onClick={handleRefresh}>
          refresh the chart
        </button>
      )}

      <span className="msg">{message}</span>
    </div>
  );
}

export default Setting;
