import { createElement, Component, ReactNode } from "react";
import { TextInput } from "./components/TextInput";
import { TextBoxPreviewProps } from "../typings/TextBoxProps";

export class preview extends Component<TextBoxPreviewProps> {
    render(): ReactNode {
        return <TextInput value={this.props.textAttribute} />;
    }
}

export function getPreviewCss(): string {
    return require("./ui/TextBox.css");
}
