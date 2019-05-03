import * as actions from "../actions/actionTypes";

export default function (
    state = {
        clientName: '',
        clientSelection: ''
    }, action) {
    switch (action.type) {
        case actions.ADD_NAME:
            return {
                ...state,
                clientName: action.payload
            };
        case actions.SELECTED_MENU:
            return {
                ...state,
                clientSelection: action.payload.push(action.payload)
            };
        case actions.DELETE_ITEM:
            return {
                ...state,
            }
        default:
            return {
                ...state
            };
    }
}

