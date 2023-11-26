import { useState } from "react"
import s from "./Login.module.css"
import { loginThunk, setLoginCreator } from "../../store/loginReducer";
import { Navigate } from "react-router-dom";


const Login = (props) => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const submit = () => {
        props.dispatch(loginThunk(login, password))
    }
    if (props.state.resultCode === 0) {
        return (
            <Navigate to="/" />
        )
    }
    let warning;
    if (props.state.resultCode === 2) {
        warning = "Что-то введено неверно"
    } else {
        warning = ""
    }

    return (
        <div className={s.container}>
            <div className={s.fields_container}>

                <div className="text_field">
                    <label htmlFor="login">Login</label>
                    <input type="text" name="login" value={login} onChange={(e) => setLogin(e.target.value)} />
                </div>
                <div className="text_field">
                    <label htmlFor="password">Password</label>
                    <input type="text" name="password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                </div>
                <div>
                    <button className={s.signIn_button} onClick={() => submit(props.dispatch, login)}>Sign in</button>
                </div>
                <div className="warning">{warning}</div>

            </div>
        </div>
    )
}


export default Login