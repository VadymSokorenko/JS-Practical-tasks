import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Book } from '../types/Book';

const BookList: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    axios.get<Book[]>('http://localhost:8080/books/')
      .then(response => setBooks(response.data))
      .catch(error => console.error('Error fetching books:', error));
  }, []);

  return (
    <div>
      <h1>Book List</h1>
      <ul>
        {books.map(book => (
          <li key={book.id}>
            <Link to={`/books/${book.id}`}>
              <h2>{book.name}</h2>
              <p>Author: {book.author}</p>
              <p>Rating: {book.rating}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;