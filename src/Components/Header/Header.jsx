import { NavLink } from "react-router-dom";
import s from "./Header.module.css"

let Header = (props) => {
    return (
        <div className={s.container}>
            <NavLink className={s.logo} to="/">Cloud Neural Network</NavLink>
            <div className={s.loginContainer}>
                <div className={s.login}>{props.state.login}</div>
                <NavLink className={s.login_button} to="/login">Sign in</NavLink>
                <NavLink className={s.login_button} to="/registration">Sign up</NavLink>
            </div>
        </div>
    )
}

export default Header;