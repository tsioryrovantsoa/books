import { ADD_BOOKS, DELETE_BOOKS, DELETE_ALL_BOOKS } from "../constants";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  books: [],
};

const helperAdddata = (action) => {
  return {
    id: uuidv4(),
    title: action.payload.title,
    author: action.payload.author,
  };
};

const helperDeletedata = (state, id) => {
  const books = state.filter((book) => book.id !== id);
  return books;
};

//reducer

const reducerAddBooks = (state = initialState.books, action) => {
  if (localStorage.getItem("booksData")) {
    state = JSON.parse(localStorage.getItem("booksData"));
  }

  switch (action.type) {
    case ADD_BOOKS:
      state = [...state, helperAdddata(action)];
      localStorage.setItem("booksData", JSON.stringify(state));
      return state;

    case DELETE_BOOKS:
      state = helperDeletedata(state, action.payload);
      localStorage.setItem("booksData", JSON.stringify(state));
      return state;

    case DELETE_ALL_BOOKS:
      state = [];
      localStorage.setItem("booksData", JSON.stringify(state));
      return state;
    default:
      return state;
  }
};

export default reducerAddBooks;
