import { ActionTypes } from '../contants/action-types';

const initialState ={
    people:[]
}
export const peopleReducer = (state = initialState, {type, payload}) =>{
     
     switch (type) {
        case ActionTypes.SET_PEOPLE:
            return {...state, people:payload};
        case ActionTypes.UPDATE_EDIT_ITEM:
            return Object.assign({}, ...state, {
                people: Object.assign({}, state.people[payload], {
                  isEdit: 1,
                }),
              });
        default:
            return state;
    }
}
 