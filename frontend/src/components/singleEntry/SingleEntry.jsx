import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import getEntryService from '../../services/getEntryService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import Header from '../header/Header';
import './singleentry.css';

const SingleEntryPage = () => {
  const { entryId } = useParams();
  const { token } = useAuth();
  const [entry, setEntry] = useState(null);
  const [liked, setLiked] = useState(false); // Estado para controlar si se ha dado "like" o no

  useEffect(() => {
    // Hacer la solicitud para obtener la entrada concreta
    const fetchEntry = async () => {
      try {
        const response = await getEntryService(entryId, token);
        setEntry(response.data.entry);
      } catch (error) {
        console.error('Error al obtener la entrada:', error);
      }
    };

    fetchEntry();
  }, [entryId, token]);

  // Mostrar un mensaje de carga mientras se obtiene la entrada
  if (!entry) {
    return <p>Cargando entrada...</p>;
  }

  // Función para manejar el evento de clic en el botón de "like"
  const handleLike = () => {
    setLiked(!liked);
  };

  return (
    <div className='single'>
      <Header />
      <div className='divEntry'>
        <div className='single-entry'>
          <h2>{entry.title}</h2>
          <p>Descripción: {entry.description}</p>
          <p>
            Ubicación: {entry.city}, Distrito: {entry.district}
          </p>

          <div className='entry-photos'>
            {entry.photos.map((photo) => (
              <img
                key={photo.id}
                src={`http://localhost:8080/uploads/${photo.name}`}
                alt={`Imagen ${photo.id}`}
              />
            ))}
          </div>
          <p>Creado por: {entry.username}</p>
          {/* Botón de "like" */}
          <button
            className={`like-button ${liked ? 'liked' : ''}`}
            onClick={handleLike}
          >
            <FontAwesomeIcon icon={faHeart} />
            {liked ? entry.likes + 1 : entry.likes}
          </button>

          <p>Fecha de creación: {new Date(entry.createdAt).toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleEntryPage;
