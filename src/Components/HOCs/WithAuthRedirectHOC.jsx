import { Navigate } from "react-router-dom"


const WithAuthRedirectHOC = (props) => {
    if (props.login) {
        return (
            props.element
        )
    } else {
        return <Navigate to="/login"/>
    }
}

export default WithAuthRedirectHOC