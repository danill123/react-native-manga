import { FETCH_MANGA, FETCH_MANGA_ERROR } from '../constvar';

const initialState = {
    endpoint : 'https://kitsu.io/api/edge/manga?page[limit]=10&page[offset]=0',
    list_data: [],
    error: false
}

export default function(state=initialState, action) {
    switch (action.type) {
        case FETCH_MANGA: 
            let list = state.list_data.concat(action.list_data);
            return { ...state, endpoint: action.next_endpoint, error : false, list_data: list }
        case FETCH_MANGA_ERROR:
            return { ...state, error : true }
        default:
            return { ...state }
    }
}