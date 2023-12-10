import { startTrainingThunk } from "../../../store/waitTraining"
import s from "./WaitTraining.module.css"

const WaitTraining = (props) => {
    const startTrainOnChange = () => {
        props.dispatch(startTrainingThunk(props.state.structureState, props.state.modelState, props.state.dataState, props.state.trainState))
    }

    return (
        <div className={s.container}>
            {/* <div className={s.checkers}>
                <div className={s.checkers_item}>Структура</div>
                <div className={s.checkers_item_error}>Модель</div>
                <div className={s.checkers_item}>Данные</div>
                <div className={s.checkers_item}>Обучение</div>
            </div> */}
            <div className={s.log}></div>
            <button onClick={startTrainOnChange} className={s.start_button}>Начать обучение</button>
        </div>
    )
}

export default WaitTraining