import PropTypes from 'prop-types';

function ErrorMessage({ msg }) {
  return <p>ErrorMessage: {msg}</p>;
}

ErrorMessage.propTypes = {
  msg: PropTypes.string,
};
export default ErrorMessage;
