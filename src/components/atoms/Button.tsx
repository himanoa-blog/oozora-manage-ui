import * as React from "react"

interface Props {
  onClick: (e) => void;
  text: string;
  className: string;
}

export function Button(props: Props) {
  return (
    <button 
      onClick={props.onClick}
      className={`${props.className} font-bold py-2 px-4 rounded`}>{ props.text}</button>
  )
}
