/* eslint-disable prettier/prettier */
import * as React from "react";

export const Help = (): JSX.Element => {
  return (
    <div className="col">
      <h3 className="mb-4">markdown help:</h3>

      <div className="row">
        <div className="col">
          <h4>Headers</h4>
          <pre>
            <code>
              # This is an &lt;h1&gt; tag
              <br />
              ## This is an &lt;h2&gt; tag
              <br />
              ###### This is an &lt;h6&gt; tag
              <br />
            </code>
          </pre>
        </div>
        <div className="col">
          <h4>Emphasys</h4>
          <pre>
            <code>
              *This text will be italic*
              <br />
              _This will also be italic_
              <br />
              **This text will be bold**
              <br />
              __This will also be bold__
              <br />
              _You **can** combine them_
              <br />
            </code>
          </pre>
        </div>
        <div className="col">
          <h4>Unordered lists</h4>
          <pre>
            <code>
              * Item 1<br />
              * Item 2<br />
              &nbsp;&nbsp;* Item 2a
              <br />
              &nbsp;&nbsp;* Item 2b
              <br />
            </code>
          </pre>
        </div>
        <div className="col">
          <h4>Ordered lists</h4>
          <pre>
            <code>
              1. Item 1<br />
              1. Item 2<br />
              1. Item 3<br />
              &nbsp;&nbsp;1. Item 3a
              <br />
              &nbsp;&nbsp;1. Item 3b
              <br />
            </code>
          </pre>
        </div>
        
      </div>
      <div className="row">
      <div className="col">
          <h4>Images</h4>
          <pre>
            <code>
              ![GitHub Logo](/images/logo.png)
              <br />
              Format: ![Alt Text](url)
              <br />
            </code>
          </pre>
        </div>
        <div className="col">
          <h4>Links</h4>
          <pre>
            <code>
              http://github.com - automatic!<br />
              [GitHub](http://github.com)<br />
            </code>
          </pre>
        </div>
        <div className="col">
          <h4>Blockquotes</h4>
          <pre><code>
          As Kanye West said:<br />
          &gt; We&apos;re living the future so<br />
          &gt; the present is our past.<br />
          </code></pre>
        </div>
        <div className="col">
          <h4>Inline code</h4>
          <pre><code>
          I think you should use an<br />
          `&lt;addr&gt;` element here instead.<br />
          </code></pre>
        </div>
      </div>
    </div>
  );
};
