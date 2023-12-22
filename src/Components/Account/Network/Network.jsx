import { downloadModelThunk } from "../../../store/loginReducer"
import s from "./Network.module.css"

const Network = (props) => {

    const downloadOnClick = () => {
        props.dispatch(downloadModelThunk(props.state.path, props.state.name))
    }

    return (
        <div className={s.container}>
            <div className={s.flex_header}>
                <div className="name">{props.state.name}</div>
                <button onClick={downloadOnClick} className={s.download_button}>Download</button>
            </div>
        </div>
    )
}

export default Network