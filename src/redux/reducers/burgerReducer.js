import * as actions from "../actions/actionTypes";

export default function (
    state = {
        clientName: '',
        clientSelection: []
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
                clientSelection: state.clientSelection.concat([action.payload])
            };
        case actions.DELETE_ITEM:
            return {
                ...state,
                clientSelection: state.clientSelection.slice(0, action.payload).concat(state.clientSelection.slice(action.payload + 1))
            }
        default:
            return {
                ...state
            };
    }
}

