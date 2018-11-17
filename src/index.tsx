import * as React from "react";
import * as ReactDOM from "react-dom";

import { LoginWithAction } from "./containers/LoginWithAction";

const rootElement = document.getElementById("root");

if (rootElement === undefined) {
  throw new Error("rootがありません");
} else {
  ReactDOM.render(<LoginWithAction />, rootElement);
}
