import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import getEntryService from '../../services/getEntryService';

const SingleEntryPage = () => {
  const { entryId } = useParams();
  const { token } = useAuth();
  const [entry, setEntry] = useState(null);

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

  return (
    <div>
      <h2>{entry.title}</h2>
      <p>Descripción: {entry.description}</p>
      <p>
        Ubicación: {entry.city}, Distrito: {entry.district}
      </p>
      {/* Aquí puedes mostrar las imágenes de la entrada */}
      {entry.photos.map((photo) => (
        <img
          key={photo.id}
          src={`http://localhost:8080/uploads/${photo.name}`}
          alt={`Imagen ${photo.id}`}
        />
      ))}
      <p>Creado por: {entry.username}</p>
      <p>Likes: {entry.likes}</p>
      <p>Fecha de creación: {new Date(entry.createdAt).toLocaleString()}</p>
    </div>
  );
};

export default SingleEntryPage;
