import API from '../utils/API';
import {FETCHING_FLOOR_START, FETCHING_FLOOR_ERROR, RECIEVE_FLOOR} from './types';

export const fetchFloor = (floor) => {
    return (dispatch) => {
        dispatch({type: FETCHING_FLOOR_START})
        API
            .getExhibitionFloor(floor)
            .then((res) => {
                // console.log(res);
                dispatch({type: RECIEVE_FLOOR, payload: res.data[0].floors[0]})
                // console.log('response dataaaaaaa:::::', res.data[0].floors[0]);
            })
            .catch((err) => {
                dispatch({type: FETCHING_FLOOR_ERROR, payload: err})
            })
    }
};