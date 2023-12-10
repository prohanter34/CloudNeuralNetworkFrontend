const SET_DATADEEP = 'SET_DATADEEP'
const SET_DATA_SIZE = 'SET_DATA_SIZE'
const SET_FILE = 'SET_FILE'  

let initialState = {
    dataDeep: 128,
    dataSize: 729,
    file: ""
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

export default dataReducer