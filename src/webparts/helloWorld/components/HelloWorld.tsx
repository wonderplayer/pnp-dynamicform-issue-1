import * as React from 'react';
import { IHelloWorldProps } from './IHelloWorldProps';
import MyRichText from './MyRichText/MyRichText';

interface IHelloWorldState {
  richValue: string
}
export default class HelloWorld extends React.Component<IHelloWorldProps, IHelloWorldState> {
  constructor(props) {
    super(props);
    this.state = {
      richValue: "Initial"
    }
  }
  public render(): React.ReactElement<IHelloWorldProps> {
    const defaultValue = "Initial";
    return (
      <div>
        <MyRichText
          defaultValue={defaultValue}
          onChanged={(text) => { this.setState({ richValue: text }); }}
        />
      </div>

    );
  }
}
