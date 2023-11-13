import { loginAPI } from "../api/api"

let SET_LOGIN = "SET_LOGIN"

let initialState = {
    resultCode: 1,
    email: "",
    login: "jkjkkjkj"
}

const loginReducer = (state = initialState, action) => {
    let cloneState
    switch (action.type) {
        case SET_LOGIN:
            return {
                ...action.state
            }

        default:
            return state;
    }
}

export let setLoginCreator = (state) => {
    return {
        type: SET_LOGIN,
        state
    }
}

// export const loginThunk = (login, password) => (dispatch) => {
//     loginAPI.loginApi(login, password)
//         .then((data) => {
//             if (data.data.resultCode === 0) {
//                 dispatch(setLoginCreator(data.data))
//             }
//         })
// }

// export const registerThunk = (email, login, password) => (dispatch) => {
//     loginAPI.registerApi(email, login, password)
//         .then((data) => {
//             if (data.data.resultCode === 0) {
//                 dispatch(setLoginCreator(data.data))
//             }
//         })
// }

export default loginReducer