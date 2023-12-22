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
import WithAuthRedirectHOC from "../HOCs/WithAuthRedirectHOC";

const Main = (props) => {
    return (
        <div className={s.container}>
            <Routes>

                <Route path="/" element={<Cover />} />
                <Route path="/structure" element={<Structure state={props.state.structureState} dispatch={props.dispatch} />} />
                <Route path="/model" element={<Model state={props.state.modelState} dispatch={props.dispatch} />} />
                <Route path="/data" element={<Data state={props.state.dataState} dispatch={props.dispatch} />} />
                <Route path="/train" element={<Train state={props.state.trainState} dispatch={props.dispatch} />} />
                <Route path="/login" element={<Login state={props.state.loginState} dispatch={props.dispatch} />} />
                <Route path="/registration" element={<Registration state={props.state.loginState} dispatch={props.dispatch} />} />
                <Route path="/waitTraining" element={<WaitTraining state={props.state} dispatch={props.dispatch} />} />
                <Route path="/account" element={<WithAuthRedirectHOC element={
                    <Account dispatch={props.dispatch} state={props.state.loginState} />
                    } login={props.state.loginState.login} />} />


            </Routes>
        </div>
    )
}

export default Main;