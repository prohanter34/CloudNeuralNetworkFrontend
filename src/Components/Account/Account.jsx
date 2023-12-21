import s from "./Account.module.css"


const Account = (props) => {
    return (
        <div className={s.container}>
            <div className={s.neural_list}>
                <h2>Ваши сети</h2> 
                <div>Здесь пока ничего нет</div>
            </div>
            <div className={s.discription}>
                Здесь вы можете скачать ранее обученные сети
            </div>
        </div>
    )
}

export default Account