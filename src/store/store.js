import {applyMiddleware, combineReducers, createStore} from "redux"
import thunkMW from "redux-thunk"
import modelReducer from "./modelReducer"
import structuteReducer from "./structureReduser"
import trainReducer from "./trainReducer"
import loginReducer from "./loginReducer"


let reducers = combineReducers({
    modelState: modelReducer,
    structureState: structuteReducer,
    trainState: trainReducer,
    loginState: loginReducer
})

let store = createStore(reducers, applyMiddleware(thunkMW))

window.store = store;
export default store;