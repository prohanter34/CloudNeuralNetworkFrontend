import { addHidenLayerCreator } from "../../../../store/structureReducer"
import s from "../Structure.module.css"


const AddLayer = (props) => {

    const addLayer = () => {
        props.dispatch(addHidenLayerCreator())
    }

    return (
        <div className={s.layer_container}>
            <img className={s.add_picture} src="https://sun9-36.userapi.com/impg/VpMGMzfKFFlZF58Ha7JMBdtpc--Ti7fhkGWDYw/C2K3B8oymt0.jpg?size=794x1123&quality=96&sign=8a9a387f319e799722ee2697c02e3b1d&type=album"
                alt="" />
                <button onClick={addLayer} className={s.add_button}>Add new layer</button>
        </div>
    )
}

export default AddLayer