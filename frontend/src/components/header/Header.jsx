import NavBar from '../shared/navBar/NavBar';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './header.css';
function Header() {
  const { logout, user } = useAuth();
  return (
    <>
      <header className='headerr'>
          <Link className='linkStyle' to='/'>
          <img className='imgHeader' src='../src/assets/C-A.svg' alt='logo web' />
          </Link>
        <h1 className='h1Header'>Ciudad Accesible</h1>
        <nav className='navb'>
          {user && <p className='nameUser'>Hi @{user.username}!</p>}
        </nav>
      </header>

      <NavBar />
    </>
  );
}

export default Header;
