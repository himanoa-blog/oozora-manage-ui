import * as React from "react";
import axios from "axios";
import { AxiosInstance } from "axios";
import { ArticleForm, Entry } from "../molecules/ArticleForm";
import { EntryCardList } from "../molecules/EntryCardList";

declare var API_HOST: string;
const host = API_HOST;

interface Props {}
interface State {
  entries: Entry[]
}

function wait(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(() => resolve(), ms))
}
export class ArticleManage extends React.Component<Props, State> {
  public client: AxiosInstance;
  constructor(props) {
    super(props);
    this.client = axios.create({
      withCredentials: true,
      baseURL: host
    });
    this.state = {entries: []}
  }
  async publishEntry(entry: Entry) {
    console.dir(this.client)
    await this.client.post("/entries/", entry)
  }
  async componentDidMount() {
    const setupResponse = await this.client.get("/login/oauth/setup");
    this.client.defaults.headers["x-xsrf-token"] =
      setupResponse.headers["x-xsrf-token"];
    const state = new URL(location.href).searchParams.get("state");
    const code = new URL(location.href).searchParams.get("code");
    const authResponse = await this.client.post("/login/oauth/google", {
      state,
      code
    });
    this.client.defaults.headers.common["Authorization"] = `Bearer ${
      authResponse.data.token
    }`;
    console.dir(authResponse)
    const entries = (await this.client.get("/entries", { params: { limit: 100, offset: 0}})).data
    this.setState({...this.state, ...{entries}})
    console.dir(this.state)
  }
  render() {
    return (
      <div className="h-screen w-full flex flex-col">
        <EntryCardList entries={this.state.entries} onEdit={(e) => console.dir(e)} />
      {/* <ArticleForm
          className="h-full"
          onSubmit={this.publishEntry.bind(this)}
        /> */}
      </div>
    );
  }
}
