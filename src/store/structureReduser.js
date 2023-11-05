let SET_OPTIMISATION_LOSS = "SET_OPTIMISATION_LOSS"

let initialState = {
    optimisation: "adam",
    lossFunction: "categorical_crossentropy",
}

let structuteReducer = (state = initialState, action) => {
    let cloneState

    switch (action.type) {
        case SET_OPTIMISATION_LOSS:
            cloneState = {...state}
            cloneState.optimisation = action.optimisation
            cloneState.lossFunction = action.lossFunction
            return cloneState
        default:
            return state
    }
}

export let setOptimisationLossCreator = (optimisation, lossFunction) => {
    return {
        type: SET_OPTIMISATION_LOSS,
        optimisation,
        lossFunction,
    }
}


export default structuteReducer