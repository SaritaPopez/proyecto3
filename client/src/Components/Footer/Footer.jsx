import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './footer.css';

function Footer() {
  const { token, logout } = useAuth();

  return (
    <footer className='footerGeneral'>
      {token ? (
        <>
          <div className='container-entries'>
            <Link to='/message'>
              <img src='../src/Assets/plus.png' alt='icono mas' />
            </Link>
          </div>
          <div className='container-home'>
            <Link to='/'>
              <img src='../src/Assets/casa.png' alt='icono casa' />
            </Link>
          </div>
          <div className='container-logout'>
            <Link className='button-logout' onClick={logout}>
              <img src='../src/Assets/cerrar-sesion.png' alt='icono logout' />
            </Link>
          </div>
        </>
      ) : (
        <div className='container-home'>
          <Link to='/'>
            <img src='../src/Assets/home.png' alt='icono casa' />
          </Link>
        </div>
      )}
    </footer>
  );
}

export default Footer;
