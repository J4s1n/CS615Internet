import React, { useState } from "react";
import "./App.css";

function App() {
  const [title, setTitle] = useState("");
  const [books, setBooks] = useState([]);

  const handleAddBook = () => {
    if (title.trim() === "") {
      alert("Title cannot be blank");
      return;
    }
    setBooks([...books, title]);
    setTitle("");
  };

  return (
    <div className="App">
      <h1>Book Manager</h1>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter book title"
      />
      <button onClick={handleAddBook}>Add Book</button>
      <ul>
        {books.map((book, index) => (
          <li key={index}>{book}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
