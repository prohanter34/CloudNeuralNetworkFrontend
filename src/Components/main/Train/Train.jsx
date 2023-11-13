import { setBatchSize, setEpochsCreator } from "../../../store/trainReducer"
import s from "./Train.module.css"

let Train = (props) => {

    const epochsOnChange = (value) => {
        props.dispatch(setEpochsCreator(value))
    }

    const batchSizeOnChange = (value) => {
        props.dispatch(setBatchSize(value))
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
                    <label className={s.label} htmlFor="split_validation">Доля валидации</label>
                    <input min={0.00} max={1.00} step={0.01} type="range" name="split_validation" />
            </div>
        </div>
    )
}


export default Train