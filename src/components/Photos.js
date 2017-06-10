import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { getPhotos } from '../actions';

class Photos extends Component {

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getPhotos());
  }

  render() {
    const { photos } = this.props;
    const photoGrid = [];
    const maxPerRow = 5;
    const maxPhotos = 25;
    for (let i = 0; i < maxPhotos; i += maxPerRow) {
      photoGrid.push(photos.slice(i, i + maxPerRow));
    }
    return (
      <div>
        {photoGrid.map(row =>
          (<div>
            {row.map(photo =>
              <img src={photo.thumbnailUrl} alt="thumbnail-placeholder" />,
            )}
          </div>),
        )}
      </div>
    );
  }
}

Photos.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps({ photos }) {
  return { photos };
}

export default connect(mapStateToProps)(Photos);
