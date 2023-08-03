import NavBar from '../Shared/navBar/NavBar';
import { FaBars } from 'react-icons/fa';

import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './header.css';
function Header() {
  const { logout, user } = useAuth();
  return (
    <>
      <header className='headerr'>
        <div className='header-container'>
          <Link to='/contact' className='contacts'>
            <FaBars />
          </Link>
          <h1 className='h1Header'>Ciudad Accesible</h1>
        </div>
        <Link className='linkStyle' to='/'>
          <img
            className='imgHeader'
            src='../src/Assets/C-A.svg'
            alt='logo web'
          />
        </Link>
        <nav className='navb'>
          {user && <p className='nameUser'>Hi @{user.username}!</p>}
        </nav>
      </header>

      <NavBar user={user} logout={logout} />
    </>
  );
}

export default Header;