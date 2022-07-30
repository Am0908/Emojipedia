import React from "react";
import emojipedia from "../emojipedia"
import Entry from "./Entry"

function CreateEntry(Emoji)
{
    return (
        <Entry
            emoji={Emoji.emoji}
            name={Emoji.name}
            meaning={Emoji.meaning}
        />
    )
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
        
      <dl className="dictionary">
      {emojipedia.map(CreateEntry)}
      </dl>
      
    </div>
  );
}

export default App;
