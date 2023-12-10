import { Route, Routes } from "react-router-dom";
import s from "./Main.module.css"
import Structure from "./Structure/Structure";
import Model from "./Model/Model";
import Data from "./Data/Data";
import Train from "./Train/Train";
import Login from "../Login/Login";
import Cover from "./Cover/Cover";
import Registration from "../Login/Registration";
import WaitTraining from "./WaitTraining/WaitTraining";
import Account from "../Account/Account";

const Main = (props) => {
    return (
        <div className={s.container}>
            <Routes>

                <Route path="/" element={<Cover />}></Route>
                <Route path="/structure" element={<Structure state={props.state.structureState} dispatch={props.dispatch}/>}></Route>
                <Route path="/model" element={<Model state={props.state.modelState} dispatch={props.dispatch} />}></Route>
                <Route path="/data" element={<Data state={props.state.dataState} dispatch={props.dispatch} />}></Route>
                <Route path="/train" element={<Train state={props.state.trainState} dispatch={props.dispatch}/>}></Route>
                <Route path="/login" element={<Login state={props.state.loginState} dispatch={props.dispatch}/>}></Route>
                <Route path="/registration" element={<Registration state={props.state.loginState} dispatch={props.dispatch}/>}></Route>
                <Route path="/waitTraining" element={<WaitTraining state={props.state} dispatch={props.dispatch} />}></Route>
                <Route path="/account" element={<Account dispatch={props.dispatch} />}></Route>


            </Routes>
        </div>
    )
}

export default Main;