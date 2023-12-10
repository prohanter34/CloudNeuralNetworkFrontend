import { setDataDeep, setDataSize, setFile } from "../../../store/dataReducer"
import s from "./Data.module.css"

const Data = (props) => {

    const dataDepthOnChange = (value) => {
        if (/^[0-9]*$/.test(value)) {
            props.dispatch(setDataDeep(value))
        }
    }

    const dataSizeOnChange = (value) => {
        if (/^[0-9]*$/.test(value))
        props.dispatch(setDataSize(value))
    }

    const fileOnChange = (file) => {
        props.dispatch(setFile(file))
    }
    return (
        <div className={s.container}>
            <div className={s.file}>
                <label htmlFor="file">Загрузите данные в формате .css</label>
                <input onChange={(e) => {fileOnChange(e.target.files[0])}} 
                name="file" 
                className={s.input_area} 
                type="file"
                accept=".csv" />
            </div>
            <div className="data_prop">
                <div className="input_field">
                    <label className={s.label} htmlFor="depth">Глубина данных</label>
                    <input onChange={(e) => {dataDepthOnChange(e.target.value)}} 
                    value={props.state.dataDeep}
                    type="text" 
                    name="depth" />
                </div>
                <div className="input_field">
                    <label className={s.label} htmlFor="size">Размер данных</label>
                    <input onChange={(e) => {dataSizeOnChange(e.target.value)}}
                    value={props.state.dataSize} 
                    type="text" 
                    name="size" />
                </div>
            </div>
        </div>
    )
}

export default Data