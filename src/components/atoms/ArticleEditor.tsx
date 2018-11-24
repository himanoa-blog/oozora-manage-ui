import * as React from "react";
import TextareaAutosize from 'react-autosize-textarea';

interface Props {
  onChange: (newText: string) => void;
  initialText?: string;
  className?: string;
  placeholder?: string;
}
export function ArticleEditor(props: Props) {
  return (
    <TextareaAutosize
      className={`leading-loose text-gray-dark text-xl border-none focus:border-none focus:outline-none ${props.className ||
        ""}`}
      onChange={(event) => props.onChange(event.currentTarget.value)}
      placeholder={props.placeholder}
    >
      {props.initialText || ""}
    </TextareaAutosize>
  );
}
