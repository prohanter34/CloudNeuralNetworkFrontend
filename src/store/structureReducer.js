const ADD_HIDEN_LAYER = "ADD_HIDEN_LAYER"
const SET_ACTIVATION_FUNCTIONS = "SET_ACTIVATION_FUNCTIONS"
const SET_NEURON_COUNT = "SET_NEURON_COUNT"

let initialState = {
    numHidenLayers: 3,
    neuronCounts: [128, 128],
    activationFunctions: ["relu", "relu"]
}

let structureReducer = (state = initialState, action) => {
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
        default:
            return state;
    }
}

export let addHidenLayerCreator = () => {
    return {
        type: ADD_HIDEN_LAYER,
    }

}

export let setActivationFnCreator = (id, activationFunction) => {
    return {
        type: SET_ACTIVATION_FUNCTIONS,
        id,
        activationFunction,
    }

}

export let setNeuronCount = (id, num) => {
    return {
        type: SET_NEURON_COUNT,
        id,
        num
    }
}

export default structureReducer