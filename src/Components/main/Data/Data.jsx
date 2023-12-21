import { useState } from "react"
import { setDataDeep, setDataSize, setFile, setPathThunk } from "../../../store/dataReducer"
import s from "./Data.module.css"

const Data = (props) => {

    let [emptyData, setEmptyData] = useState(false)

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

    const sendOnClick = () => {
        if (props.state.file) {
            setEmptyData(false)
            props.dispatch(setPathThunk(props.state.file))
        } else {
            setEmptyData(true)
        }
    }
    return (
        <div className={s.container}>
            <div className={s.flex_container}>

                <div className={s.file}>
                    <label htmlFor="file">Загрузите данные в формате .css</label>
                    <input onChange={(e) => { fileOnChange(e.target.files[0]) }}
                        name="file"
                        className={emptyData ? s.input_area_warning : s.input_area}
                        type="file"
                        accept=".csv" />
                        <div className={emptyData ? s.data_warning_on : s.data_warning}>Вы не выбрали файл</div>
                        <div className={props.state.datasetPath ? s.send_data_checker_on : s.send_data_checker}>Данные загружены</div>
                </div>
                <div className="data_prop">
                    <div className="input_field">
                        <label className={s.label} htmlFor="depth">Глубина данных</label>
                        <input onChange={(e) => { dataDepthOnChange(e.target.value) }}
                            value={props.state.dataDeep}
                            type="text"
                            name="depth" />
                    </div>
                    <div className="input_field">
                        <label className={s.label} htmlFor="size">Размер данных</label>
                        <input onChange={(e) => { dataSizeOnChange(e.target.value) }}
                            value={props.state.dataSize}
                            type="text"
                            name="size" />
                    </div>
                </div>

            </div>

            <button className={s.send_button} onClick={sendOnClick}>Send data</button>

        </div>
    )
}

export default Data