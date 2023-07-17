import PropTypes from 'prop-types';

const EntryBody = ({ description, photos }) => {
  console.log('Nombre de la imagen:', photos[0]?.name);
  return (
    <div>
      <p>{description}</p>

      {photos.length > 0 && (
        <img
          src={`http://localhost:8080/uploads/${photos[0]?.name}`}
          alt='Imagen'
        />
      )}
    </div>
  );
};

EntryBody.propTypes = {
  description: PropTypes.string,
  photos: PropTypes.array, // Cambio el tipo de datos a array
};

export default EntryBody;
