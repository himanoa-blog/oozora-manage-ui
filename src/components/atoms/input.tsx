import * as React from "react";

export interface Props {
  onChange: (text: string) => void;
  initialText?: string;
  className?: string;
  placeholder?: string;
  type?: string;
}

export function Input(props: Props) {
  return (
    <input
      type={props.type || "text"}
      className={`text-gray-darkset text-3xl border-none focus:border-none focus:outline-none ${props.className ||
        ""}`}
      onChange={event => props.onChange(event.target.value)}
      value={props.initialText}
      placeholder={props.placeholder}
    />
  );
}
