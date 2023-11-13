let SET_OPTIMISATION = "SET_OPTIMISATION"
let SET_LOSS = "SET_LOSS"

let initialState = {
    optimization: "SGD",
    lossFunction: "binary_crossentropy",
}

let modelReducer = (state = initialState, action) => {
    let cloneState

    switch (action.type) {
        case SET_OPTIMISATION:
            cloneState = { ...state }
            cloneState.optimization = action.optimizationFn
            return cloneState
        case SET_LOSS:
            cloneState = { ...state }
            cloneState.lossFunction = action.lossFn
            return cloneState
        default:
            return state
    }
}

export let setOptimisationCreator = (optimizationFn) => {
    return {
        type: SET_OPTIMISATION,
        optimizationFn,
    }
}

export let setLossFnCreator = (lossFn) => {
    return {
        type: SET_LOSS,
        lossFn
    }
}


export default modelReducer