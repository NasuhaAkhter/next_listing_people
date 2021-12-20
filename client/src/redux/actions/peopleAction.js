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
export const SELECTED_PRODUCT =(person) =>{
    return {
        type:ActionTypes.SELECTED_PRODUCT,
        payload:person
    }
}
