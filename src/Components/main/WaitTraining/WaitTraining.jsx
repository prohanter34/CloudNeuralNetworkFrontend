import { useState } from "react"
import { paramsValidator } from "../../../Validators/validators"
import { downloadModelThunk, sendParamsThunk } from "../../../store/waitTraining"
import s from "./WaitTraining.module.css"

const WaitTraining = (props) => {

    let [warning, setWarning] = useState("")

    const startTrainOnChange = () => {
        if (!paramsValidator(props.state)) {
            props.dispatch(sendParamsThunk(props.state.structureState, props.state.modelState, props.state.dataState, props.state.trainState))
        } else {
            setWarning(paramsValidator(props.state))
        }
    }

    const downloadOnClick = () => {
        props.dispatch(downloadModelThunk(props.state.waitTrainingState.kerasPath))
    }

    return (
        <div className={s.container}>
            {/* <div className={s.checkers}>
                <div className={s.checkers_item}>Структура</div>
                <div className={s.checkers_item_error}>Модель</div>
                <div className={s.checkers_item}>Данные</div>
                <div className={s.checkers_item}>Обучение</div>
            </div> */}
            {/* <div className={s.log}> */}
                <div className={s.warning}>{warning}</div>
                <div className="wait_mode">
                    {props.state.waitTrainingState.waitMode ? "Ожидайте обучения сети" : ""}
                </div>
            {/* </div> */}
            <div className={s.buttons_container}>
                <button disabled={props.state.waitTrainingState.waitMode} onClick={startTrainOnChange} className={s.start_button}>Начать обучение</button>
                <button disabled={!props.state.waitTrainingState.kerasPath} onClick={downloadOnClick} className={s.download_button}>Download</button>
            </div>
        </div>
    )
}

export default WaitTraining