import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPhotos, updateSelectedPhoto } from '../actions';
import { photoPropType } from '../prop-types';

class Photos extends Component {

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getPhotos());
  }

  handleClick(photo) {
    const { dispatch } = this.props;
    dispatch(updateSelectedPhoto(photo));
  }

  render() {
    const { photos } = this.props;
    const photoGrid = [];
    const photosPerRow = 5;
    const maxPhotos = 25;
    for (let i = 0; i < maxPhotos; i += photosPerRow) {
      photoGrid.push(photos.slice(i, i + photosPerRow));
    }

    return (
      <div>
        {photoGrid.map((row, rIndex) =>
          // create a uniq key
          (<div key={row.map(photo => photo.id).join()}>
            {row.map((photo, pIndex) =>
              (<a
                key={photo.id}
                role="link"
                tabIndex={(rIndex * photosPerRow) + pIndex}
                onClick={() => this.handleClick(photo)}
              >
                <img src={photo.thumbnailUrl} alt={photo.title} />
              </a>),
            )}
          </div>),
        )}
      </div>
    );
  }
}

Photos.propTypes = {
  photos: PropTypes.arrayOf(photoPropType).isRequired,
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps({ photos }) {
  return { photos };
}

export default connect(mapStateToProps)(Photos);
