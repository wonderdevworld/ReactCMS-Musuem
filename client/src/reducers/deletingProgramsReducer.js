import {DELETING_PROGRAM} from '../actions/types';

const INTIAL_STATE = {
    deleted: false
}

export default (state=INTIAL_STATE, action) => {
    switch(action.type) {
        case DELETING_PROGRAM:
            return { ...state, deleted: action.payload }
        default:
            return state
    }
}