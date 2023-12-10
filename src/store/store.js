import {applyMiddleware, combineReducers, createStore} from "redux"
import thunkMW from "redux-thunk"
import trainReducer from "./trainReducer"
import loginReducer from "./loginReducer"
import structureReducer from "./structureReducer"
import modelReducer from "./modelReduser"
import dataReducer from "./dataReducer"
import waitTrainingReducer from "./waitTraining"


let reducers = combineReducers({
    dataState: dataReducer,
    modelState: modelReducer,
    structureState: structureReducer,
    trainState: trainReducer,
    loginState: loginReducer,
    waitTrainingState: waitTrainingReducer,
})

let store = createStore(reducers, applyMiddleware(thunkMW))

window.store = store;
export default store;