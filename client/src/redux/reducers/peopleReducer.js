import { ActionTypes } from '../contants/action-types';

const initialState ={
    people:[]
}
export const peopleReducer = (state = initialState, {type, payload}) =>{
    console.log( payload, type, "from reducer")
      switch (type) {
        case ActionTypes.SET_PEOPLE:
            return {...state, people:payload};
        case ActionTypes.UPDATE_EDIT_ITEM:
            // return {...state.people[payload], isEdit:true }
            let people =  [...state.people.slice(0, payload),{...state.people[payload], isEdit:true}, ...state.people.slice(payload+1) ]
            return {...state, people:people}
        case ActionTypes.PUSH_SINGLE_ITEM:
            let updated_people = [...state.people, payload]
            return {...state, people:updated_people}
        case ActionTypes.UPDATE_ITEM:
             let index = state.people.findIndex((person ) => person.id === payload.id); 
                  let people_array = [...state.people];     
                  people_array[index] = payload; 
            // let people = [...arr.slice(0, index), Object.assign({}, arr[index], prev), ...arr.slice(index + 1)]
            return {...state, people:people_array}
        case ActionTypes.REMOVE_SELECTED_PRODUCT:
            const sliced_people = [...state.people.slice(0, payload), ...state.people.slice(payload+1)] ;
            return {...state, people:sliced_people }
        default:
            return state;
    }
}
 