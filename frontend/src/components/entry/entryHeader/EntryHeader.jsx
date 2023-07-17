import PropTypes from 'prop-types';
import '../../entry/entry.css';
const EntryHeader = ({ username, createdAt }) => {
  return (
    <header className='headerEntry'>
      <p>@{username}</p>
      <time>
        {new Date(createdAt).toLocaleDateString('es-ES', {
          hour: '2-digit',
          minute: '2-digit',
          day: '2-digit',
          month: '2-digit',
          year: '2-digit',
        })}
      </time>
    </header>
  );
};

EntryHeader.propTypes = {
  username: PropTypes.string,
  createdAt: PropTypes.string,
};

export default EntryHeader;
