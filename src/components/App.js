import React from 'react';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import configureStore from '../configure_store';
import Header from './Header';
import Photos from './Photos';
import SelectedPhoto from './SelectedPhoto';
import { photoPropType } from '../prop-types';

function App(props) {
  const store = configureStore(props.preloadedState);
  return (
    <Provider store={store} >
      <div className="container">
        <Header />
        <Photos />
        <SelectedPhoto />
      </div>
    </Provider>
  );
}

App.propTypes = {
  preloadedState: PropTypes.shape({
    photos: PropTypes.arrayOf(photoPropType).isRequired,
    selectedPhoto: photoPropType,
  }).isRequired,
};

export default App;
