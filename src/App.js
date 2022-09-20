import React from "react";
import "./App.css";
// import SimpleChart from "./components/SimpleChart";
import EcgChart from "./components/EcgChart";

function App() {
  return (
    <React.Fragment>
      {/* <div className="container">
        <SimpleChart />
      </div> */}
      <div className="container">
        <EcgChart />
      </div>
    </React.Fragment>
  );
}

export default App;
