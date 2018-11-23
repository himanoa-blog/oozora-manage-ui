import * as React from "react";
import { AxiosInstance } from "axios";
import { ArticleForm, Entry } from "../molecules/ArticleForm";
import { EntryCardList } from "../molecules/EntryCardList";
import { ArticleManageNavbar } from "../organisms/ArticleManageNavbar"

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
  constructor(props) {
    super(props);
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
      <div className="h-screen w-full flex flex-col bg-grey-lightest">
        <ArticleManageNavbar />
        <EntryCardList entries={this.state.entries} onEdit={(e) => console.dir(e)} />
      </div>
    );
  }
}
