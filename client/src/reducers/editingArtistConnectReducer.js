import {
    ARTIST_CONNECT_EDITED,
    EDITING_ARTIST_CONNECT_TITLE,
    EDITING_ARTIST_CONNECT_PICTURE,
    EDITING_ARTIST_CONNECT_DESCRIPTION,
    EDITING_ARTIST_CONNECT_ARTICLE_LINK,
    EDITING_ARTIST_CONNECT_SOCIAL_LINK,
    RECIEVED_ARTIST_CONNECT_BY_FLOOR_AND_PRELOAD_STATE
} from '../actions/types';

const INTIAL_STATE = { 
    articleTitle: '',
    picture: '',
    articleDescription: '',
    articleLink: '',
    socialLink: '',
    floor: null
}

export default (state = INTIAL_STATE, action) => {
    switch(action.type) {
        case RECIEVED_ARTIST_CONNECT_BY_FLOOR_AND_PRELOAD_STATE:
            return { ...state,
                articleTitle: action.payload[0].articleTitle,
                picture: action.payload[0].picture,
                articleDescription: action.payload[0].articleDescription,
                articleLink: action.payload[0].articleLink,
                socialLink: action.payload[0].socialLink,
                floor: action.payload[0].floor
            }
        case EDITING_ARTIST_CONNECT_TITLE:
            return {...state, articleTitle: action.payload }
        case EDITING_ARTIST_CONNECT_PICTURE:
            return {...state, picture: action.payload }
        case EDITING_ARTIST_CONNECT_DESCRIPTION:
            return {...state, articleDescription: action.payload }
        case EDITING_ARTIST_CONNECT_ARTICLE_LINK:
            return {...state, articleLink: action.payload }
        case EDITING_ARTIST_CONNECT_SOCIAL_LINK:
            return {...state, socialLink: action.payload }
        case ARTIST_CONNECT_EDITED:
            return { INTIAL_STATE }
        default:
            return state
    }
}