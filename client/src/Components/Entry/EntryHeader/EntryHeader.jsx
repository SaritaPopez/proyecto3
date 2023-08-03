import PropTypes from 'prop-types';
import '../../Entry/entry.css';
import './entryheader.css';
const EntryHeader = ({ username, createdAt }) => {
  return (
    <header className='headerEntryWrapper'>
      <div className='imageAdmi'>
        <img
          src='https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt='Imagen de perfil'
        />
      </div>
      <p className='username'>Autor: @{username}</p>
      <time>
        Creado el día:
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
