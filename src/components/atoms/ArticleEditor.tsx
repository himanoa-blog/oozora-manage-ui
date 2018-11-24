import * as React from "react";
import TextareaAutosize from 'react-autosize-textarea';

interface Props {
  onChange: (newText: string) => void;
  initialText?: string;
  className?: string;
  placeholder?: string;
  autoFocus?: boolean;
}
export function ArticleEditor({onChange, initialText, className, placeholder, ...props}: Props) {
  return (
    <TextareaAutosize
      className={`leading-loose text-gray-dark text-xl border-none focus:border-none focus:outline-none ${className ||
        ""}`}
      onChange={(event) => onChange(event.currentTarget.value)}
      placeholder={placeholder}
      {...props}
    >
      {initialText || ""}
    </TextareaAutosize>
  );
}
