let SET_EPOCHS_COUNT = 'SET_EPOCHS_COUNT'
let SET_SPLIT_VALIDATION = "SET_SPLIT_VALIDATION"
let SET_BATCH_SIZE = "SET_BATCH_SIZE"


let initialState = {
    epochsCount: 50,
    splitValidation: 0.2,
    batchSize: 20,
}

let trainReducer = (state = initialState, action) => {
    let cloneState

    switch (action.type) {
        case SET_EPOCHS_COUNT:
            cloneState = {...state}
            cloneState.epochsCount = action.epochsCount
            return cloneState;
    
        case SET_SPLIT_VALIDATION:
            cloneState = {...state}
            cloneState.splitValidation = action.splitValidation
            return cloneState
        
        case SET_BATCH_SIZE:
            cloneState = {...state}
            cloneState.batchSize = action.batchSize
            return cloneState

        default:
            return state
    }
}

export let setEpochsCreator = (epochsCount) => {
    return {
        type: SET_EPOCHS_COUNT,
        epochsCount
    }
}

export let setValidationSplitCreator = (splitValidation) => {
    return {
        type: SET_SPLIT_VALIDATION,
        splitValidation
    }
}

export let setBatchSize = (batchSize) => {
    return {
        type: SET_BATCH_SIZE,
        batchSize
    }
}

export default trainReducer