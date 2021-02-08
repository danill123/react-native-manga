// https://kitsu.io/api/edge/manga?page[limit]=10&page[offset]=0
import { FETCH_MANGA, FETCH_MANGA_ERROR } from '../constvar';

export const get_manga = (endpoint) => {
    return async(dispatch) => {
        
        try {
            let endpoint_api = await fetch(`${endpoint}`);
            let json_data = await endpoint_api.json();
            dispatch({ type: FETCH_MANGA , next_endpoint : json_data["links"]["next"], list_data : json_data["data"]});
        } catch (error) {
            dispatch({ type: FETCH_MANGA_ERROR });
        }
    }
}