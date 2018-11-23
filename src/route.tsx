import * as React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { AxiosInstance } from "axios";

import { ArticleManage } from "./components/pages/ArticleManage"
import { NotFound } from "./components/pages/NotFound"

interface Props {
  apiClient: AxiosInstance
}
export const App =  function(props: Props) {
  return (
    <Router>
      <div>
        <Route exact path="/" render={() => <ArticleManage apiClient={props.apiClient}/>}/>
        <Route exact path="*" component={NotFound}/>
      </div>
    </Router>
  )
}

export default Router;
