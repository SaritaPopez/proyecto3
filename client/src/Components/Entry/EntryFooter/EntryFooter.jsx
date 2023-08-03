import PropTypes from 'prop-types';
import useAuth from '../../../Hooks/useAuth';

const EntryFooter = ({
  entryId,
  owner,
  likes,
  likedByMe,
  toogleLike,
  deleteEntry,
  loading,
}) => {
  const { token } = useAuth() || {};

  // Crear o eliminar like de un tweet.
  const handleLike = async (e) => {
    try {
      // Si el div tiene la clase like la eliminamos de lo contrario la agregamos.
      e.target.classList.toggle('like');

      // Actualizamos los likes del tweet en la base de datos y en el State.
      await toogleLike(e, entryId, likedByMe);
    } catch (err) {
      alert(err.message);
    }
  };

  // Eliminar un tweet.
  const handleDeleteEntry = async () => {
    try {
      if (confirm('¿Deseas eliminar el tweet?')) {
        // Eliminamos el tweet de la base de datos y del State.
        deleteEntry(entryId);
      }
    } catch (err) {
      alert(err.message);
    }
  };
  return (
    <footer className='footerr'>
      <div>
        <div
          className={`heart ${likedByMe && 'like'}`}
          onClick={(e) => handleLike(e)}
        ></div>
      </div>
      {token && owner === 1 && (
        <button onClick={() => handleDeleteEntry()} disabled={loading}>
          Eliminar
        </button>
      )}
    </footer>
  );
};

EntryFooter.propTypes = {
  entryId: PropTypes.number,
  owner: PropTypes.any,
  likedByMe: PropTypes.any,
  likes: PropTypes.number,
  toogleLike: PropTypes.func,
  deleteEntry: PropTypes.func,
  loading: PropTypes.bool,
};

export default EntryFooter;

// he quitado los likes de las entries en la Home <p>{likes}</p>, solo salen si pinchas la entry
