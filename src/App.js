// src/App.js
import { useEffect, useState } from "react";
import { getBooks } from "./api";
import BookForm from "./BookForm";
import BookList from "./BookList";
import "./App.css";

function App() {
  const [books, setBooks] = useState([]);

  const loadBooks = async () => {
    setBooks(await getBooks());
  };

  useEffect(() => {
    loadBooks();
  }, []);

  return (
    <div className="container">
      <h1>📚 Book CRUD</h1>
      <BookForm onAdd={loadBooks} />
      <BookList books={books} />
    </div>
  );
}

export default App;

