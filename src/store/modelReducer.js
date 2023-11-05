const ADD_HIDEN_LAYER = "ADD_HIDEN_LAYER"
const SET_ACTIVATION_FUNCTIONS = "SET_ACTIVATION_FUNCTIONS"
const SET_NEURON_COUNT = "SET_NEURON_COUNT"

let initialState = {
    numHidenLayers: 3,
    neuronCounts: [128, 128, 10],
    activationFunctions: ["relu", "relu", "softmax"]
}

let modelReducer = (state = initialState, action) => {
    let cloneState
    switch (action.type) {
        case ADD_HIDEN_LAYER:
            cloneState = { ...state }
            cloneState.numHidenLayers += 1;
            cloneState.neuronCounts.push(128);
            return cloneState;
        case SET_ACTIVATION_FUNCTIONS:
            cloneState = { ...state }
            cloneState.activationFunctions = action.activationFunctions;
            return cloneState;
        case SET_NEURON_COUNT:
            cloneState = { ...state }
            cloneState.neuronCounts = action.neuronCounts
            return cloneState
        default:
            return state;
    }
}

export let addHidenLayerCreator = () => {
    return {
        type: ADD_HIDEN_LAYER,
    }

}

export let setActivationFnCreator = (activationFunctions) => {
    return {
        type: SET_ACTIVATION_FUNCTIONS,
        activationFunctions,
    }

}

export let setNeuronCount = (neuronCounts) => {
    return {
        type: SET_NEURON_COUNT,
        neuronCounts
    }
}

export default modelReducer