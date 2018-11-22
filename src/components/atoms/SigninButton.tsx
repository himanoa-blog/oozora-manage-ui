import * as React from "react";

interface Props {
  onClick: (e) => void;
  text: string;
  className: string;
}
export function SigninButton(props: Props) {
  return (
    <button
      onClick={props.onClick}
      className={`${props.className} bg-blue-dark text-grey-light font-bold py-2 px-4 rounded inline-flex items-center`}>
      {props.text}
    </button>
  );
}
