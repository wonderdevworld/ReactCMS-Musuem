import API from '../utils/API';
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
} from './types';

export const imgEditingDisabled = (boolean) => {
    return {
        type: IMG_EDITING_DISABLED,
        payload: boolean
    }
}

export const editingDisabled = (boolean) => {
    return {
        type: EDITING_DISABLED,
        payload: boolean
    }
}

export const imgLinkOnChange = (text) => {
    return {
        type: IMG_LINK_UPDATE,
        payload: text
    }
}

export const linkUpdating = (audioInput, pictureInput, imgToBeDeleted, coverImg, position, floor) => {
    return (dispatch) => {
        API
        .updateLinks(audioInput, pictureInput, imgToBeDeleted, coverImg, position, floor)
        .then((res) => {
            console.log(res);
            dispatch({ type: LINK_SAVED });
        }).catch(err => {
            console.log(err);
        })
    }
}

export const pushingImgsIntoGallery = (pushedImg, floor) => {
    return (dispatch) => {
        API
        .addImgToGallery(pushedImg, floor)
        .then((res) => {
            dispatch({ type: PUSH_IMG_INTO_GALLERY });
        }).catch(err => {
            console.log(err);
        })
    }
}

export const audioLinkOnChange = (text) => {
    return {
        type: AUDIO_LINK_UPDATE,
        payload: text
    }
}

export const imgToPushOnChange = (text) => {
    return {
        type: IMG_TO_PUSH_INTO_GALLERY_UPDATE,
        payload: text
    }
}

export const coverImgOnChange = (text) => {
    return {
        type: COVER_IMG_UPDATE,
        payload: text
    }
}