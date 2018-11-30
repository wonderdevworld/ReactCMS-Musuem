import API from '../utils/API';
import {
    EDITING_ARTIST_CONNECT_TITLE,
    EDITING_ARTIST_CONNECT_PICTURE,
    EDITING_ARTIST_CONNECT_DESCRIPTION,
    EDITING_ARTIST_CONNECT_ARTICLE_LINK,
    EDITING_ARTIST_CONNECT_SOCIAL_LINK,
    ARTIST_CONNECT_EDITED
} from './types';

export const editArtistConnect = (data, id) => {
    console.log('right before my controller', data);
    return (dispatch) => {
        API
            .updateArtistConnect(data, id)
            .then((res) => {
                console.log('the response data', res);
                dispatch({ type: ARTIST_CONNECT_EDITED })
            }).catch(err => {
                console.log(err);
            })
    }
}

export const editingArtistConnectInputFieldOnChange = (name, text) => {
    if (name === 'article title') {
        return {
            type: EDITING_ARTIST_CONNECT_TITLE,
            payload: text
        }
    } else if (name === 'article picture') {
        return {
            type:   EDITING_ARTIST_CONNECT_PICTURE,
            payload: text
        }
    } else if (name === 'article description') {
        return {
            type: EDITING_ARTIST_CONNECT_DESCRIPTION,
            payload: text
        }
    } else if (name === 'article link') {
        return {
            type: EDITING_ARTIST_CONNECT_ARTICLE_LINK,
            payload: text
        }
    } else if (name === 'social link') {
        return {
            type: EDITING_ARTIST_CONNECT_SOCIAL_LINK,
            payload: text
        }
    } 
}