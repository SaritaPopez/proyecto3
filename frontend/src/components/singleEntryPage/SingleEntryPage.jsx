import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import getEntryService from "../../services/getEntryService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Footer from "../../components/footer/Footer";
import Header from "../header/Header";
import flecha from "../../assets/flecha.png";
import flechaIzquierda from "../../assets/flechaIzquierda.png";
import likeEntryService from "../../services/likeEntryService";

import "./singleentrypage.css";

const SingleEntryPage = () => {
  const { entryId } = useParams();
  const { token } = useAuth();
  
  const [entry, setEntry] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0); // Agregar el estado para el índice actual
  const [resolved, setResolved] = useState(false);
  const [uploadedImages, setUploadedImages] = useState([]); //Para saber el estado de las imagenes

  useEffect(() => {
    // Hacer la solicitud para obtener la entrada concreta
    const fetchEntry = async () => {
      try {
        const response = await getEntryService(entryId, token);
        setEntry(response.data.entry);
      } catch (error) {
        console.error("Error al obtener la entrada:", error);
      }
    };

    fetchEntry();
  }, [entryId, token]);

  // Mostrar un mensaje de carga mientras se obtiene la entrada
  if (!entry) {
    return <p>Cargando entrada...</p>;
  }

  // Función para manejar el evento de clic en el botón de "like"
  const handleLike = async () => {
    // Seleccionamos el método.
    const method = Boolean(entry.likedByMe) ? "delete" : "post";

    // Agregamos o eliminamos el like en la base de datos.
    await likeEntryService(entry.id, method, token);

    // Nuevo total de likes.
    const likes = method === "post" ? entry.likes + 1 : entry.likes - 1;

    // Creo un objeto con los datos actualizados de la entrada.
    const updatedEntry = {
      ...entry,
      likedByMe: !Boolean(entry.likedByMe),
      likes,
    };

    console.log(updatedEntry);

    // Actualizamos los datos del servicio en el State.
    setEntry(updatedEntry);
  };

  // Función para cambiar al siguiente slide
  const nextSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + 1) % (entry.photos?.length || 1)
    );
  };

  // Función para cambiar al slide anterior
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? (entry.photos?.length || 1) - 1 : prevIndex - 1
    );
  };

  // Función para marcar el problema como resuelto usando fetch
  const markResolved = async () => {
    if (confirm("¿Deseas marcar el servicio como resuelto?")) {
      try {
        const response = await fetch(
          `http://localhost:8080/entries/${entryId}/resolved`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              Authorization: token,
            },
          }
        );
        const responseData = await response.json();
        if (!response.ok) {
          throw new Error("Error al marcar como resuelto");
        }
        if (responseData.data.resolved) {
          setResolved(true);
        }

        // Actualiza el estado local del problema de accesibilidad para reflejar que está resuelto
        setEntry((prevEntry) => ({
          ...prevEntry,
          resolved: true,
        }));
      } catch (error) {
        console.error("Error al marcar como resuelto:", error);
      }
    }
  };

  return (
    <>
      <Header />
      <div className="single">
        <div className="headertitle">
          <h2>{entry.title}</h2>
        </div>
        {entry.photos.length > 0 ? (
          <div className="carousel-container">
            <button className="carousel-button-iz" onClick={prevSlide}>
              <img src={flechaIzquierda} alt="flecha icono" />
            </button>

            <img
              src={`http://localhost:8080/${entry.photos[currentIndex].name}`}
              alt={`Imagen ${entry.photos[currentIndex].id}`}
            />

            <button className="carousel-button-de" onClick={nextSlide}>
              <img src={flecha} alt="flecha icono" />
            </button>
          </div>
        ) : <p>No hay fotos disponibles</p>}

        <div className="blue">div</div>
        <div className="parrafo">
          <h4>OVERVIEW</h4>
          <p>{entry.description}</p>
          <div className="district">
            <p>
              {entry.city}, Distrito: {entry.district}
            </p>
          </div>
          <p>Autor: {entry.username}</p>
          
          <button
            className={`like-button ${entry.likedByMe ? 'liked' : ''}`}
            onClick={handleLike}
          >
            <span>🎉</span>
            <span>Like</span>
          </button>
          <p>{entry.likes}</p>
          {!resolved && (
            <>
              <input
                type="checkbox"
                id="resolveService"
                onChange={markResolved}
                checked={entry.resolved}
                readOnly={entry.resolved}
              />
              <label htmlFor="resolveService">Resolver</label>
            </>
          )}
        </div>

        <Footer />
      </div>
    </>
  );
};

export default SingleEntryPage;
