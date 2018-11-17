import * as React from "react";
import { SigninButton } from "../atoms/SigninButton";

function onClick(e: Event): void {
  console.log("clicked!")
}

export function Login() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center login-page">
      <div className="z-10 max-w-xs max-h-full text-center">
        <h1 className="text-grey-light">遺言書管理局</h1>
        <SigninButton onClick={onClick} text="Sign in with Google" className="mt-4" />
      </div>
    </div>
  )
}
