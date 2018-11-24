import * as React from "react";
import { Link } from "react-router-dom"

export function ArticleManageNavbar() {
  return (
    <div className="bg-grey-darkest py-5 flex justify-end">
      <Link to="/new" className="text-green mx-5 no-underline">新規記事作成</Link>
    </div>
  )
}
