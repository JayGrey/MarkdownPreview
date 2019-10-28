import * as React from "react";

export const Preview = (): JSX.Element => {
  return (
    <div className="col border p-3">
      <h2>markdown preview</h2>
      <div id="preview"></div>
    </div>
  );
};
