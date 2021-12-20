import { combineReducers } from 'redux';
import { peopleReducer  } from "./peopleReducer";
const reducer = combineReducers({
    allPeople : peopleReducer, 
})
export default reducer;
