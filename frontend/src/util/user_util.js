import axios from "axios"

export const fetchUsers = () => {
    return axios.post('api/users')
}

export const fetchUser = userId => {
    return axios.post(`api/users/${userId}`)
}