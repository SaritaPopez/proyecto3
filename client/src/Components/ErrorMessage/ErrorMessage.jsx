import PropTypes from 'prop-types';

import './errorMessage.css';

function ErrorMessage({ msg }) {
  return <p className='errorMessage'>{msg}</p>;
}

ErrorMessage.propTypes = {
  msg: PropTypes.string,
};
export default ErrorMessage;
