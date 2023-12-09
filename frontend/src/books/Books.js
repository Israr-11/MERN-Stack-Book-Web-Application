import React, { useEffect, useState } from "react";
import Wrapper from "./Wrapper";
import { Link } from "react-router-dom";

function Books() {
  const [books, setBooks] = useState([]);

  //useEffect hook for fetching data from the API
  useEffect(() => {
    fetch("/api/books")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  //Logic for deleting a book's entry by targeting specific ID
  const del = (id) => {
    fetch(`/api/books/${id}`, {
      method: "DELETE",
    });

    setBooks(books.filter((p) => p._id !== id));
  };
  return (
    <Wrapper>
      <Link to="/books/create" className="btn">
        Add Book
      </Link>
      <table>
        <thead>
          <tr>
            <th>Book ID</th>
            <th>Book Title</th>
            <th>Author Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* Mapping the data and setting in the Table */}
          {books.map((p) => {
            return (
              <tr key={p._id}>
                <td>{p._id}</td>
                <td>{p.title}</td>
                <td>{p.author}</td>
                <td>
                  <Link to={`/books/${p._id}/edit`} className="btn">
                    Edit
                  </Link>
                  <br />
                  <button onClick={() => del(p._id)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Wrapper>
  );
}

export default Books;
