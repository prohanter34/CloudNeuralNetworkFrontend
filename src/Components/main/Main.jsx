import { Route, Routes } from "react-router-dom";
import s from "./Main.module.css"
import Structure from "./Structure/Structure";
import Model from "./Model/Model";
import Data from "./Data/Data";
import Train from "./Train/Train";
import Login from "../Login/Login";

const Main = (props) => {
    return (
        <div className={s.container}>
            <Routes>

                <Route path="/structure" element={<Structure />}></Route>
                <Route path="/model" element={<Model />}></Route>
                <Route path="/data" element={<Data />}></Route>
                <Route path="/train" element={<Train />}></Route>
                <Route path="/login" element={<Login state={props.state.loginState} dispatch={props.dispatch}/>}></Route>

            </Routes>
        </div>
    )
}

export default Main;