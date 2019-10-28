import * as React from "react";

export const Help = (): JSX.Element => {
  return (
    <div className="col">
      <h3 className="mb-4">markdown help</h3>

      <div className="row">
        <div className="col">
          <h4>Headers</h4>
          <p># This is an &lt;h1&gt; tag </p>
          <p>## This is an &lt;h2&gt; tag</p>
          <p>###### This is an &lt;h6&gt; tag</p>
        </div>
        <div className="col">
          <h4>Emphasys</h4>
          <p>*This text will be italic*</p>
          <p>_This will also be italic_</p>
          <p>**This text will be bold**</p>
          <p>__This will also be bold__</p>
          <p>_You **can** combine them_</p>
        </div>
        <div className="col">
          <h4>Unordered lists</h4>
          <p>* Item 1 * Item 2 * Item 2a * Item 2b</p>
        </div>
        <div className="col">
          <h4>Ordered lists</h4>
          <p>1. Item 1 1. Item 2 1. Item 3 1. Item 3a 1. Item 3b</p>
        </div>
        <div className="col">
          <h4>Images</h4>
          <p>![GitHub Logo](/images/logo.png) Format: ![Alt Text](url)</p>
        </div>
        <div className="col">
          <h4>Links</h4>
          <p>http://github.com - automatic! [GitHub](http://github.com)</p>
        </div>
        <div className="col">
          <h4>Blockquotes</h4>
          <p>As Kanye West said: &gt; We&apos;re living the future so &gt; the present is our past.</p>
        </div>
        <div className="col">
          <h4>Inline code</h4>
          <p>I think you should use an `&lt;addr&gt;` element here instead.</p>
        </div>
      </div>
    </div>
  );
};
