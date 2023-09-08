import { useState } from "react";
import "./App.css";
import { marked } from "marked";

const defaultState = `
# This is a Markdown Previewer!

## for viewing markdown in HTML

create links [Link to google](https://www.google.com)

use **bold text** and inline code - \`<div></div>\`

Fenced Code Block
\`\`\`
{
   "firstName": "John",
  "lastName": "Doe",
  "age": 27 
}
\`\`\`

### Lists

1. First item
2. Second item
3. Third item

- First item
- Second item
- Third item

> "This is a block quote!" - someone

![freeCodeCamp Logo](https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/FreeCodeCamp_logo.svg/800px-FreeCodeCamp_logo.svg.png)
`;

function App() {
  const [markdown, setMarkdown] = useState(defaultState);

  return (
    <div id="app">
      <div className="border b1">
        <textarea
          id="editor"
          value={markdown}
          onChange={(e) => {
            setMarkdown(e.target.value);
          }}
          cols="50"
          rows="10"
        ></textarea>
      </div>
      <div className="border b2">
        <div
          id="preview"
          dangerouslySetInnerHTML={{
            __html: marked(markdown, { breaks: true }),
          }}
        ></div>
      </div>
    </div>
  );
}

export default App;
