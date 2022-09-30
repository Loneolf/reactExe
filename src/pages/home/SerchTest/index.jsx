import React, { Component } from "react";
import eventBus from "utils/eventBus";
import "./index.sass";

class C extends Component {
  componentDidMount() {
    eventBus.addListener("topSearchChange", (value) =>
      console.log("aaaGetDate", value)
    );
  }
  componentWillUnmount() {
    eventBus.removeListener("topSearchChange");
  }
  render() {
    return (
      <div>
        <button
          onClick={() => {
            eventBus.emit("topSearchChange", 232323);
          }}
        >
          搜索233
        </button>
      </div>
    );
  }
}

export default C;
