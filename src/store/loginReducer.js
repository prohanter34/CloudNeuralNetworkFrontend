import { loginAPI, networkAPI, trainingAPI } from "../api/api"

const SET_LOGIN = "SET_LOGIN"
const QUIT = "QUIT"
const SET_NETWORKS = "SET_NETWORKS"
const SET_SELECTED_NETWORK = "SET_SELECTED_NETWORK"

const initialState = {
    resultCode: 1,
    email: "",
    login: "",
    networks: [],
    selectedNetwork: {}
}

const loginReducer = (state = initialState, action) => {
    let cloneState
    switch (action.type) {
        case SET_LOGIN:
            return {
                ...action.state,
                networks: [],
                selectedNetwork: {}
            }
        case QUIT:
            return {

                resultCode: 1,
                email: "",
                login: "",
                networks: [],
                selectedNetwork: {}

            }
        case SET_NETWORKS:
            cloneState = {...state}
            cloneState.networks = action.networks
            return cloneState
        case SET_SELECTED_NETWORK:
            cloneState = {...state}
            cloneState.selectedNetwork = action.network
            return cloneState
        default:
            return state;
    }
}

export const selectNetwork = (network) => {
    return {
        type: SET_SELECTED_NETWORK,
        network
    }
}

export const setNetworks = (networks) => {
    return {
        type: SET_NETWORKS,
        networks
    }
}

export const setLoginCreator = (state) => {
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

export const getNetworksThunk = (login) => (dispatch) => {
    networkAPI.getNetworksAPI(login)
    .then((data) => {
        dispatch(setNetworks(data.data))
    })
}

export const downloadModelThunk = (path, name) => (dispatch) => {
    trainingAPI.downloadKeras(path)
    .then((data) => {
        const downloadURL = window.URL.createObjectURL(data.data)
        const link = document.createElement('a')
        link.href = downloadURL
        link.download = name + ".keras"
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    })
}

export default loginReducer