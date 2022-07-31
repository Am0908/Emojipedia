import React from "react";
import emojipedia from "../emojipedia"
import Entry from "./Entry"

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
        
      <dl className="dictionary">
      {emojipedia.map(Emoji =>  (<Entry emoji={Emoji.emoji} name={Emoji.name} meaning={Emoji.meaning} />)) }
      </dl>
      
    </div>
  );
}

export default App;
