import * as React from "react";
import { withRouter, RouteComponentProps } from "react-router"
import { AxiosInstance } from "axios"

interface Props extends RouteComponentProps {
  apiClient: AxiosInstance
}

interface State {
  title: string;
  body: string;
}

class EditArticleC extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      title: "",
      body: ""
    }
  }
  componentWillMount() {
    console.log("hello edit view")
  }
  render() {
    return (<div></div>)
  }
}

export const EditArticle = withRouter(EditArticleC);
