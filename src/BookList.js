// src/BookList.js
function BookList({ books }) {
  return (
    <div>
      <h3>Books</h3>
      <ul>
        {books.map((b) => (
          <li key={b.ID}>
            <b>{b.title}</b> by {b.author} — ₹{b.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookList;
