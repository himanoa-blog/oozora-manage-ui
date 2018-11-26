import * as React from "react";
import { EntryCard } from "../atoms/EntryCard"

export interface Entry {
  id: number;
  title: string;
  body: string;
  published: boolean
}

export interface Props {
  entries: Entry[];
  onEdit: (entry: Entry) => void;
  className?: string;
}

export function EntryCardList(props: Props) {
  return (
    <div className={`flex flex-wrap ${props.className}`}>
      {props.entries.map(entry => {
        return <EntryCard entry={entry} onEdit={props.onEdit} />
      })}
    </div>
  )
}
