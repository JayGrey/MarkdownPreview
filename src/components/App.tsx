import * as React from "react";
import { Fragment } from "react";

import { Head } from "./Head";
import { Editor } from "./Editor";
import { Preview } from "./Preview";
import { Help } from "./Help";


const defaultText = 
`
# H1 Header

## H2 Header

[Free Code Camp](https://www.freecodecamp.org/)

\`inline code\`

\`\`\`
const a = 1;
console.log(a);
\`\`\`

* Item 1
* Item 2
  * Item 1

  As Kanye West said:
  > We're living the future so
  > the present is our past.

![GitHub Logo](https://www.freecodecamp.org/icons/icon-48x48.png?v=0abf9de8b48d876f7f221299f9fec000)

**This text will be bold**

`;

export class App extends React.Component<{}, { text: string }> {
  constructor(props: {}) {
    super(props);

    this.state = {
      text: defaultText,
    };

    this.onEditorChange = this.onEditorChange.bind(this);
  }

  onEditorChange(text: string): void {
    this.setState({ text });
  }

  render() {
    return (
      <Fragment>
        <Head />
        <div className="row p-2 justify-content-center align-items-stretch flex-md-nowrap">
          <Editor text={this.state.text} onChange={this.onEditorChange} />
          <Preview text={this.state.text} />
        </div>
        <div className="row">
          <Help />
        </div>
      </Fragment>
    );
  }
}
