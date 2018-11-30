import API from '../utils/API';
import {
    FETCHING_PROGRAMS_START, 
    FETCHING_PROGRAMS_ERROR, 
    RECIEVE_PROGRAMS, 
    RECIEVE_PROGRAM_BY_ID, 
    RECIEVED_PROGRAM_BY_ID_AND_PRELOAD_STATE
} from './types';

export const fetchPrograms = () => {
    return (dispatch) => {
        dispatch({type: FETCHING_PROGRAMS_START})
        API
            .getPrograms()
            .then((res) => {
                console.log(res);
                dispatch({type: RECIEVE_PROGRAMS, payload: res.data})
                // console.log(res.data);
            })
            .catch((err) => {
                dispatch({type: FETCHING_PROGRAMS_ERROR, payload: err})
            })
    }
};

// export const fetchProgramById = (id) => {
//     return (dispatch) => {
//         dispatch({type: FETCHING_PROGRAMS_START})
//         API
//             .getProgramsById(id)
//             .then((res) => {
//                 console.log(res);
//                 dispatch({type: RECIEVE_PROGRAM_BY_ID, payload: res.data})
//                 // console.log(res.data);
//             })
//             .catch((err) => {
//                 dispatch({type: FETCHING_PROGRAMS_ERROR, payload: err})
//             })
//     }
// };

export const fetchProgramByIdAndPreLoadState = (id) => {
    return (dispatch) => {
        dispatch({type: FETCHING_PROGRAMS_START})
        API
            .getProgramsById(id)
            .then((res) => {
                console.log(res);
                dispatch({type: RECIEVED_PROGRAM_BY_ID_AND_PRELOAD_STATE, payload: res.data})
                // console.log(res.data);
            })
            .catch((err) => {
                dispatch({type: FETCHING_PROGRAMS_ERROR, payload: err})
            })
    }
}