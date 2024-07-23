import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Book } from '../types/Book';
import Container from '@mui/material/Container/Container';
import Grid from '@mui/material/Grid/Grid'
import { Typography } from '@mui/material';

const BookList: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    axios.get<Book[]>('http://localhost:8080/books/')
      .then(response => setBooks(response.data))
      .catch(error => console.error('Error fetching books:', error));
  }, []);

  return (

    <Container>
      
      <Typography variant='h1' textAlign={'center'} border={2}>
            Book List
          </Typography>
        
        {books.map(book => (
          
          <>
          <Link to={`/books/${book.id}`}>
          <Grid container xs={12} spacing={0} border={1}>
          
          <Grid item xs={1}>
              
                <Typography align='center'>{book.id}</Typography>
              
            </Grid>
            <Grid item xs={4} borderLeft={1}>
              <Typography  align='center'>{book.name}</Typography>
            </Grid>
            <Grid item xs={4} borderLeft={1}>
              <Typography  align='center'>Author: {book.author}</Typography>
            </Grid>
            <Grid item xs={3} borderLeft={1}>
              <Typography  align='center'>Rating: {book.rating}</Typography>
            </Grid>
            
          </Grid>
          </Link></>
        ))}
      
      
    </Container>
  );
};

export default BookList;