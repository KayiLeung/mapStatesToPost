import { RECEIVE_STATES, RECEIVE_STATE} from "../actions/usaStates_actions";

const StatesReducer = ( state = {all:{}}, action) => {
    Object.freeze(state);
    const nextState = Object.assign({}, state)

    switch (action.type) {
        case RECEIVE_STATES:
            // return action.USAStates.data;
            nextState.all = action.USAStates.data;
            debugger
            return nextState;
        case RECEIVE_STATE:
            nextState[action.USAState.id] = action.USAState.data
            return nextState;
        default: 
            return state;
    }
}

export default StatesReducer;