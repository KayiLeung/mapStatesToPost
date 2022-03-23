export const getStates = stateId => {
    return axios.get(`/api/states/${stateId}`)
};