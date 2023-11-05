import Layer from './Layer';
import s from './Structure.module.css';


let Structure = (props) => {
    return (
        <div className={s.container}>
            <div className={s.layers}>
            <Layer />
            <Layer />
            <Layer />
            <Layer />
            <Layer />
            <Layer />
            </div>
        </div>
    )
}

export default Structure