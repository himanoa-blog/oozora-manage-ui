import * as React from "react";

export interface Props {
  onChange: (text:string) => void;
  initialText?: string;
  className?: string;
  placeholder?: string;
  autoFocus?: boolean;
  type?: string;
}

export function Input({onChange, initialText, className, placeholder, ...props}: Props) {
  return (
    <input
      className={`text-gray-darkset text-3xl border-none focus:border-none focus:outline-none ${className || ""}`}
      onChange={(event) => onChange(event.target.value)}
      value={initialText}
      placeholder={placeholder}
      {...props}
    >
    </input>
  )
}
