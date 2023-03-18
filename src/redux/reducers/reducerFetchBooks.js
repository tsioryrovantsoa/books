import { FETCH_BOOKS_ERROR, FETCH_BOOKS_LOADING, FETCH_BOOKS_SUCCESS } from "../constants";


const initialstate = {
    isLoading :false,
    fetchedBooks : [],
    error: ''
};

const reducerFetchBooks = (state=initialstate,action) => {
    switch (action.type) {
        case FETCH_BOOKS_LOADING:
            console.log('Loading reducer');
            return {
                ...state,isLoading:true
            }
        case FETCH_BOOKS_SUCCESS:
            return {
                ...state,isLoading:false,
                fetchedBooks : action.payloud,
                error : ''
            }

        case FETCH_BOOKS_ERROR :
            return {
                ...state,isLoading:false,
                fetchedBooks : action.payloud,error : action.payloud
            }
    
        default:
            return state;
    }
}

export default reducerFetchBooks