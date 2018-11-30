import {
    FETCHING_EXHIBITIONS_START,
    FETCHING_EXHIBITIONS_ERROR,
    RECIEVE_EXHIBITIONS
} from '../actions/types';

const INITIAL_STATE = {
    fetching: false,
    fetched: false,
    exhibitions: [],
    error: null
}
export default (state=INITIAL_STATE, action) => {

    switch (action.type) {
        case FETCHING_EXHIBITIONS_START: 
            return { ...state, fetching: true }
        case FETCHING_EXHIBITIONS_ERROR: 
            return { ...state, fetching: false, error: action.payload }
        case RECIEVE_EXHIBITIONS: 
            return { ...state, 
                fetching: false, 
                fetched: true, 
                exhibitions: action.payload 
                }
        default: 
            return state;
    }
};
