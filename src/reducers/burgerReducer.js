import * as actions from "../actions/actionTypes";

export default function (
    state = {
        clientName: ''
    },
    action) {
        switch (action.type) {
            case actions.ADD_NAME:
            return {
                ...state,
                clientName : action.payload
            };
        default: 
            return {
                ...state
            };
        }
    }