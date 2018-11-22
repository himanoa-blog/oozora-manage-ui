import * as React from "react";
import { ArticleEditor } from "../atoms/ArticleEditor";
import { Input } from "../atoms/Input";
import { Button } from "../atoms/Button";

export interface State {
  title: string;
  body: string;
}

export interface Entry {
  title: string;
  body: string;
  published: boolean
}

export interface Props {
  onSubmit: (entry: Entry) => void;
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
      <div className={`${this.props.className}`}>
        <div className="flex justify-end w-full">
          <Button onClick={(e) => this.props.onSubmit({...this.state, ...{published: false}})} className="bg-white text-grey-dark border border-grey-dark m-1" text="非公開で下書きを保存" />
          <Button onClick={(e) => this.props.onSubmit({...this.state, ...{published: true}})} className="bg-green text-white m-1 " text="公開" />
        </div>
        <Input placeholder="タイトル" className="font-extrabold w-full" onChange={(val) => this.setState({...this.state, ...{title: val}})} />
        <ArticleEditor
          className="w-full h-90p"
          placeholder="本文"
          onChange={(newString: string) =>
            this.setState({ ...this.state, ...{ body: newString } })
          }
        />
      </div>
    );
  }
}
