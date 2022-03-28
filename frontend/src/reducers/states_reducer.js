import { RECEIVE_STATES, RECEIVE_STATE} from "../actions/states_actions";

const StatesReducer = ( state = {}, action) => {
    console.log(action)
    console.log(state)
    Object.freeze(state);
    const nextState = Object.assign({}, state)
    debugger

    switch (action.type) {
        case RECEIVE_STATES:
            debugger
            return action.states.data;
        case RECEIVE_STATE:
            debugger
            nextState[action.state.id] = action.state.data
            return nextState;
        default: 
            return state;
    }
}

export default StatesReducer;