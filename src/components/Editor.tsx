import * as React from "react";

export const Editor = (props: { text: string; onChange: (test: string) => void }): JSX.Element => {
  return (
    <div className="col-12 col-md-6 border p-2 mr-md-1">
      <h2 className="text-info">Editor</h2>
      <form>
        <textarea
          name=""
          id="editor"
          cols={30}
          rows={20}
          className="w-100"
          value={props.text}
          onChange={e => props.onChange(e.target.value)}
        />
      </form>
    </div>
  );
};
