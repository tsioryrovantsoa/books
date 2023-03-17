import { ADD_BOOKS, DELETE_BOOKS } from "../constants";

export const addBook = (data) => 
{
    return {
    type:ADD_BOOKS,
    payload:data /* objet */
    }
}


export const deleteBook = (id) => 
{
    return {
    type:DELETE_BOOKS,
    payload:id /* objet */
    }
}
