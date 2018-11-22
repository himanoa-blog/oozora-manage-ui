import * as React from "react";
interface Props {
  onChange: (newText: string) => void;
  initialText?: string;
  className?: string;
  placeholder?: string;
}
export function ArticleEditor(props: Props) {
  return (
    <textarea
      className={`leading-loose text-gray-dark text-xl border-none focus:border-none focus:outline-none ${props.className ||
        ""}`}
      onChange={event => props.onChange(event.target.value)}
      placeholder={props.placeholder}
    >
      {props.initialText || ""}
    </textarea>
  );
}
