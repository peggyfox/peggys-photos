import fetch from 'isomorphic-fetch';

export const FETCH_PHOTOS_SUCCESS = 'FETCH_PHOTOS_SUCCESS';

function fetchSuccess(photos) {
  return {
    type: FETCH_PHOTOS_SUCCESS,
    photos,
  };
}

function fetchError(error) {
  console.log('caught an error', error);
}

function fetchPhotos() {
  return dispatch =>
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
      .then(json => dispatch(fetchSuccess(json)))
      .catch(error => fetchError(error));
}

export function getPhotos() {
  return (dispatch, getState) => {
    if (!getState().photos.length) {
      return dispatch(fetchPhotos());
    }
  };
}


