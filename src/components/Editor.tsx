import * as React from "react";

export const Editor = (): JSX.Element => {
  return (
    <div className="col border p-3 mr-4">
      <h2>source code</h2>
      <textarea name="" id="editor" cols={30} rows={10} className="w-100" />
    </div>
  );
};
