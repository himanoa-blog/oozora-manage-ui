import * as React from "react";
import * as ReactDOM from "react-dom";

import { Login } from "./components/pages/login";

const rootElement = document.getElementById("root");

if (rootElement === undefined) {
  throw new Error("rootがありません");
} else {
  ReactDOM.render(<Login />, rootElement);
}
