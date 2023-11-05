import { NavLink } from "react-router-dom"
import s from "./Navigation.module.css"

let Navigation = (props) => {
    return (
        <div className={s.container}>
            <NavLink className={s.path} to="/structure">Структура</NavLink>
            <NavLink className={s.path} to="/model">Модель</NavLink>
            <NavLink className={s.path} to="/data">Данные</NavLink>
            <NavLink className={s.path} to="/train">Обучение</NavLink>
        </div>
    )
}

export default Navigation