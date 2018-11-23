import * as React from "react";
import { EntryCard } from "../atoms/EntryCard"

export interface Entry {
  title: string;
  body: string;
  published: boolean
}

export interface Props {
  entries: Entry[];
  onEdit: (entry: Entry) => void;
}

export function EntryCardList(props: Props) {
  return (
    <div className="flex flex-wrap">
      {props.entries.map(entry => {
        return <EntryCard entry={entry} onEdit={props.onEdit} />
      })}
    </div>
  )
}
