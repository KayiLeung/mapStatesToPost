import { RECEIVE_STATES, RECEIVE_STATE} from "../actions/usaStates_actions";
import {merge} from 'lodash'

const StatesReducer = ( state = {all:[]}, action) => {
    Object.freeze(state);
    // const nextState = Object.assign({}, state)
    const nextState = merge({}, state)
    debugger
    switch (action.type) {
        case RECEIVE_STATES:
            nextState.all = action.USAStates.data;
            debugger
            return nextState;
        case RECEIVE_STATE:
            debugger
            let result =[]
            for (let i = 0; i < nextState.all.length; i++) {
                if (nextState.all[i]._id === action.USAState.data._id) {
                    debugger
                    // return nextState.all.splice(i, 1)
                    // result = nextState.all.splice(i, 1);
                    result.push(nextState.all[i])
                }
                // return nextState.all
            }
            debugger
            return result;
            
            // nextState[action.USAState.id] = action.USAState.data
            // nextState.all[action.USAState.data._id] = action.USAState.data
            debugger
        default: 
            return state;
    }
}
// const StatesReducer = (state = { all: {} }, action) => {
//     Object.freeze(state);
//     const nextState = Object.assign({}, state)
//     debugger
//     switch (action.type) {
//         case RECEIVE_STATES:
//             nextState.all = action.USAStates.data;
//             debugger
//             return nextState;
//         case RECEIVE_STATE:
//             debugger
//             // nextState[action.USAState.id] = action.USAState.data
//             nextState.all[action.USAState.data._id] = action.USAState.data
//             // nextState.all.forEach( localState => {
//             //     if (localState._id === action.USAState.data._id) {

//             //     }
//             // })
//             debugger
//             return nextState;
//         default:
//             return state;
//     }
// }

export default StatesReducer;