import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import { Book } from '../types/Book';

const BookDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [book, setBook] = useState<Book | null>(null);

  useEffect(() => {
    axios.get<Book>(`http://localhost:8080/books/${id}`)
      .then(response => setBook(response.data))
      .catch(error => console.error('Error fetching book details:', error));
  }, [id]);

  if (!book) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>{book.name}</h1>
      <p>Author: {book.author}</p>
      <p>Genre: {book.genre}</p>
      <p>Rating: {book.rating}</p>
      <p>Description: {book.description}</p>
      <img src={book.image} alt={book.name} height={250} width={200} />
      <br />
      <Link to="/">Back to Book List</Link>
    </div>
  );
};

export default BookDetails;