import * as React from "react";

export interface Entry {
  title: string;
  body: string;
  published: boolean
}

export interface Props {
  entry: Entry
  onEdit: (entry: Entry) => void
}

function truncateBody(length: number, body: string): string {
  return body.slice(0,length)
}

function statusColor(status: boolean) {
  if (status) {
    return `bg-green text-white`
  } else {
    return `bg-grey-dark text-white`
  }
}

export function EntryCard(props: Props) {
  return (
    <a href="#" onClick={(e) =>{
      e.preventDefault()
      props.onEdit(props.entry)
    }} className="no-underline">
      <div className="max-w-sm rounded overflow-hidden shadow-md m-2 flex flex-col" >
        <div className={statusColor(props.entry.published)}>
          <p className="px-6 py-1 font-bold">{props.entry.published ? "公開中" : "非公開"}</p>
        </div>
        <div className="px-6 py-4">
          <h1 className="font-bold text-xl mb-2 text-grey-darkest">{props.entry.title}</h1>
          <p className="text-grey-dark text-base">
            {truncateBody(280, props.entry.body)}
          </p>
        </div>
      </div>
    </a>
  )
}
