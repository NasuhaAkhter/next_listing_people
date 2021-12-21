import {ActionTypes} from '../contants/action-types'
export const setPeople =(people) =>{
    return {
        type:ActionTypes.SET_PEOPLE,
        payload:people
    }
}
export const updatePeople = (person)=>{
    return {
        type:ActionTypes.UPDATE_PEOPLE,
        payload:person
    }
}
export const updateEditOn =(index)=>{
    return {
        type:ActionTypes.UPDATE_EDIT_ITEM,
        payload:index
    }
}
export const updateItem =(person) =>{
    return {
        type:ActionTypes.UPDATE_ITEM,
        payload:person
    }
}
export const pushSingleItem =(person) =>{
    return {
        type:ActionTypes.PUSH_SINGLE_ITEM,
        payload:person
    }
}
export const deleteItem =(index) =>{
    return {
        type:ActionTypes.REMOVE_SELECTED_PRODUCT,
        payload:index
    }
}
