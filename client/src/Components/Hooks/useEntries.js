import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const useEntries = () => {
  const [entries, setEntries] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);

  // realizamos peticion para obtener las entries
  useEffect(() => {
    const fetchEntries = async () => {
      try {
        setLoading(true);

        const res = await fetch(
          `http://localhost:8080/entries?${searchParams.toString()}`
          // los searchparams son los queryparams.
        );

        const body = await res.json();

        if (!res.ok) {
          throw new Error(body.message);
        }
        setEntries(body.data.entries);
      } catch (err) {
        setErrorMessage(err.message);
      } finally {
        setLoading(false); //evitamos que el usuario pueda darle otra vez al boton mientras se envia la petición.
      }
    };
    fetchEntries();
  }, [searchParams]);

  // funcion que agrega o elimina una entrie

  // funcion que elimina la entrie

  return {
    entries,
    searchParams,
    setSearchParams,
    errorMessage,
    loading,
  };
};

export default useEntries;
