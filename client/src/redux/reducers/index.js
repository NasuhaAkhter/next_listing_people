import { combineReducers } from 'redux';
import { peopleReducer ,personReducer} from "./peopleReducer";
const reducer = combineReducers({
    allPeople : peopleReducer,
    people:personReducer
})
export default reducer;
