import * as React from "react";
import { SigninButton } from "../atoms/SigninButton";

export interface Props {
  redirect: () => Promise<void>
}

export function Login(props: Props) {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center login-page">
      <div className="z-10 max-w-xs max-h-full text-center">
        <h1 className="text-grey-light">遺言書管理局</h1>
        <SigninButton onClick={props.redirect} text="Sign in with Google" className="mt-4" />
      </div>
    </div>
  )
}
