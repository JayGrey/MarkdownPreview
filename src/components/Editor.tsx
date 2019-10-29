import * as React from "react";

export const Editor = (props: { text: string; onChange: (test: string) => void }): JSX.Element => {
  return (
    <div className="col border p-3 mr-4 ">
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
