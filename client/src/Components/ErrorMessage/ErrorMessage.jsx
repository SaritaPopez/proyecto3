import PropTypes from 'prop-types';

function ErrorMessage({ msg }) {
  return <p>{msg}</p>;
}

ErrorMessage.propTypes = {
  msg: PropTypes.string,
};
export default ErrorMessage;
