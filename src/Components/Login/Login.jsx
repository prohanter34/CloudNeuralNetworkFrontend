import { useState } from "react"
import s from "./Login.module.css"
import { setLoginCreator } from "../../store/loginReducer";


const Login = (props) => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');


    let submit = () => {
        props.dispatch(setLoginCreator({
            login,
            email: "pupu@gmail.com",
            resultCode: 0
        }))
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
                

            </div>
        </div>
    )
}


export default Login