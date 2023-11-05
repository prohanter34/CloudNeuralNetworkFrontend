import axiox from "axios"

const instance = axiox.create({
    baseURL: "http://127.0.0.1:8000/",
    withCredentials: true,
    headers: {}
})

export const networkAPI = {

}

export const loginAPI = {
    loginApi(login, password) {
        return instance.post("auth/login", {login, password})
    },
    registerApi(login, password) {
        return instance.post("auth/register", {login, password})
    },
}