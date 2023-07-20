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
          <Link className='linkStyle' to='/'>
            Ciudad Accesible
          </Link>
        </h1>
        {/* <nav className='navb'>
          {user && <p>@{user.username}</p>}
        </nav> */}
      </header>
      <NavBar />
    </>
  );
}

export default Header;
