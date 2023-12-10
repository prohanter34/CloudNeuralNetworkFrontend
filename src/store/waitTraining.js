import { trainingAPI } from "../api/api"

const SET_ALL_DATA = "SET_ALL_DATA"
const SET_INFO_ABOUT_START = "SET_INFO_ABOUT_START"
const SET_DATASET_PATH = 'SET_DATASET_PATH'
const SET_FINAL_PATH = 'SET_FINAL_PATH'


let initialState = {
    structure: {
        numHidenLayers: 3,
        neuronCounts: [128, 128],
        activationFunctions: ["relu", "relu"]
    },
    model: {
        optimization: "SGD",
        lossFunction: "binary_crossentropy",
    },
    data: {
        dataDeep: 128,
        dataSize: 729,
        file: ""
    },
    train: {
        epochsCount: 50,
        splitValidation: 0.2,
        batchSize: 20,
    },
    waitState: {
        startInfo: {
            resultCode: 1
        },
        datasetPath: '',
        finalPath: ''
    }
}

const waitTrainingReducer = (state = initialState, action) => {
    let cloneState
    switch (action.type) {
        case SET_ALL_DATA:
            cloneState = {...state}
            cloneState.structure = action.structure
            cloneState.model = action.model
            cloneState.data = action.data
            cloneState.train = action.train
            return cloneState
        case SET_INFO_ABOUT_START:
            cloneState = {...state}
            cloneState.waitState = {...state.waitState}
            cloneState.waitState.startInfo = action.startInfo
            return cloneState
        case SET_DATASET_PATH:
            cloneState = {...state}
            cloneState.waitState = {...state.waitState}
            cloneState.waitState.datasetPath = action.path
            return cloneState
        case SET_FINAL_PATH:
            cloneState = {...state}
            cloneState.waitState = {...state.waitState}
            cloneState.waitState.finalPath = action.path
            return cloneState
        default:
            return state
    }
}

export const setAllData = (structure, model, data, train) => {
    return {
        type: SET_ALL_DATA,
        model,
        structure,
        data,
        train,
    }
}

export const setInfoStart = (startInfo) => {
    return {
        type: SET_INFO_ABOUT_START,
        startInfo
    }
}


export const setDatasetPath = (path) => {
    return {
        type: SET_DATASET_PATH,
        path
    }
}

export const setFinalPath = (path) => {
    return {
        type: SET_FINAL_PATH,
        path
    }
}

export const startTrainingThunk = (structure, model, data, train) => (dispatch) => {
    dispatch(setAllData(structure, model, data, train))
    let path = ''
    let pathKeras = ''
    trainingAPI.uploadDataset(data.file)
    .then((data) => {
        dispatch(setDatasetPath(data.data.dataset_file_name))
        path = data.data.dataset_file_name
    }).then(() => {
        const params = {
            structure,
            model,
            data,
            train,
            path
        }
        trainingAPI.uploadParams(params).then((data) => {
            dispatch(setFinalPath(data.data.neuralnetwork_file_name))
            pathKeras = data.data.neuralnetwork_file_name
        }).then(() => {
            trainingAPI.downloadKeras(pathKeras)
            .then((data) => {
                const downloadURL = window.URL.createObjectURL(data.data)
                const link = document.createElement('a')
                link.href = downloadURL
                link.download = "neuralNetwork.keras"
                document.body.appendChild(link)
                link.click()
                document.body.removeChild(link)
            })
        }); 
    })    
}

export default waitTrainingReducer