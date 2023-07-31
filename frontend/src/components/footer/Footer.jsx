import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './footer.css';

function Footer() {
  const {token, logout} = useAuth();

  return (
    <footer className='footerGeneral'>
      {token ? (
      <>
      <div className='container-entries'>
        <Link to='/message'>
        <img src='../src/assets/plus.png' alt='icono mas' />
        </Link>
      </div>
      <div className='container-home'>
        <Link to="/">
            <img src='../src/assets/casa.png' alt='icono casa' />
        </Link>
      </div>
      <div className='container-logout'>
      <Link className='button-logout' onClick={logout}>
          <img src='../src/assets/cerrar-sesion.png' alt='icono logout' />
        </Link>
      </div>
      </>
    ) : (
      <div className='container-home'>
        <Link to="/">
            <img src='../src/assets/home.png' alt='icono casa' />
        </Link>
      </div>
      )}
    </footer>
  );
}

export default Footer;
