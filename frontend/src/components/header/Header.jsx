import NavBar from '../shared/navBar/NavBar';
import './header.css';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
function Header() {
  const { token, logout, user } = useAuth();
  return (
    <>
      <header>
        <h1>
          <Link to='/'>Ciudad Accesible</Link>
        </h1>
        <nav>
          {user && <p>@{user.username}</p>}

          {token && (
            <>
              <div className='buttonB'>
                <Link to='/message'>Mensaje</Link>
              </div>
              <div className='buttonB' onClick={() => logout()}>
                <p>Cerrar Sesión</p>
              </div>
            </>
          )}
        </nav>
      </header>
      <NavBar />
    </>
  );
}

export default Header;
