import s from "./Layer.module.css"


const Layer = (props) => {
    return (
        <div className={s.container}>
            <img className={s.picture} src="https://sun9-37.userapi.com/impg/6bnGL8W7QFrmal3bPDkFwKhr0J3Jp1TGGVtJfQ/3oD-ps4_0wA.jpg?size=240x1123&quality=96&sign=29728eb9a541a2bdc37c8ec1debdf984&type=album" alt="" />
            <div>{props.activation}</div>
            <div>{props.neuronCount}</div>
        </div>
    )
}

export default Layer