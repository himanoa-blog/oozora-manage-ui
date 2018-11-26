import * as React from "react";

export interface Props {
  onChange: (text:string) => void;
  value?: string;
  className?: string;
  placeholder?: string;
  autoFocus?: boolean;
  type?: string;
}

export interface State {
  value: string
}

export class Input extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {value: props.value || ""}
    this.onChange = this.onChange.bind(this)
  }
  static getDerivedStateFromProps(nextProps: Props, prevState: State){
    if(prevState.value === "") {
      return {value: nextProps.value || ""}
    }
  }
  onChange(event) {
    console.log(event.target.value)
    this.setState({value: event.target.value})
    this.props.onChange(event.target.value)
  }
  render() {
    const { className, onChange, value, placeholder, ...props} = this.props
    return (
      <input
        className={`text-gray-darkset text-3xl border-none focus:border-none focus:outline-none ${ className || ""}`}
        onChange={this.onChange}
        value={this.state.value}
        placeholder={placeholder}
        {...props}
      >
      </input>
    )
  }
}
