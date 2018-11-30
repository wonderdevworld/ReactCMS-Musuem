import {
    EDITING_DISABLED, 
    AUDIO_LINK_UPDATE, 
    AUDIO_LINK_SAVED, 
    IMG_EDITING_DISABLED,
    IMG_LINK_UPDATE,
    IMG_LINK_SAVED,
    LINK_SAVED,
    PUSH_IMG_INTO_GALLERY,
    IMG_TO_PUSH_INTO_GALLERY_UPDATE,
    DELETE_IMG,
    COVER_IMG_UPDATE
} from '../actions/types';

const INTIAL_STATE = {
    audioLinkValue: '',
    editDisabled: false,
    imgLinkValue: '',
    imgEditDisabled: false,
    imgToPushValue: '',
    coverImgValue: ''
}

export default (state = INTIAL_STATE, action) => {
    switch(action.type) {
        case EDITING_DISABLED:
            return { ...state, editDisabled: action.payload }
        case IMG_EDITING_DISABLED:
            return { ...state, imgEditDisabled: action.payload }
        case IMG_LINK_UPDATE:
            return { ...state, imgLinkValue: action.payload }
        case IMG_LINK_SAVED:
            return { INTIAL_STATE }
        case AUDIO_LINK_UPDATE:
            return { ...state, audioLinkValue: action.payload }
        case AUDIO_LINK_SAVED:
            return { INTIAL_STATE }
        case LINK_SAVED:
            return { INTIAL_STATE }
        case IMG_TO_PUSH_INTO_GALLERY_UPDATE:
            return { ...state, imgToPushValue: action.payload }
        case PUSH_IMG_INTO_GALLERY:
            return { INTIAL_STATE }
        case DELETE_IMG:
            return { INTIAL_STATE }
        case COVER_IMG_UPDATE:
            return { ...state, coverImgValue: action.payload }
        default:
            return state;
    }
}