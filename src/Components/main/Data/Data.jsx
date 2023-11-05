import s from "./Data.module.css"

let Data = (props) => {
    return (
        <div className={s.container}>
            <div className="file">
            <input type="file" />
            </div>
            <div className="data_prop">
                <div className="input_field">
                    <label htmlFor="depth">Глубина данных</label>
                    <input type="text" name="depth" />
                </div>
                <div className="input_field">
                    <label htmlFor="size">Размер данных</label>
                    <input type="text" name="size" />
                </div>
            </div>
        </div>
    )
}

export default Data