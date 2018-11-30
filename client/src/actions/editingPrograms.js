import API from '../utils/API';
import {
    EDITING_PROGRAM_TITLE,
    PROGRAM_EDITED,
    EDITING_PROGRAM_PICTURE,
    EDITING_PROGRAM_DESCRIPTION,
    EDITING_PROGRAM_PRICE,
    EDITING_PROGRAM_TIME,
    EDITING_PROGRAM_MEMBER_INFO,
    EDITING_PROGRAM_REGISTRATION_LINK
} from './types';

export const editProgram = (programData, id) => {
    console.log('right before my controller', programData);
    return (dispatch) => {
        API
            .updateProgram(programData, id)
            .then((res) => {
                console.log('the response data', res);
                dispatch({ type: PROGRAM_EDITED })
            }).catch(err => {
                console.log(err);
            })
    }
}

export const editingProgramInputFieldOnChange = (name, text) => {
    if (name === 'title') {
        return {
            type: EDITING_PROGRAM_TITLE,
            payload: text
        }
    } else if (name === 'picture') {
        return {
            type: EDITING_PROGRAM_PICTURE,
            payload: text
        }
    } else if (name === 'description') {
        return {
            type: EDITING_PROGRAM_DESCRIPTION,
            payload: text
        }
    } else if (name === 'price') {
        return {
            type: EDITING_PROGRAM_PRICE,
            payload: text
        }
    } else if (name === 'time') {
        return {
            type: EDITING_PROGRAM_TIME,
            payload: text
        }
    } else if (name === 'memberInfo') {
        return {
            type: EDITING_PROGRAM_MEMBER_INFO,
            payload: text
        }
    } else if (name === 'registrationLink') {
        return {
            type: EDITING_PROGRAM_REGISTRATION_LINK,
            payload: text
        }
    }

}