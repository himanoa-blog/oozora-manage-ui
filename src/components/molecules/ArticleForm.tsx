import * as React from "react";
import { ArticleEditor } from "../atoms/ArticleEditor";
import { Input } from "../atoms/Input";
import { Button } from "../atoms/Button";

export interface State {
  title: string;
  body: string;
}

export interface Props {
  onSubmit: () => void;
  className?: string;
  initialState?: State;
}

export class ArticleForm extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = props.initialState || {
      title: "",
      body: "",
    };
  }
  render() {
    return (
      <div className={`${this.props.className} max-h-screen`}>
        <Input placeholder="タイトル" className="w-full font-extrabold" onChange={(val) => this.setState({...this.state, ...{title: val}})} />
        <ArticleEditor
          className="h-90v w-full"
          placeholder="本文"
          onChange={(newString: string) =>
            this.setState({ ...this.state, ...{ body: newString } })
          }
        />
        <div className="flex justify-end w-full">
          <Button className="bg-white text-grey-dark border border-grey-dark m-1" text="非公開で下書きを保存" />
          <Button className="bg-green text-white m-1 " text="公開" />
        </div>
      </div>
    );
  }
}
