import { combineReducers } from 'redux';
import { FETCH_PHOTOS_SUCCESS } from '../actions';

const defaultPhotos = []; // TODO: get from local storage
const photos = (state = defaultPhotos, action) => {
  switch (action.type) {
    case FETCH_PHOTOS_SUCCESS:
      return action.photos;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  photos,
});

export default rootReducer;
