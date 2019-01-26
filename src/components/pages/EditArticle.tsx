import * as React from "react";
import { withRouter, RouteComponentProps } from "react-router";
import { AxiosInstance } from "axios";

import { ErrorNotification } from "../atoms/ErrorNotification";
import { ArticleForm, Entry } from "../molecules/ArticleForm";
import { NewArticleNavbar } from "../organisms/NewArticleNavbar";

interface Params {
  id: string;
}
interface Props extends RouteComponentProps<Params> {
  apiClient: AxiosInstance;
}

interface State {
  title: string;
  body: string;
  error: string | null;
}

class EditArticleC extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      error: ""
    };
  }
  async componentWillMount() {
    const id = this.props.match.params.id;
    const response = await this.props.apiClient.get(`/entries/${id}`);
    const { title, body } = response.data;
    this.setState({ ...this.state, ...{ title, body } });
  }
  async postEntry(apiClient: AxiosInstance, entry) {
    try {
      await apiClient.put(`/entries/${this.props.match.params.id}`, entry);
      this.props.history.push("/");
    } catch (error) {
      this.setState({ error: error.message });
    }
  }
  render() {
    return (
      <div className="h-screen w-full flex flex-col bg-grey-lightset">
        <NewArticleNavbar />
        <ErrorNotification errorString={this.state.error} />
        <ArticleForm
          onSubmit={this.postEntry.bind(this, this.props.apiClient)}
          initialState={{ title: this.state.title, body: this.state.body }}
          className="m-5"
        />
      </div>
    );
  }
}

export const EditArticle = withRouter(EditArticleC);
