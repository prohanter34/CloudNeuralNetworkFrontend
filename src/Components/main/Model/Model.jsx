import s from "./Model.module.css"

let Model = (props) => {
    return (
        <div className={s.container}>
            <div className="text_field">
                <label htmlFor="optimization">Способ оптимизации</label>
                <select name="optimization" id="1">
                    <option value="adam">adam</option>
                    <option value="SGD">SGD</option>
                </select>
            </div>
            <div className="text_field">
                <label htmlFor="loss_fn">Функция потерь</label>
                <select name="loss_fn" id="2">
                    <option value="categorical_crossentropy">categorical_crossentropy</option>
                </select>
            </div>
        </div>
    )
}

export default Model