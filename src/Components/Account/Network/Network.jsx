import { downloadModelThunk } from "../../../store/loginReducer"
import Layer from "./Layer/Layer"
import s from "./Network.module.css"

const Network = (props) => {

    const downloadOnClick = () => {
        props.dispatch(downloadModelThunk(props.state.path, props.state.name))
    }

    const layers = props.params.activations.map((element, index) => {
        return (
            <Layer activation={element} neuronCount={props.params.neuronCounts[index]} />
        )
    })

    return (
        <div className={s.container}>
            <div className={s.flex_header}>
                <div className="name">{props.state.name}</div>
                <button onClick={downloadOnClick} className={s.download_button}>Download</button>
            </div>
            <div className={s.layerContainer}>{layers}</div>
            <div className={s.params}>
                <div>Способ оптимизации: {props.params.optimization}</div>
                <div>Функция потерь: {props.params.lossFn}</div>
            </div>
        </div>
    )
}

export default Network