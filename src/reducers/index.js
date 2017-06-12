import { combineReducers } from 'redux';
import { UPDATE_PHOTOS, UPDATE_SELECTED_PHOTO } from '../actions';

const photos = (state = [], action) => {
  switch (action.type) {
    case UPDATE_PHOTOS:
      return action.photos;
    default:
      return state;
  }
};

const selectedPhoto = (state = null, action) => {
  switch (action.type) {
    case UPDATE_SELECTED_PHOTO:
      return action.photo;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  photos,
  selectedPhoto,
});

export default rootReducer;
