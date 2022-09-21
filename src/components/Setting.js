import React, { useState } from "react";
import { excludeInterval } from "../chartData";
import { ecgChartOpt } from "../chartData";
import { xaxisDataList } from "../chartData";

function Setting({
  stateChartOpt,
  setStateChartOpt,
  xaxisValue,
  setXaxisValue,
}) {
  const { initialVal, finalVal } = xaxisValue;
  const [message, setMessage] = useState("");

  // initiate new list of xaxis using excludeInterval function
  const newXaxisDataList = excludeInterval(
    stateChartOpt.options.xaxis.categories,
    initialVal,
    finalVal
  );

  //   handle change function
  const handleChange = (e) => {
    setXaxisValue({ ...xaxisValue, [e.target.name]: e.target.value });
  };

  //   handle click function to apply the new list xaxis values

  const handleClick = (e) => {
    e.preventDefault();
    console.log(newXaxisDataList);
    if (initialVal > 0 && finalVal > 0) {
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
    } else {
      setMessage("first you have to fill the form ");
      setTimeout(() => {
        setMessage("");
      }, 2000);
    }

    setXaxisValue({ initialVal: "", finalVal: "" });
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
  };

  return (
    <div className="setting_container">
      <label className="input_control">
        <span>insert initial x-axis value </span>
        <input
          type="number"
          value={initialVal}
          name="initialVal"
          onChange={handleChange}
        />
      </label>

      <label className="input_control">
        <span>insert final x-axis value </span>
        <input
          type="number"
          value={finalVal}
          name="finalVal"
          onChange={handleChange}
        />
      </label>

      <button className="btn" onClick={handleClick}>
        see the change of the chart
      </button>

      <span>
        <strong>Note</strong>: these two values used to exclude all xaxis
        numbers which is found b/n them{" "}
      </span>

      <button className="btn_ref" onClick={handleRefresh}>
        refersh the chart
      </button>

      <span className="msg">{message}</span>
    </div>
  );
}

export default Setting;
