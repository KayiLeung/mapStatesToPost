import axios from "axios";


export const getAllStates = () => {
    return axios.get(`api/USAStates/`)
}

export const getState = id => {
    // debugger
    console.log(id)
    return axios.get(`api/USAStates/${id}`)

}