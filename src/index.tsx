import * as React from "react";
import * as ReactDOM from "react-dom";

import { LoginWithAction } from "./containers/LoginWithAction";
import { ArticleManage } from "./components/pages/ArticleManage";

const rootElement = document.getElementById("root");

if (rootElement === undefined) {
  throw new Error("rootがありません");
} else {
  const state = new URL(location.href).searchParams.get("state");
  if (state) {
    ReactDOM.render(<ArticleManage />, rootElement);
  } else {
    ReactDOM.render(<LoginWithAction />, rootElement);
  }
}
