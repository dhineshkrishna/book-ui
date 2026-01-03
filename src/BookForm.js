// src/BookForm.js
import { useState } from "react";
import { addBook } from "./api";

function BookForm({ onAdd }) {
  const [book, setBook] = useState({ title: "", author: "", price: "" });

  const submit = async (e) => {
    e.preventDefault();
    await addBook({ ...book, price: Number(book.price) });
    setBook({ title: "", author: "", price: "" });
    onAdd();
  };

  return (
    <form onSubmit={submit}>
      <h3>Add Book</h3>
      <input placeholder="Title" value={book.title}
        onChange={(e) => setBook({ ...book, title: e.target.value })} />
      <input placeholder="Author" value={book.author}
        onChange={(e) => setBook({ ...book, author: e.target.value })} />
      <input placeholder="Price" type="number" value={book.price}
        onChange={(e) => setBook({ ...book, price: e.target.value })} />
      <button>Add</button>
    </form>
  );
}

export default BookForm;
