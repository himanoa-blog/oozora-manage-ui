import * as React from "react"
import { AxiosInstance } from "axios"

import { ArticleForm, Entry } from "../molecules/ArticleForm"
import { NewArticleNavbar } from "../organisms/NewArticleNavbar"

interface Props{
  apiClient: AxiosInstance
}

async function postEntry(apiClient: AxiosInstance, entry) {
  await apiClient.post("/entries", entry)
}
export function NewArticle(props: Props) {
  return (
    <div className="h-screen w-full flex flex-col bg-grey-lightset">
      <NewArticleNavbar />
      <ArticleForm onSubmit={postEntry.bind(null, props.apiClient)}/>
    </div>
  )
}
