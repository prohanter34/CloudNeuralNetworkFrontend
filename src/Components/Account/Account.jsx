import { useEffect } from "react"
import s from "./Account.module.css"
import { getNetworksThunk } from "../../store/loginReducer"
import ItemNetworksList from "./NetworksList/ItemNetworksList"
import Network from "./Network/Network"


const Account = (props) => {
    useEffect(() => {
        props.dispatch(getNetworksThunk(props.state.login))
    }, [])

    const neuralList = props.state.networks.map((element) => {
        return (
            <ItemNetworksList key={element[0]} state={element} dispatch={props.dispatch} />
        )
    })


    return (
        <div className={s.container}>
            <div className={s.neural_list}>
                <h2>Ваши сети</h2> 
                {neuralList}
                {!props.state.networks ? <div>Здесь пока ничего нет</div> : ""}
            </div>
            <div className={s.discription}>
                {Object.keys(props.state.selectedNetwork) ? 
                <Network dispatch={props.dispatch} state={props.state.selectedNetwork} /> : 
                "Здесь вы можете скачать ранее обученные сети"}
            </div>
        </div>
    )
}

export default Account