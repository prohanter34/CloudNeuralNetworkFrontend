import s from "./Header.module.css"

let Header = (props) => {
    return (
        <div className={s.container}>
            <div className={s.logo}>Cloud Neural Network</div>
            <div className={s.loginContainer}>
                <div className={s.login}>{props.state.login}</div>
                <a className={s.login_button} href="/login">login</a>
            </div>
        </div>
    )
}

export default Header;