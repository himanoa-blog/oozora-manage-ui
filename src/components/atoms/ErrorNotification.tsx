import * as React from "react";

interface Props {
  errorString: string | null
}
export function ErrorNotification({errorString}: Props) {
  if(!errorString) {
    return <div></div>
  }
  return (
    <div className="bg-red-dark">
      <p className="text-white font-bold my-2 text-center">{errorString}}</p>
    </div>
  )
}
