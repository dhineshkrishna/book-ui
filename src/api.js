// src/api.js
const API_URL = "http://localhost:8081/books/";

export async function getBooks() {
  const res = await fetch(API_URL);
  return res.json();
}

export async function addBook(book) {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(book),
  });
  return res.json();
}
