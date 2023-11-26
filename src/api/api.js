import axiox from "axios"

const instance = axiox.create({
    baseURL: "http://127.0.0.1:8000/",
    withCredentials: true,
    headers: {"Content-Type": "application/json"}
})

export const networkAPI = {

}

export const loginAPI = {
    loginApi(login, password) {
        return instance.post("auth/login", {login, password})
    },
    registerApi(email, login, password) {
        return instance.post("auth/registration", {email, login, password})
    },
}