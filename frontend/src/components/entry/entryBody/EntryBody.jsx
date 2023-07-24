import PropTypes from 'prop-types';
import './entrybody.css';
const EntryBody = ({ description, photos }) => {
  console.log('Nombre de la imagen:', photos[0]?.name);
  return (
    <div>
      <p className='description'>{description}</p>
      <div className='phot'>
        {photos.length > 0 && (
          <img
            src={`http://localhost:8080/uploads/${photos[0]?.name}`}
            alt='Imagen'
          />
        )}
      </div>
    </div>
  );
};

EntryBody.propTypes = {
  description: PropTypes.string,
  photos: PropTypes.array, // Cambio el tipo de datos a array
};

export default EntryBody;
