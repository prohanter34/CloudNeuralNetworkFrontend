import { loginAPI } from "../api/api"

let SET_LOGIN = "SET_LOGIN"

let initialState = {

    login: "jkjkkjkj"
}

const loginReducer = (state = initialState, action) => {
    let cloneState
    switch (action.type) {
        case SET_LOGIN:
            return {
                ...state,
                login: action.login
            }

        default:
            return state;
    }
}

export let setLoginCreator = (login) => {
    return {
        type: SET_LOGIN,
        login: login
    }
}

// export const loginThunk = (login, password) => (dispatch) => {
//     loginAPI.loginApi(login, password)
//         .then((data) => {
//             if (data.data.resultCode === 0) {
//                 dispatch(setLoginCreator(data.data.login))
//             }
//         })
// }

// export const registerThunk = (login, password) => (dispatch) => {
//     loginAPI.registerApi(login, password)
//         .then((data) => {
//             if (data.data.resultCode === 0) {
//                 dispatch(setLoginCreator(login))
//             }
//         })
// }

export default loginReducer