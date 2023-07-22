import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './footer.css';

function Footer() {
  const {token, logout} = useAuth();

  return (
    <footer>
      {token ? (
      <>
      <div className='container-entries'>
        <Link to='/message'>
        <img src='../src/assets/mas.png' alt='icono mas' />
        </Link>
      </div>
      <div className='container-home'>
        <Link to="/">
            <img src='../src/assets/home.png' alt='icono casa' />
        </Link>
      </div>
      <div className='container-logout'>
      <button className='button-logout' onClick={logout}>
          <img src='../src/assets/logout.png' alt='icono logout' />
        </button>
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
