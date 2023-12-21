import { trainingAPI } from "../api/api"


const SET_KERAS_PATH = "SET_KERAS_PATH"
const SWITCH_WAIT_MODE = "SWITCH_WAIT_MODE"
const SET_NETWORK_NAME = "SET_NETWORK_NAME"

let initialState = {
    networkName: "",
    kerasPath: "",
    waitMode: false
}

const waitTrainingReducer = (state = initialState, action) => {
    let cloneState
    switch (action.type) {
        case SET_KERAS_PATH:
            cloneState = {...state}
            cloneState.kerasPath = action.path
            return cloneState
        case SWITCH_WAIT_MODE:
            cloneState = {...state}
            cloneState.waitMode = !state.waitMode
            return cloneState
        case SET_NETWORK_NAME:
            cloneState = {...state}
            cloneState.networkName = action.name
            return cloneState
        default:
            return state
    }
}

export const setKerasPath = (path) => {
    return {
        type: SET_KERAS_PATH,
        path
    }
}

export const swithWaitMode = () => {
    return {
        type: SWITCH_WAIT_MODE
    }
}

export const setNetworkName = (name) => {
    return {
        type: SET_NETWORK_NAME,
        name
    }
}

export const sendParamsThunk = (structure, model, data, train) => (dispatch) => {
    dispatch(swithWaitMode())
    trainingAPI.uploadParams(structure, model, data, train)
    .then((data) => {
        dispatch(setKerasPath(data.data.neuralnetwork_file_name))
    })
}

export const downloadModelThunk = (path) => (dispatch) => {
    trainingAPI.downloadKeras(path)
    .then((data) => {
        const downloadURL = window.URL.createObjectURL(data.data)
                        const link = document.createElement('a')
                        link.href = downloadURL
                        link.download = "neuralNetwork.keras"
                        document.body.appendChild(link)
                        link.click()
                        document.body.removeChild(link)
    })
}

export default waitTrainingReducer