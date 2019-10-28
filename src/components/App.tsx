import * as React from "react";
import { Fragment } from "react";

import { Head } from "./Head";
import { Source } from "./Source";
import { Preview } from "./Preview";
import { Help } from "./Help";

export const App = (): JSX.Element => {
  return (
    <Fragment>
      <Head />
      <div className="row p-3">
        <Source />
        <Preview />
      </div>
      <div className="row">
        <Help />
      </div>
    </Fragment>
  );
};
