import { setLossFnCreator, setOptimisationCreator } from "../../../store/modelReduser"
import s from "./Model.module.css"

let Model = (props) => {

    const changeOptimization = (value) => {
        props.dispatch(setOptimisationCreator(value))
    } 

    const changeLossFn = (value) => {
        props.dispatch(setLossFnCreator(value))
    }
    return (
        <div className={s.container}>
            <div className="text_field">
                <label htmlFor="optimization">Способ оптимизации</label>
                <select onChange={(e) => {changeOptimization(e.target.value)}} value={props.state.optimization} name="optimization" id="1">
                    <option value="adam">adam</option>
                    <option value="SGD">SGD</option>
                </select>
            </div>
            <div className="text_field">
                <label htmlFor="loss_fn">Функция потерь</label>
                <select onChange={(e) => {changeLossFn(e.target.value)}} value={props.state.lossFunction} name="loss_fn" id="2">
                    <option value="categorical_crossentropy">categorical_crossentropy</option>
                    <option value="binary_crossentropy">binary_crossentropy</option>
                </select>
            </div>
        </div>
    )
}

export default Model