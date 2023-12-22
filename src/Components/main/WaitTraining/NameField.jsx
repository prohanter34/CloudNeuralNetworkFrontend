import { setNetworkName } from "../../../store/waitTraining"
import s from "./WaitTraining.module.css"

const NameField = (props) => {

    const nameOnChange = (name) => {
        props.dispatch(setNetworkName(name))
    }

    return (
        <div className={s.name}>
                <div className="text_field">
                    <label className={s.label} htmlFor="name">Имя сети</label>
                    <input
                        value={props.name}
                        onChange={(e) => { nameOnChange(e.target.value) }}
                        className={s.layer_input}
                        name="name"
                        type="text" />
                </div>
            </div>
    )
}

export default NameField