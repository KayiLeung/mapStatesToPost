import axios from "axios";


export const getStates = () => {
    return axios.get(`api/states/`)
}

export const getState = id => {
    debugger
    return axios.get(`api/states/${id}`)
}