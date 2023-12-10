import { NavLink } from "react-router-dom"
import { setBatchSize, setEpochsCreator, setValidationSplitCreator } from "../../../store/trainReducer"
import s from "./Train.module.css"

const Train = (props) => {

    const epochsOnChange = (value) => {
        props.dispatch(setEpochsCreator(value))
    }

    const batchSizeOnChange = (value) => {
        props.dispatch(setBatchSize(value))
    }

    const splitValidationOnChange = (value) => {
        props.dispatch(setValidationSplitCreator(value))
    }


    return (
        <div className={s.container}>
            <div className="input_field">
                <label className={s.label} htmlFor="epochs_count">Количество эпох</label>
                <input type="text" name="epochs_count" 
                value={props.state.epochsCount} 
                onChange={(e) => {epochsOnChange(e.target.value)}}/>
            </div>
            <div className="input_field">
                <label className={s.label} htmlFor="batch_size">Размер партии</label>
                <input type="text" name="batch_size" 
                value={props.state.batchSize} 
                onChange={(e) => {batchSizeOnChange(e.target.value)}} />
            </div>
            <div className="input_field">
                <div className={s.splitValidation_container}>
                    <label  
                    className={s.label} 
                    htmlFor="split_validation">Доля валидации:</label>
                    <div className={s.splitValidation}>{props.state.splitValidation}</div>
                </div>
                <div className={s.slice}>

                    <div>0</div>
                    <input onChange={(e) => {splitValidationOnChange(e.target.value)}} 
                    value={props.state.splitValidation}
                    min={0.00} 
                    max={1.00} 
                    step={0.01} 
                    type="range" 
                    name="split_validation" />
                    <div>1</div>

                </div>
                <NavLink className={s.start_button} to="/waitTraining">Start train</NavLink>
            </div>
        </div>
    )
}


export default Train