import React, { useState, useEffect } from 'react';
import './welcomemessage.css';

const WelcomePopup = ({ onClose }) => {
  const [welcomeText, setWelcomeText] = useState('');
  const welcomeMessage = 'Welcome to Our Website';
  const typingDelay = 100;
  const showDuration = 3000;

  useEffect(() => {
    let currentCharacter = 0;
    const typingInterval = setInterval(() => {
      setWelcomeText((prevText) => prevText + welcomeMessage[currentCharacter]);
      currentCharacter++;

      if (currentCharacter === welcomeMessage.length) {
        clearInterval(typingInterval);

        setTimeout(() => {
          onClose(); // Cerrar el popup después de mostrar el mensaje
        }, showDuration);
      }
    }, typingDelay);

    return () => clearInterval(typingInterval);
  }, [onClose]);

  return (
    <div className='welcome-popup'>
      <h1>{welcomeText}</h1>
    </div>
  );
};

export default WelcomePopup;
