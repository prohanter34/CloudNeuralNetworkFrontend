import s from "./Train.module.css"

let Train = (props) => {
    return (
        <div className={s.container}>
            <div className="input_field">
                <label htmlFor="epochs_count">Количество эпох</label>
                <input type="text" name="epochs_count" />
            </div>
            <div className="input_field">
                <label htmlFor="batch_size">Размер партии</label>
                <input type="text" name="batch_size" />
            </div>
            <div className="input_field">
                    <label htmlFor="split_validation">Доля валидации</label>
                    <input min={0.00} max={1.00} step={0.01} type="range" name="split_validation" />
            </div>
        </div>
    )
}


export default Train