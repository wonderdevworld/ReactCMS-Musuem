import API from '../utils/API';
import {DELETING_PROGRAM} from '../actions/types';

export const deleteThisProgram = (id) => {
    return (dispatch) => {
        API
            .removeProgram(id)
            .then((res) => {
                console.log(res);
                dispatch({ type: DELETING_PROGRAM, action: true })
            }).catch(err => {
                console.log(err);
            })
    }
}