import './markresolved.css';
import { useState } from 'react';

function Markresolved({ entryId, token, setEntry }) {
  const [isLoading, setIsLoading] = useState(false);

  const handleMarkResolved = async () => {
    try {
      // Realizar una solicitud PUT al backend para marcar el problema como resuelto
      setIsLoading(true); // Mostrar indicador de carga mientras se realiza la solicitud
      const response = await fetch(
        `http://localhost:8080/api/entries/${entryId}/resolve`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        // Si la respuesta del servidor no es exitosa, manejar el error aquí
        throw new Error('Error al marcar como resuelto');
      }

      // Si la solicitud se realizó con éxito, actualiza el estado local del problema de accesibilidad para reflejar que está resuelto.
      setEntry((prevEntry) => ({
        ...prevEntry,
        isResolved: true,
      }));
    } catch (error) {
      console.error('Error al marcar como resuelto:', error);
    } finally {
      setIsLoading(false); // Ocultar indicador de carga cuando la solicitud finalice (ya sea con éxito o error)
    }
  };

  return (
    <div class='wrap'>
      {isLoading ? (
        <p>Marcar como resuelto...</p>
      ) : (
        <button onClick={handleMarkResolved} disabled={entry.isResolved}>
          {entry.isResolved ? 'Resuelto' : 'Marcar como resuelto'}
        </button>
      )}
    </div>
  );
}

export default Markresolved;
