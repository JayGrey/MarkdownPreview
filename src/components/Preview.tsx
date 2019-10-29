import * as React from "react";
import * as marked from "marked";

marked.setOptions({
  pedantic: false,
  gfm: true,
  breaks: true,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  xhtml: false,
});

export const Preview = (props: { text: string }): JSX.Element => {
  return (
    <div className="col border p-3">
      <h2 className="text-info">Preview</h2>
      <div id="preview" dangerouslySetInnerHTML={{ __html: marked(props.text) }} />
    </div>
  );
};
