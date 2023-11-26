import { loginAPI } from "../api/api"

let SET_LOGIN = "SET_LOGIN"
let QUIT = "QUIT"

let initialState = {
    resultCode: 1,
    email: "",
    login: ""
}

const loginReducer = (state = initialState, action) => {
    let cloneState
    switch (action.type) {
        case SET_LOGIN:
            return {
                ...action.state
            }
        case QUIT:
            return {

                resultCode: 1,
                email: "",
                login: ""

            }
        default:
            return state;
    }
}

export let setLoginCreator = (state) => {
    // state.resultCode = 0
    return {
        type: SET_LOGIN,
        state
    }
}

export const quitCreator = () => {
    return {
        type: QUIT
    }
}

export const loginThunk = (login, password) => (dispatch) => {
    loginAPI.loginApi(login, password)
        .then((data) => {
            if (data.data.resultCode === 0 || data.data.resultCode === 2) {
                dispatch(setLoginCreator(data.data))
            }
        })
}

export const registerThunk = (login, password, email) => (dispatch) => {
    loginAPI.registerApi(email, login, password)
        .then((data) => {
            if (data.data.resultCode === 0) {
                dispatch(setLoginCreator(data.data))
            }
        })
}

export default loginReducer