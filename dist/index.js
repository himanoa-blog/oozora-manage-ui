import React from "react";
import ReactDOM from "react-dom";
const rootElement = document.getElementById("root");
if (rootElement === undefined) {
    throw new Error("rootがありません");
}
else {
    ReactDOM.render(React.createElement("div", null, "HELLO"), rootElement);
}
