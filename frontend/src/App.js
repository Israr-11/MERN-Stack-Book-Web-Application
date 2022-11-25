//Importing the dependencies and pages 
import React from 'react';
import Books from './books/Books';
import BookCreate from './books/BookCreate';
import BookEdit from './books/BookEdit';
import HomePage from './components/HomePage';
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/books/book' element={<Books />} />
        <Route path='/books/create' element={<BookCreate />} />
        <Route path='/books/:id/edit' element={<BookEdit />} />
      </Routes>
    </div>
  );
}

export default App;
