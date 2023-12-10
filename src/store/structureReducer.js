const ADD_HIDEN_LAYER = "ADD_HIDEN_LAYER"
const SET_ACTIVATION_FUNCTIONS = "SET_ACTIVATION_FUNCTIONS"
const SET_NEURON_COUNT = "SET_NEURON_COUNT"
const DELETE_LAYER = "DELETE_LAYER"

let initialState = {
    numHidenLayers: 2,
    neuronCounts: [128, 128],
    activationFunctions: ["relu", "relu"]
}

const structureReducer = (state = initialState, action) => {
    let cloneState
    switch (action.type) {
        case ADD_HIDEN_LAYER:
            cloneState = { ...state }
            cloneState.neuronCounts = [...state.neuronCounts]
            cloneState.activationFunctions = [...state.activationFunctions]
            cloneState.numHidenLayers += 1;
            cloneState.activationFunctions.push("");
            cloneState.neuronCounts.push(128);
            return cloneState;
        case SET_ACTIVATION_FUNCTIONS:
            cloneState = { ...state }
            cloneState.activationFunctions = [...state.activationFunctions]
            cloneState.activationFunctions[action.id] = action.activationFunction;
            return cloneState;
        case SET_NEURON_COUNT:
            cloneState = { ...state }
            cloneState.neuronCounts = [...state.neuronCounts]
            cloneState.neuronCounts[action.id] = action.num
            return cloneState
        case DELETE_LAYER:
            cloneState = {...state}
            cloneState.numHidenLayers = state.numHidenLayers - 1
            cloneState.neuronCounts = [...state.neuronCounts]
            cloneState.neuronCounts = cloneState.neuronCounts.filter((v, i, r) => {return i!==action.id})
            cloneState.activationFunctions = [...state.activationFunctions]
            cloneState.activationFunctions = cloneState.activationFunctions.filter((v, i, r) => {return i!==action.id})
            return cloneState
        default:
            return state;
    }
}

export const deleteLayerCreator = (id) => {
    return {
        type: DELETE_LAYER,
        id,
    }
}

export const addHidenLayerCreator = () => {
    return {
        type: ADD_HIDEN_LAYER,
    }

}

export const setActivationFnCreator = (id, activationFunction) => {
    return {
        type: SET_ACTIVATION_FUNCTIONS,
        id,
        activationFunction,
    }

}

export const setNeuronCount = (id, num) => {
    return {
        type: SET_NEURON_COUNT,
        id,
        num
    }
}

export default structureReducer