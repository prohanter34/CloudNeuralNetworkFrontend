import { useState } from "react"
import s from "./Login.module.css"
import { setLoginCreator } from "../../store/loginReducer";


const Login = (props) => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');


    let submit = () => {
        props.dispatch(setLoginCreator(login))
    }


    return (
        <div className={s.container}>
            <div className="text_field">
                <label htmlFor="login">login</label>
                <input type="text" name="login" value={login} onChange={(e) => setLogin(e.target.value)} />
            </div>
            <div className="text_field">
                <label htmlFor="password">password</label>
                <input type="text" name="password" value={password} onChange={(e) => {setPassword(e.target.value)}} />
            </div>
            <div >
                <button className={s.signIn_button} onClick={() => submit(props.dispatch, login)}>sign in</button>
            </div>
        </div>
    )
}


export default Login