import * as React from "react";
import * as ReactDOM from "react-dom";
import axios from "axios";

import { LoginWithAction } from "./containers/LoginWithAction";
import { App } from "./route";


declare var API_HOST: string;
const host = API_HOST;

const rootElement = document.getElementById("root");

const client = axios.create({
  withCredentials: true,
  baseURL: host
});

async function renderArticleManage(state?: string, code?: string) {
  if(state && code) {
    const authResponse = await client.post("/login/oauth/google", {
      state,
      code
    });
    localStorage.setItem('manage-token', authResponse.data.token)
  }

  ReactDOM.render(<App apiClient={client}/>, rootElement);
}

(async () => {
  if (rootElement === undefined) {
    throw new Error("rootがありません");
  } else {
    client.defaults.headers.common["Authorization"] = `Bearer ${
      localStorage.getItem('manage-token')
    }`;
    const setupResponse = await client.get("/login/check").catch(err => Promise.resolve(undefined))
    const state = new URL(location.href).searchParams.get("state");
    const code = new URL(location.href).searchParams.get("code");
    const isRequireLogin = (!state && !code) && !setupResponse || setupResponse!.status !== 200
    if (isRequireLogin) {
      ReactDOM.render(<LoginWithAction />, rootElement);
    } else if(state && code) {
      renderArticleManage(state, code)
    } else {
      renderArticleManage()
    }
  }
})()
