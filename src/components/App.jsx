import React, { useState } from "react";
import List from "./List";

function App() {
  const [item, setItem] = useState("");
  const [listItems, setListItem] = useState([]);

  function handleChange(event) {
    const { value } = event.target;
    setItem(value);
  }

  function handleClick(event) {
    if (item !== "") {
      setListItem(() => {
        return [item, ...listItems];
      });
    }
  }

  function createList(item) {
    return <List content={item} />;
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={handleChange} />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>{listItems.map(createList)}</ul>
      </div>
    </div>
  );
}

export default App;
