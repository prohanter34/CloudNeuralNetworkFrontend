import {applyMiddleware, combineReducers, createStore} from "redux"
import thunkMW from "redux-thunk"
import trainReducer from "./trainReducer"
import loginReducer from "./loginReducer"
import structureReducer from "./structureReducer"
import modelReducer from "./modelReduser"


let reducers = combineReducers({
    modelState: modelReducer,
    structureState: structureReducer,
    trainState: trainReducer,
    loginState: loginReducer
})

let store = createStore(reducers, applyMiddleware(thunkMW))

window.store = store;
export default store;