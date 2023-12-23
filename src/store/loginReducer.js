import { loginAPI, networkAPI, trainingAPI } from "../api/api"

const SET_LOGIN = "SET_LOGIN"
const QUIT = "QUIT"
const SET_NETWORKS = "SET_NETWORKS"
const SET_SELECTED_NETWORK = "SET_SELECTED_NETWORK"
const SET_NETWORK_PARAMS = "SET_NETWORK_PARAMS" 

const initialState = {
    resultCode: 1,
    email: "",
    login: "",
    networks: [],
    selectedNetwork: {},
    selectedNetworkParams: {
        optimization: "",
        lossFn: "",
        activations: [],
        neuronCounts: []
    }
}

const loginReducer = (state = initialState, action) => {
    let cloneState
    switch (action.type) {
        case SET_LOGIN:
            cloneState = {...state}
            cloneState.login = action.state.login
            cloneState.email = action.state.email
            cloneState.resultCode = action.state.resultCode 
            return cloneState
        case QUIT:
            return initialState
        case SET_NETWORKS:
            cloneState = {...state}
            cloneState.networks = action.networks
            return cloneState
        case SET_SELECTED_NETWORK:
            cloneState = {...state}
            cloneState.selectedNetwork = action.network
            return cloneState
        case SET_NETWORK_PARAMS:
            cloneState = {...state}
            cloneState.selectedNetworkParams = action.params
            return cloneState
        default:
            return state;
    }
}

export const setNetworkParams = (params) => {
    return {
        type: SET_NETWORK_PARAMS,
        params
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

export const getNetworkParamsThunk = (id) => (dispatch) => {
    networkAPI.getNetworkParamsAPI(id)
    .then((data) => {
        dispatch(setNetworkParams(data.data))
    })
}

export default loginReducer