import * as React from "react";
import axios from "axios";
import { AxiosInstance } from "axios";
import { ArticleForm, Entry } from "../molecules/ArticleForm";
import { EntryCardList } from "../molecules/EntryCardList";

declare var API_HOST: string;
const host = API_HOST;

interface Props {
  apiClient: AxiosInstance
}
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
    await this.props.apiClient.post("/entries/", entry)
  }
  async componentDidMount() {
    const entries = (await this.props.apiClient.get("/entries", { params: { limit: 100, offset: 0}})).data
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
