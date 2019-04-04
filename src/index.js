import React from "react";
import ReactDOM from "react-dom";
import Clock from "./components/App.js";
import Button from "./components/button";

class App extends React.Component {
  render() {
    return (
      <div className="wrapper">
      <Clock />
      <Button />
      </div>
    )
  }
}



ReactDOM.render(<App />, document.getElementById("root"));