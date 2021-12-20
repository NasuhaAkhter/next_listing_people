import { ActionTypes } from '../contants/action-types';

const initialState ={
    people:[]
}
export const peopleReducer = (state = initialState, {type, payload}) =>{
    switch (type) {
        case ActionTypes.SET_PEOPLE:
            return {...state, people:payload};
        default:
            return state;
    }
}
export const personReducer =(state = {}, {type, payload}) =>{
    switch(type){
        case ActionTypes.UPDATE_PEOPLE:
            return {...state, ...payload};
            default:
                return state
    }
}