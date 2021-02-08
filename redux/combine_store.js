import { combineReducers } from 'redux';

// import reducers
import manga from './reducers/manga_reducer';

export default combineReducers({ manga_state : manga });