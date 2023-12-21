import s from "./Structure.module.css"
import { deleteLayerCreator, setActivationFnCreator, setNeuronCount } from "../../../store/structureReducer"

const Layer = (props) => {

    const activationOnChange = (value) => {
        props.dispatch(setActivationFnCreator(props.id, value))
    }

    const neuronCountOnChange = (value) => {
        if (/^[0-9]*$/.test(value)) {
            props.dispatch(setNeuronCount(props.id, value))
        }
    }

    const deleteOnClick = () => {
        props.dispatch(deleteLayerCreator(props.id))
    }

    return (
        <div className={s.layer_container}>
            <img className={s.layer_picture} src="https://sun9-36.userapi.com/impg/VpMGMzfKFFlZF58Ha7JMBdtpc--Ti7fhkGWDYw/C2K3B8oymt0.jpg?size=794x1123&quality=96&sign=8a9a387f319e799722ee2697c02e3b1d&type=album"
                alt="" />
            <div className={s.form_container}>
                <div className="text_field">
                    <label className={s.label} htmlFor="neuronCount">Кол-во нейронов</label>
                    <input
                        value={props.nums[props.id]}
                        onChange={(e) => {neuronCountOnChange(e.target.value)}}
                        className={s.layer_input}
                        name="neuronCount"
                        type="text" />
                </div>
                <div className="text_field">
                    <label className={s.label} htmlFor="activation">Функция активации</label>
                    <select
                        value={props.activations[props.id]}
                        onChange={(e) => { activationOnChange(e.target.value) }}
                        className={s.layer_select}
                        name="activation"
                        id="">
                        <option value="relu">relu</option>
                        <option value="softmax">softmax</option>
                    </select>
                </div>
                <button className={s.delete_button} onClick={deleteOnClick}>Delete</button>
            </div>
        </div>
    )
}

export default Layer