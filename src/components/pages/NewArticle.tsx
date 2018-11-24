import * as React from "react"
import { AxiosInstance } from "axios"

import { ErrorNotification } from "../atoms/ErrorNotification"
import { ArticleForm, Entry } from "../molecules/ArticleForm"
import { NewArticleNavbar } from "../organisms/NewArticleNavbar"
import { withRouter, RouteComponentProps } from "react-router"

interface Props extends RouteComponentProps {
  apiClient: AxiosInstance;
}

interface State {
  error: string | null;
}


class NewArticleC extends React.Component<Props, State> {
  constructor(props) {
    super(props)
    this.state = {error: null}
  }
  async postEntry(apiClient: AxiosInstance, entry) {
    try {
      await apiClient.post("/entries", entry)
      this.props.history.push("/")
    } catch(error) {
      this.setState({error: error.message})
    }
  }
  render() {
    return (
      <div className="h-screen w-full flex flex-col bg-grey-lightset">
        <NewArticleNavbar />
        <ErrorNotification errorString={this.state.error} />
        <ArticleForm onSubmit={this.postEntry.bind(this, this.props.apiClient)} className="m-5" />
      </div>
    )
  }
}

export const NewArticle = withRouter(NewArticleC)
