import {
    FETCHING_ARTIST_CONNECT_START,
    FETCHING_ARTIST_CONNECT_ERROR,
    RECIEVE_ARTIST_CONNECT,
    RECIEVE_ARTIST_CONNECT_BY_FLOOR
} from '../actions/types';

const INITIAL_STATE = {
    fetching: false,
    fetched: false,
    artistConnect: [],
    artistConnectByFloor: {},
    error: null
}
export default (state=INITIAL_STATE, action) => {

    switch (action.type) {
        case FETCHING_ARTIST_CONNECT_START: 
            return { ...state, fetching: true }
        case FETCHING_ARTIST_CONNECT_ERROR: 
            return { ...state, fetching: false, error: action.payload }
        case RECIEVE_ARTIST_CONNECT: 
            return { ...state, 
                fetching: false, 
                fetched: true, 
                artistConnect: action.payload 
                }
        case RECIEVE_ARTIST_CONNECT_BY_FLOOR:
            return { ...state,
                fetching: false,
                fetched: true,
                artistConnect: action.payload
            }
        default: 
            return state;
    }
};
