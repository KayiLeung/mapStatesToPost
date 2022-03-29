import { RECEIVE_STATES, RECEIVE_STATE} from "../actions/usaStates_actions";

const StatesReducer = ( state = {all:[]}, action) => {
    Object.freeze(state);
    const nextState = Object.assign({}, state)
    debugger
    switch (action.type) {
        case RECEIVE_STATES:
            nextState.all = action.USAStates.data;
            debugger
            return nextState;
        case RECEIVE_STATE:
            debugger
            nextState[action.USAState._id] = action.USAState.data
            debugger
            return nextState;
        default: 
            return state;
    }
}

export default StatesReducer;