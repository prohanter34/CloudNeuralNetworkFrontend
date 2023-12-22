import { selectNetwork } from "../../../store/loginReducer"
import s from "./ItemNetworksList.module.css"


const ItemNetworksList = (props) => {
    const itemOnClick = () => {
        props.dispatch(selectNetwork(props.state))
    }

    return (
        <div onClick={itemOnClick} className={s.item}>
            {props.state.name}
        </div>
    )
}

export default ItemNetworksList