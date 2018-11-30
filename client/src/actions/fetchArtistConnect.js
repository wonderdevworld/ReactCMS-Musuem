import API from '../utils/API';
import {
    FETCHING_ARTIST_CONNECT_START, 
    FETCHING_ARTIST_CONNECT_ERROR, 
    RECIEVE_ARTIST_CONNECT, 
    RECIEVE_ARTIST_CONNECT_BY_FLOOR, 
    RECIEVED_ARTIST_CONNECT_BY_FLOOR_AND_PRELOAD_STATE
} from './types';

export const fetchArtistConnect = () => {
    return (dispatch) => {
        dispatch({type: FETCHING_ARTIST_CONNECT_START})
        API
            .getArtistConnect()
            .then((res) => {
                console.log(res);
                dispatch({type: RECIEVE_ARTIST_CONNECT, payload: res.data})
                // console.log(res.data);
            })
            .catch((err) => {
                dispatch({type: FETCHING_ARTIST_CONNECT_ERROR, payload: err})
            })
    }
};

export const fetchArtistConnectByFloor = (floor) => {
    return (dispatch) => {
        dispatch({type: FETCHING_ARTIST_CONNECT_START})
        API
            .getArtistConnectFloor(floor)
            .then((res) => {
                console.log(res);
                dispatch({type: RECIEVE_ARTIST_CONNECT_BY_FLOOR, payload: res.data})
                // console.log(res.data);
            })
            .catch((err) => {
                dispatch({type: FETCHING_ARTIST_CONNECT_ERROR, payload: err})
            })
    }
};

export const fetchArtistConnectByFloorAndPreLoadState = (floor) => {
    return (dispatch) => {
        dispatch({type: FETCHING_ARTIST_CONNECT_START})
        API
            .getArtistConnectByFloor(floor)
            .then((res) => {
                console.log(res);
                dispatch({type: RECIEVED_ARTIST_CONNECT_BY_FLOOR_AND_PRELOAD_STATE, payload: res.data})
                // console.log(res.data);
            })
            .catch((err) => {
                dispatch({type: FETCHING_ARTIST_CONNECT_ERROR, payload: err})
            })
    }
}