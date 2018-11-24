import * as React from "react";
import * as ReactDOM from "react-dom";
import axios from "axios";
import { LoginWithAction } from "./containers/LoginWithAction";
import { App } from "./route";
const host = API_HOST;
const rootElement = document.getElementById("root");
const client = axios.create({
    withCredentials: true,
    baseURL: host
});
async function renderArticleManage(state, code) {
    if (state && code) {
        const authResponse = await client.post("/login/oauth/google", {
            state,
            code
        });
        localStorage.setItem('manage-token', authResponse.data.token);
    }
    ReactDOM.render(React.createElement(App, { apiClient: client }), rootElement);
}
(async () => {
    if (rootElement === undefined) {
        throw new Error("rootがありません");
    }
    else {
        client.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem('manage-token')}`;
        const setupResponse = await client.get("/login/check").catch(err => Promise.resolve(undefined));
        if (setupResponse) {
            client.defaults.headers["x-xsrf-token"] = setupResponse.headers["x-xsrf-token"];
        }
        const state = new URL(location.href).searchParams.get("state");
        const code = new URL(location.href).searchParams.get("code");
        const isRequireLogin = (!state && !code) && !setupResponse || setupResponse.status !== 200;
        if (isRequireLogin) {
            ReactDOM.render(React.createElement(LoginWithAction, null), rootElement);
        }
        else if (state && code) {
            renderArticleManage(state, code);
        }
        else {
            renderArticleManage();
        }
    }
})();
