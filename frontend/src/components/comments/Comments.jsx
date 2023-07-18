import { useState, useEffect } from 'react';
import './comments.css';
function getRandomTime() {
  const randomHour = Math.floor(Math.random() * 24)
    .toString()
    .padStart(2, '0');
  const randomMinute = Math.floor(Math.random() * 60)
    .toString()
    .padStart(2, '0');
  return `${randomHour}:${randomMinute}`;
}
function Comments() {
  //Estado que almacena la url de la foto user
  const [userPhoto, setUserPhoto] = useState('');
  //Estado que almacena el nombre
  const [userName, setUserName] = useState('');
  //Estado para la hora
  const [randomTime, setRandomTime] = useState('');

  //useEffect para realizar solicitud a la api
  useEffect(() => {
    fetch('https://randomuser.me/api/')
      .then((response) => response.json())
      //Accedemos a la propiedad results[0] del obj data para obtener info user
      .then((data) => {
        const { picture, name } = data.results[0];
        //Guardamos url de foto en estado
        setUserPhoto(picture.large);
        setUserName(`${name.first} ${name.last}`);
        setRandomTime(getRandomTime());
      })
      .catch((error) => {
        console.error('Error fetching user photo:', error);
      });
  }, []);

  return (
    <div className='container-block'>
      <div className='userPhoto'>
        <img src={userPhoto} alt='user photo' />
      </div>
      <div className='userInfo'>
        <h2>{userName}</h2>
        <p>
          Escribió a las
          <span>{randomTime}</span>
        </p>
      </div>
      <div className='border-container'>
        ¡Esta web es realmente útil para nuestra ciudad! Gracias a ella ahora
        podemos denunciar y visualizar lugares con problemas de accesibilidad en
        nuestra comunidad.¡Excelente trabajo!
      </div>
    </div>
  );
}
export default Comments;
