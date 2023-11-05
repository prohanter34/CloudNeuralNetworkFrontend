let SET_LOGIN = "SET_LOGIN"

let initialState = {
    login: "jgjjgjgj"
}

let loginReducer = (state = initialState, action) => {
    let cloneState
    switch (action.type) {
        case SET_LOGIN:
            cloneState = {...state}
            cloneState.login = action.login
            return cloneState;
    
        default:
            return state;
    }
}

export let setLoginCreator = (login) => {
    return {
        type: SET_LOGIN,
        login
    }
}

export default loginReducer