import { combineReducers, createStore } from "redux";
import reducerAddBooks from "./reducers/reducerAddBooks";


const rootReducer = combineReducers({
    library : reducerAddBooks
})
const store = createStore(rootReducer);

export default store;