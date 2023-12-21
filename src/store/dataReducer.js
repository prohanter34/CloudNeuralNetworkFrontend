import { trainingAPI } from "../api/api"

const SET_DATADEEP = 'SET_DATADEEP'
const SET_DATA_SIZE = 'SET_DATA_SIZE'
const SET_FILE = 'SET_FILE'  
const SET_PATH = "SET_PATH" 

let initialState = {
    dataDeep: 128,
    dataSize: 729,
    file: "",
    datasetPath: ""
}

let dataReducer = (state = initialState, action) => {
    let cloneState
    switch (action.type) {
        case SET_DATADEEP:
            cloneState = {...state}
            cloneState.dataDeep = action.dataDeep
            return cloneState
        case SET_DATA_SIZE:
            cloneState = {...state}
            cloneState.dataSize = action.dataSize
            return cloneState
        case SET_FILE:
            cloneState = {...state}
            cloneState.file = action.file
            return cloneState
        case SET_PATH:
            cloneState = {...state}
            cloneState.datasetPath = action.path
            return cloneState
        default:
            return state
    }
}

export const setDataDeep = (dataDeep) => {
    return {
        type: SET_DATADEEP,
        dataDeep
    }
}

export const setDataSize = (dataSize) => {
    return {
        type: SET_DATA_SIZE,
        dataSize
    }
}

export const setFile = (file) => {
    return {
        type: SET_FILE,
        file: file
    }
}

export const setDatasetPath = (path) => {
    return {
        type: SET_PATH,
        path
    }
}

export const setPathThunk = (file) => (dispatch) => {
    trainingAPI.uploadDataset(file)
    .then((data) => {
        dispatch(setDatasetPath(data.data.dataset_file_name))
    })
}

export default dataReducer