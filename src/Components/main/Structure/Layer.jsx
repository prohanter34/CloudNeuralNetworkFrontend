import s from "./Structure.module.css"

let Layer = (props) => {
    return (
        <div className={s.layer_container}>
            <img className={s.layer_picture} src="https://sun9-36.userapi.com/impg/VpMGMzfKFFlZF58Ha7JMBdtpc--Ti7fhkGWDYw/C2K3B8oymt0.jpg?size=794x1123&quality=96&sign=8a9a387f319e799722ee2697c02e3b1d&type=album"
                alt="" />
            <div className={s.form_container}>
                <div className="text_field">
                    <label htmlFor="neuronCount">Кол-во нейронов</label>
                    <input className={s.layer_input} name="neuronCount" type="text" />
                </div>
                <div>
                <label htmlFor="activation">Функция активации</label>
                <select className={s.layer_select} name="activation" id="">
                    <option> </option>
                    <option value="relu">relu</option>
                    <option value="adam">adam</option>
                </select>
                </div>
            </div>
        </div>
    )
}

export default Layer