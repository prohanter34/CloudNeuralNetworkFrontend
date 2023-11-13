import s from "./Footer.module.css"

let Footer = (props) => {
    return (
        <div className={s.container}>
            <div className={s.info_container}>
                <div className={s.email}>CloudNeuralNetwork@gmail.com</div>
                <div className={s.phoneNumber}>8 987 748-20-76</div>
            </div>
        </div>
    )
}

export default Footer