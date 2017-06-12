import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { saveSelectedPhoto, updateSelectedPhoto } from '../actions';
import { photoPropType } from '../prop-types';

class SelectedPhoto extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const selectedPhoto = Object.assign({}, this.props.selectedPhoto, { description: e.target.value });
    const { dispatch } = this.props;
    dispatch(updateSelectedPhoto(selectedPhoto));
  }

  handleSubmit(e) {
    e.preventDefault();
    const { dispatch } = this.props;
    dispatch(saveSelectedPhoto());
  }

  render() {
    const { selectedPhoto } = this.props;
    return (
      <div className="modal-container">
        { selectedPhoto &&
          <div className="modal-content">
            <img src={selectedPhoto.url} alt={selectedPhoto.title} />
            <h3>{selectedPhoto.title}</h3>
            <form onSubmit={this.handleSubmit}>
              <textarea value={selectedPhoto.description} placeholder="Enter a description" name="description" onChange={this.handleChange} />
              <br />
              <input type="submit" value="Save" />
            </form>
          </div>
        }
      </div>
    );
  }
}

SelectedPhoto.propTypes = {
  selectedPhoto: photoPropType, // eslint-disable-line react/require-default-props
  dispatch: PropTypes.func.isRequired,
};


function mapStateToProps({ selectedPhoto }) {
  return { selectedPhoto };
}

export default connect(mapStateToProps)(SelectedPhoto);
