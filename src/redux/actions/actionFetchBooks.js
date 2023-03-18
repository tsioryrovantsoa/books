import axios from "axios"
import { FETCH_BOOKS_ERROR, FETCH_BOOKS_LOADING, FETCH_BOOKS_SUCCESS } from "../constants"

const fetchBooksLoading = () => {
    return {
        type: FETCH_BOOKS_LOADING
    }
}


const fetchBooksSuccess = (data) => {
    return {
        type: FETCH_BOOKS_SUCCESS,
        payloud:data
    }
}

const fetchBooksError = (error) => {
    return {
        type:FETCH_BOOKS_ERROR,
        payloud:error.message
    }
}

export const fetchBooks = title => {
    return dispatch => {
        // console.log('Fetch Books loading');
        dispatch(fetchBooksLoading());

        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${title}&maxResults=20`)
        .then((response) => {
            // console.log(response.data.items);
            dispatch(fetchBooksSuccess(response.data.items))
        })
        .catch((error) => {
            dispatch(fetchBooksError(error))
        })
    }
}