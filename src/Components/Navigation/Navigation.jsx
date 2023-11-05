import { NavLink } from "react-router-dom"
import s from "./Navigation.module.css"

let Navigation = (props) => {
    return (
        <div className={s.container}>
            <NavLink className={({isActive}) => isActive ? s.path_active : s.path} to="/structure">Структура</NavLink>
            <NavLink className={({isActive}) => isActive ? s.path_active : s.path} to="/model">Модель</NavLink>
            <NavLink className={({isActive}) => isActive ? s.path_active : s.path} to="/data">Данные</NavLink>
            <NavLink className={({isActive}) => isActive ? s.path_active : s.path} to="/train">Обучение</NavLink>
        </div>
    )
}

export default Navigation