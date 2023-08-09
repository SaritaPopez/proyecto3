import React, { useState, useEffect } from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import EntriesSearch from '../../Components/EntriesSearch/EntriesSearch';
import WelcomePopup from '../../Components/WelcomeMessage/WelcomeMessage';
import './home.css';

function Home() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const hasShownWelcome = sessionStorage.getItem('hasShownWelcome');
    if (!hasShownWelcome) {
      setShowPopup(true);
      sessionStorage.setItem('hasShownWelcome', 'true');
    }
  }, []);

  return (
    <div className='home'>
      <Header />

      {showPopup && <WelcomePopup onClose={() => setShowPopup(false)} />}

      <section className='section-home'>
        <h2>Discover your City </h2>
        <p>Discover accessible cities below</p>
      </section>

      <EntriesSearch />

      <Footer />
    </div>
  );
}

export default Home;
