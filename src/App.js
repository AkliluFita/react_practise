import React, { useState } from "react";
import "./App.css";
import EcgChart from "./components/EcgChart";
import Setting from "./components/Setting";
import { ecgChartOpt } from "./chartData";

function App() {
  const [stateChartOpt, setStateChartOpt] = useState(ecgChartOpt);
  const [xaxisValue, setXaxisValue] = useState({
    initialVal: "",
    finalVal: "",
  });

  return (
    <React.Fragment>
      <div className="container">
        <EcgChart stateChartOpt={stateChartOpt} />
      </div>
      <div className="setting">
        <Setting
          stateChartOpt={stateChartOpt}
          setStateChartOpt={setStateChartOpt}
          xaxisValue={xaxisValue}
          setXaxisValue={setXaxisValue}
        />
      </div>
    </React.Fragment>
  );
}

export default App;
