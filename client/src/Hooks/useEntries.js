import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import deleteEntryService from '../Services/deleteEntryService';
import likeEntryService from '../Services/likeEntryService';
import useAuth from './useAuth';

const useEntries = () => {
  const { token } = useAuth();
  //En un principio no hay entradas
  const [entries, setEntries] = useState([]);
  //Estado para los errores
  const [errMess, setErrMess] = useState('');
  //Estado para los params
  const [searchParams, setSearchParams] = useSearchParams();
  //Estado para detener búsquedas
  const [loading, setLoading] = useState(false);

  //1º Buscamos las entries creando useEffect que se ejecute al inicio del render
  useEffect(() => {
    const fetchEntries = async () => {
      try {
        //Cuando empiece la app...
        setLoading(true);
        //Convertimos params a string
        const res = await fetch(
          `http://localhost:8080/entries?${searchParams.toString()}`,
          {
            headers: token ? { Authorization: token } : {},
          }
        );
        //Obtenemos body
        const body = await res.json();

        //Si la respuesta ha fallado...
        if (!res.ok) {
          throw new Error(body.message);
        }
        //De lo contrario...
        setEntries(body.data.entries);
      } catch (err) {
        setErrMess(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchEntries();
    //Si algun user envia nueva keyword quiero que se vuelvan a buscar los params
  }, [searchParams, token]);

  // Función que agrega o elimina un like.
  const toogleLike = async (e, entryId, likedByMe) => {
    try {
      setLoading(true);

      // Actualizamos el like en la base de datos.
      await likeEntryService(entryId, likedByMe, token);

      // Ahora debemos actualizar el like en el State.
      setEntries(
        entries.map((entry) => {
          // Vamos a modificar únicamente la entrada cuyo id recibamos como argumento.
          if (entry.id === entryId) {
            // Comprobamos si el div donde aparece el corazón tiene la clase like.
            const hasLikeClass = e.target.classList.contains('like');

            // Si tiene la clase like aumentamos los likes de esta entrada en +1, de lo contrario
            // los decrementamos en -1.
            if (hasLikeClass) {
              entry.likes++;
            } else {
              entry.likes--;
            }

            // Invertimos el valor de likedByMe.
            entry.likedByMe = !entry.likedByMe;
          }

          // Retornamos entrada actual.
          return entry;
        })
      );
    } finally {
      setLoading(false);
    }
  };

  // Función que elimina una entrada del State.
  const deleteEntry = async (entryId) => {
    try {
      setLoading(true);

      // Eliminamos entrada  de la base de datos.
      await deleteEntryService(entryId, token);

      // Eliminamos entrada del State.
      setEntries(entries.filter((entry) => entry.id !== entryId));
    } finally {
      setLoading(false);
    }
  };
  return {
    entries,
    searchParams,
    setSearchParams,
    errMess,
    loading,
    toogleLike,
    deleteEntry,
  };
};

export default useEntries;
