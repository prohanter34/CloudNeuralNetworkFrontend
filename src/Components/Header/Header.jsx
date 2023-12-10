import { NavLink } from "react-router-dom";
import s from "./Header.module.css"
import { quitCreator } from "../../store/loginReducer";

let Header = (props) => {

    let loginElements = () => {

        const exitOnClick = () => {
            props.dispatch(quitCreator())
        }

        if (props.state.resultCode === 0) {
            return (
                <div className={s.loginContainer}>
                    <NavLink className={s.login} to="/account">{props.state.login}</NavLink>
                    <NavLink className={s.login_button} onClick={exitOnClick}>Exit</NavLink>
                </div>
            )
        } else {
            return (
                <div className={s.loginContainer}>
                    <div className={s.login}>{props.state.login}</div>
                    <NavLink className={s.login_button} to="/login">Sign in</NavLink>
                    <NavLink className={s.login_button} to="/registration">Sign up</NavLink>
                </div>
            )
        }
    }


    return (
        <div className={s.container}>
            <NavLink className={s.logo} to="/">Cloud Neural Network</NavLink>
            {loginElements()}
        </div>
    )
}

export default Header;