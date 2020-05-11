//Acá se redactan las acciones y se "despachan" al reducer
import * as actions from "./actionTypes";
//con el Asterisco lo que hacemos es llamar a todas las actions que guardamos en el archivo actionTypes.js


// Accion que despacha el cambio de state que representa el nombre dell cliente ingresado en el input
export const addName = dispatch => clientName => {
    dispatch({
        type: actions.ADD_NAME,
        payload: clientName
    })
}

export const selectedMenu = dispatch => clientSelection => {
    dispatch({
        type: actions.SELECTED_MENU,
        payload: clientSelection
    })
}

export const deleteItem = dispatch => deleteIndex => {
    console.log('deleteItem', deleteItem)
    dispatch({
        type: actions.DELETE_ITEM,
        payload: deleteIndex
    })
}

// export const addPrice = dispatch => totalPrice => {
//     dispatch ({
//         type: actions.TOTAL_PRICE,
//         payload: totalPrice
//     })
// }