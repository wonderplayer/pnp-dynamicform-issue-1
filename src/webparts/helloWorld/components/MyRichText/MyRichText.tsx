import * as React from 'react';
import { RichText } from "@pnp/spfx-controls-react/lib/RichText";

interface IMyRichTextProps {
    defaultValue: string;
    onChanged?: (newValue: any) => void;

}

interface IMyRichTextState {
    changedValue: string;
}

export default class HelloWorld extends React.Component<IMyRichTextProps, IMyRichTextState> {
    public render(): React.ReactElement<IMyRichTextProps> {
        return (

            <RichText
                value={this.props.defaultValue}
                onChange={(text) => { this.onChange(text); return text; }}
            />
        );
    }


    private onChange = (value: any) => {
        this.props.onChanged(value);
        this.setState({
            changedValue: value
        })
    }
}
