import * as React from "react";
import TextareaAutosize from 'react-autosize-textarea';

interface Props {
  onChange: (newText: string) => void;
  value?: string;
  className?: string;
  placeholder?: string;
  autoFocus?: boolean;
}
interface State {
  value: string;
}

export class ArticleEditor extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {value: ""}
  }
  static getDerivedStateFromProps(nextProps: Props, prevState: State){
    if(prevState.value === "") {
      return {value: nextProps.value || ""}
    }
  }
  onChange(event: React.FormEvent<HTMLTextAreaElement>) {
    this.setState({value: event.currentTarget.value})
    this.props.onChange(event.currentTarget.value)
  }
  render() {
    return (
      <TextareaAutosize
        {...this.props}
        className={`leading-loose text-gray-dark text-xl border-none focus:border-none focus:outline-none ${this.props.className || ""}`}
        onChange={(event) => this.onChange(event)}
        value={this.state.value}
        placeholder={this.props.placeholder}
      >
      </TextareaAutosize>
    );
  }
}
