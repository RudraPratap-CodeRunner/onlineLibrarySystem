import { createSlice } from '@reduxjs/toolkit';
import books from '../utils/mockData';

// Load initial state from localStorage 
const loadInitialBooks = () => {
  const saved = localStorage.getItem('books');
  return saved ? JSON.parse(saved) : books;
};

const booksSlice = createSlice({
  name: 'books',
  initialState: loadInitialBooks(),
  reducers: {
    addBook: (state, action) => {
      state.push(action.payload);
      localStorage.setItem('books', JSON.stringify(state)); // Persist to localStorage
    },
  },
});

export const { addBook } = booksSlice.actions;
export default booksSlice.reducer;
