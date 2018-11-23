import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AxiosInstance } from "axios";

import { ArticleManage } from "./components/pages/ArticleManage"
import { NotFound } from "./components/pages/NotFound"

interface Props {
  apiClient: AxiosInstance
}
export const App =  function(props: Props) {
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={() => <ArticleManage apiClient={props.apiClient}/>}/>
        <Route exact path="/new" render={() => <ArticleManage apiClient={props.apiClient}/>}/>
        <Route render={() => <NotFound />} />
      </Switch>
    </Router>
  )
}

export default Router;
