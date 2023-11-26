import { useState } from "react"
import s from "./Login.module.css"
import { registerThunk, setLoginCreator } from "../../store/loginReducer";
import { registrationValidation } from "../../Validators/validators";
import { Navigate } from "react-router-dom";


const Registration = (props) => {
    const [login, setLogin] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [validation, setValid] = useState('');

    let submit = () => {
        let validResult = registrationValidation(login, email, password)
        if (validResult === "") {
            setValid('')
            props.dispatch(registerThunk(login, password, email))
        } else {
            setValid(validResult)
        }
    }

    if (props.state.resultCode === 0) {
        return <Navigate to="/" />
    }

    return (
        <div className={s.container}>
            <div className={s.fields_container}>

                <div className="text_field">
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="text_field">
                    <label htmlFor="login">Login</label>
                    <input type="text" name="login" value={login} onChange={(e) => setLogin(e.target.value)} />
                </div>
                <div className="text_field">
                    <label htmlFor="password">Password</label>
                    <input type="text" name="password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                </div>
                <div className="warnings">{validation}</div>
                <div>
                    <button className={s.signIn_button} onClick={() => submit(props.dispatch, login)}>Sign in</button>
                </div>

            </div>
        </div>
    )
}


export default Registration