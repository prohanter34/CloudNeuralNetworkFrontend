import AddLayer from './AddLayer/AddLayer';
import Layer from './Layer';
import s from './Structure.module.css';


let Structure = (props) => {

    let count = -1;
    let layers = props.state.neuronCounts.map((e) => {
        count += 1;
        return (
            <Layer
                nums={props.state.neuronCounts}
                activations={props.state.activationFunctions}
                dispatch={props.dispatch}
                key={count}
                id={count} />
        )
    })

    return (
        <div className={s.container}>
            <div className={s.layers}>

                {layers}
                {props.state.neuronCounts.length > 5 ? null:<AddLayer dispatch={props.dispatch} />}

            </div>
        </div>
    )
}

export default Structure