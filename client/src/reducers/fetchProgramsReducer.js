import {
    FETCHING_PROGRAMS_START,
    FETCHING_PROGRAMS_ERROR,
    RECIEVE_PROGRAMS,
    RECIEVE_PROGRAM_BY_ID
} from '../actions/types';

const INITIAL_STATE = {
    fetching: false,
    fetched: false,
    programs: [],
    programById: {},
    error: null
}
export default (state=INITIAL_STATE, action) => {

    switch (action.type) {
        case FETCHING_PROGRAMS_START: 
            return { ...state, fetching: true }
        case FETCHING_PROGRAMS_ERROR: 
            return { ...state, fetching: false, error: action.payload }
        case RECIEVE_PROGRAMS: 
            return { ...state, 
                fetching: false, 
                fetched: true, 
                programs: action.payload 
                }
        case RECIEVE_PROGRAM_BY_ID:
            return { ...state,
                fetching: false,
                fetched: true,
                programById: action.payload
            }
        default: 
            return state;
    }
};
