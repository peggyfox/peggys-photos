import fetch from 'isomorphic-fetch';

export const UPDATE_PHOTOS = 'UPDATE_PHOTOS';
export const UPDATE_SELECTED_PHOTO = 'UPDATE_SELECTED_PHOTO';

function updatePhotos(photos) {
  localStorage.setItem('photos', JSON.stringify(photos));
  return {
    type: UPDATE_PHOTOS,
    photos,
  };
}

function fetchPhotos() {
  return dispatch =>
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
      .then(json => dispatch(updatePhotos(json)));
}

export function updateSelectedPhoto(photo) {
  return {
    type: UPDATE_SELECTED_PHOTO,
    photo,
  };
}

export function saveSelectedPhoto() {
  return (dispatch, getState) => {
    const selectedPhoto = getState().selectedPhoto;
    const photos = getState().photos.map((photo) => {
      if (selectedPhoto.id === photo.id) {
        return selectedPhoto;
      }
      return photo;
    });
    dispatch(updatePhotos(photos));
    return dispatch(updateSelectedPhoto(null));
  };
}

export function getPhotos() {
  return (dispatch, getState) => {
    if (!getState().photos.length) {
      return dispatch(fetchPhotos());
    }
    return null;
  };
}
