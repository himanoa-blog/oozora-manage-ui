import * as React from "react";
import { Link } from "react-router-dom"

export function NewArticleNavbar() {
  return (
    <div className="bg-grey-darkest py-5 flex justify-start">
      <Link to="/" className="text-green mx-5 no-underline"><i className="fa fa-angle-left px-3" aria-hidden="true"></i>記事一覧ページに戻る</Link>
    </div>
  )
}
