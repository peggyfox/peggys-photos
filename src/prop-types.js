import PropTypes from 'prop-types';

// eslint-disable-next-line import/prefer-default-export
export const photoPropType = PropTypes.shape({
  albumId: PropTypes.number,
  id: PropTypes.number,
  title: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
  thumbnailUrl: PropTypes.string,
});
