import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import getEntryService from '../../Services/getEntryService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import flecha from '../../Assets/flecha.png';
import flechaIzquierda from '../../Assets/flechaIzquierda.png';
import likeEntryService from '../../Services/likeEntryService';

import './singleentrypage.css';

const SingleEntryPage = () => {
  const { entryId } = useParams();
  const { token } = useAuth();

  const [entry, setEntry] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [resolved, setResolved] = useState(false);
  const [uploadedImages, setUploadedImages] = useState([]);
  const [showHearts, setShowHearts] = useState(false);

  useEffect(() => {
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

  const handleLike = async () => {
    const method = Boolean(entry?.likedByMe) ? 'delete' : 'post';

    await likeEntryService(entry.id, method, token);

    const likes = method === 'post' ? entry.likes + 1 : entry.likes - 1;

    const updatedEntry = {
      ...entry,
      likedByMe: !Boolean(entry?.likedByMe),
      likes,
    };

    setEntry(updatedEntry);
    setShowHearts(true);
  };

  useEffect(() => {
    if (showHearts) {
      const timer = setTimeout(() => {
        setShowHearts(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [showHearts]);

  const nextSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + 1) % (entry?.photos?.length || 1)
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? (entry?.photos?.length || 1) - 1 : prevIndex - 1
    );
  };

  const markResolved = async () => {
    if (confirm('¿Deseas marcar el servicio como resuelto?')) {
      try {
        const response = await fetch(
          `http://localhost:8080/entries/${entryId}/resolved`,
          {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
              Authorization: token,
            },
          }
        );
        const responseData = await response.json();
        if (!response.ok) {
          throw new Error('Error al marcar como resuelto');
        }
        if (responseData.data.resolved) {
          setResolved(true);
        }

        setEntry((prevEntry) => ({
          ...prevEntry,
          resolved: true,
        }));
      } catch (error) {
        console.error('Error al marcar como resuelto:', error);
      }
    }
  };

  return (
    <>
      <Header />
      <div className='single'>
        <div className='headertitle'>{entry && <h2>{entry.title}</h2>}</div>
        {entry?.photos.length > 0 ? (
          <div className='carousel-container'>
            <button className='carousel-button-iz' onClick={prevSlide}>
              <img src={flechaIzquierda} alt='flecha icono' />
            </button>

            <img className='imagenCarruselEntry'
              src={`http://localhost:8080/${entry?.photos[currentIndex]?.name}`}
              alt={`Imagen ${entry?.photos[currentIndex]?.id}`}
            />

            <button className='carousel-button-de' onClick={nextSlide}>
              <img src={flecha} alt='flecha icono' />
            </button>
          </div>
        ) : (
          <img
          className='imagenCiudad'
          src='https://images.pexels.com/photos/380283/pexels-photo-380283.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        />
        )}

        <div className='blue'>div</div>
        <div className='parrafo'>
          <h4>OVERVIEW</h4>
          <p>{entry && entry.description}</p>
          <div className='district'>
            <p> Ciudad: {entry?.city} </p>
            <p> Barrio: {entry?.neightborhood}</p>
            <p> Distrito: {entry?.district}</p>
          </div>
          <p>Autor: {entry && entry.username}</p>

          <div className='apartadoLike'>
          <button
            className={`like-button ${entry?.likedByMe ? 'liked' : ''}`}
            onClick={handleLike}
          >
            {showHearts ? (
              <span className='heart-animation'>
                <FontAwesomeIcon icon={faHeart} />
              </span>
            ) : (
              <span>❤️</span>
            )}
            <span></span>
          </button>
          <p>{entry?.likes}</p>
          </div>

          {!resolved && (
            <>
              <input
                type='checkbox'
                id='resolveService'
                onChange={markResolved}
                checked={entry?.resolved}
                readOnly={entry?.resolved}
              />
              <label htmlFor='resolveService'>Resuelto</label>
            </>
          )}
        </div>

        <Footer />
      </div>
    </>
  );
};

export default SingleEntryPage;
