import { getStates, getState } from "../util/state_api_util";

export const RECEIVE_STATES = 'RECEIVE_STATES'
export const RECEIVE_STATE = 'RECEIVE_STATE'

export const receiveStates = states => ({
    type: RECEIVE_STATES,
    states
});

export const receiveState = state => ({
    type: RECEIVE_STATE,
    state
})

export const fetchStates = () => dispatch => {
    debugger
    return (
        getStates()
            .then(states => dispatch(receiveStates(states)))
            .catch(err => console.log(err))
    )
}
export const fetchState = state => dispatch => {
    return (
        getState(state)
        .then(state => dispatch(receiveState(state)))
        .catch(err => console.log(err))
    )
}