import * as React from "react";
import * as ReactDOM from "react-dom";

const rootElement = document.getElementById("root");

if (rootElement === undefined) {
  throw new Error("rootがありません");
} else {
  ReactDOM.render(<div>HELLO</div>, rootElement);
}
