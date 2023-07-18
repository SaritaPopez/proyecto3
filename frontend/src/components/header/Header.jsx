import NavBar from '../shared/navBar/NavBar';

import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './header.css';
function Header() {
  const { logout, user } = useAuth();
  return (
    <>
      <header>
        <h1>
          <Link to='/'>Ciudad Accesible</Link>
        </h1>
        <nav className='navb'>
          {user && <p>@{user.username}</p>}

          <>
            <div className='buttonB'>
              <Link to='/message'>Mensaje</Link>
            </div>
            <div className='buttonBA' onClick={() => logout()}>
              <img
                src='https://cdn-icons-png.flaticon.com/512/1250/1250678.png'
                alt='imagen logout'
              />
            </div>
          </>
        </nav>
      </header>
      <NavBar />
    </>
  );
}

export default Header;
