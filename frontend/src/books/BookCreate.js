import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Wrapper from "./Wrapper";

function BookCreate() {
  //Using useState hook for setting title and author
  const [title, setTitle] = useState("");
  const [author, setauthor] = useState("");
  const navigate = useNavigate();

  //Controlling POST from frontend
  const submit = (e) => {
    e.preventDefault();
    fetch("/api/books", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ title, author }),
    }).then(() => navigate("/books/book"));
  };

  return (
    //It coontain code for creating another entry when we click Add Book and fill data
    <Wrapper>
      <form onSubmit={submit}>
        <label>Title</label>
        <input
          type="text"
          name="title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Author</label>
        <input
          type="text"
          name="author"
          onChange={(e) => setauthor(e.target.value)}
        />
        <button type="submit">Add Book</button>
      </form>
    </Wrapper>
  );
}
export default BookCreate;
