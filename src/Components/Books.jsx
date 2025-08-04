import React, { useState, useEffect } from 'react';
import { db } from '../config/firebase';
import { collection, addDoc, getDocs, doc, deleteDoc, updateDoc } from 'firebase/firestore';
import './App.css';

const Books = () => {
  const [book, setBook] = useState('');
  const [year, setYear] = useState('');
  const [author, setAuthor] = useState('');
  const [books, setBooks] = useState([]);
  const [updated, setUpdated] = useState('');

  const dbRef = collection(db, 'books');

  const getBooks = async () => {
    const result = await getDocs(dbRef);
    setBooks(result.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => {
    getBooks();
  }, []);

  const createData = async () => {
    await addDoc(dbRef, { book_name: book, publish: year, author });
    setBook('');
    setYear('');
    setAuthor('');
    getBooks();
  };

  const deleteBook = async (id) => {
    await deleteDoc(doc(db, 'books', id));
    getBooks();
  };

  const updateBook = async (id) => {
    await updateDoc(doc(db, 'books', id), { book_name: updated });
    setUpdated('');
    getBooks();
  };

  return (
    <div className="books-container">
      <h2>Add a New Book</h2>
      <div className="form-card">
        <input type="text" placeholder="Book Name" value={book} onChange={(e) => setBook(e.target.value)} />
        <input type="number" placeholder="Published Year" value={year} onChange={(e) => setYear(e.target.value)} />
        <input type="text" placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)} />
        <button className="btn primary" onClick={createData}>Add Book</button>
      </div>

      <h2>📖 Your Book List</h2>
      <div className="book-list">
        {books.map((b, i) => (
          <div className="book-card" key={i}>
            <h3>{b.book_name}</h3>
            <p><strong>Author:</strong> {b.author}</p>
            <p><strong>Published:</strong> {b.publish}</p>
            <div className="actions">
              <button className="btn danger" onClick={() => deleteBook(b.id)}>Delete</button>
              <input type="text" placeholder="New Title" onChange={(e) => setUpdated(e.target.value)} />
              <button className="btn update" onClick={() => updateBook(b.id)}>Update</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Books;