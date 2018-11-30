import {
    FETCHING_FLOOR_START,
    FETCHING_FLOOR_ERROR,
    RECIEVE_FLOOR
} from '../actions/types';

const INITIAL_STATE = {
    fetching: false,
    fetched: false,
    floor: [],
    error: null
}
export default (state=INITIAL_STATE, action) => {

    switch (action.type) {
        case FETCHING_FLOOR_START: 
            return { ...state, fetching: true }
        case FETCHING_FLOOR_ERROR: 
            return { ...state, fetching: false, error: action.payload }
        case RECIEVE_FLOOR: 
            return { ...state, 
                fetching: false, 
                fetched: true, 
                floor: action.payload 
                }
        default: 
            return state;
    }
};
