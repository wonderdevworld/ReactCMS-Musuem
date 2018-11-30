import {
    EDITING_PROGRAM_TITLE, 
    PROGRAM_EDITED, 
    EDITING_PROGRAM_PICTURE, 
    EDITING_PROGRAM_DESCRIPTION, 
    EDITING_PROGRAM_PRICE, 
    EDITING_PROGRAM_TIME, 
    EDITING_PROGRAM_MEMBER_INFO, 
    EDITING_PROGRAM_REGISTRATION_LINK,
    RECIEVED_PROGRAM_BY_ID_AND_PRELOAD_STATE
} from '../actions/types';

const INTIAL_STATE = { 
    title: '',
    picture: '',
    price: '',
    description: '',
    time: '',
    memberInfo: '',
    registrationLink: ''
}

export default (state = INTIAL_STATE, action) => {
    switch(action.type) {
        case RECIEVED_PROGRAM_BY_ID_AND_PRELOAD_STATE:
            return { ...state,
                title: action.payload.title,
                picture: action.payload.picture,
                description: action.payload.description,
                price: action.payload.price,
                time: action.payload.time,
                memberInfo: action.payload.memberInfo,
                registrationLink: action.payload.registrationLink
            }
        case EDITING_PROGRAM_TITLE:
            return {...state, title: action.payload }
        case EDITING_PROGRAM_PICTURE:
            return {...state, picture: action.payload }
        case EDITING_PROGRAM_DESCRIPTION:
            return {...state, description: action.payload }
        case EDITING_PROGRAM_PRICE:
            return {...state, price: action.payload }
        case EDITING_PROGRAM_TIME:
            return {...state, time: action.payload }
        case EDITING_PROGRAM_MEMBER_INFO:
            return {...state, memberInfo: action.payload }
        case EDITING_PROGRAM_REGISTRATION_LINK:
            return {...state, registrationLink: action.payload }
        case PROGRAM_EDITED:
            return { INTIAL_STATE }
        default:
            return state
    }
}