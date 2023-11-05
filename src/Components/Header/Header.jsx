import { NavLink } from "react-router-dom";
import s from "./Header.module.css"

let Header = (props) => {
    return (
        <div className={s.container}>
            <div className={s.logo}>Cloud Neural Network</div>
            <div className={s.loginContainer}>
                <div className={s.login}>{props.state.login}</div>
                <NavLink className={s.login_button} to="/login">login</NavLink>
            </div>
        </div>
    )
}

export default Header;