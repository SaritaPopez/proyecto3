import NavBar from '../shared/navBar/NavBar';
import loho from '../../assets/loho.png';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './header.css';
function Header() {
  const { logout, user } = useAuth();
  return (
    <>
      <header className='headerr'>
          <Link className='linkStyle' to='/'>
          <img className='imgHeader' src='../src/assets/C-A.png' alt='logo web' />
          </Link>

        <nav className='navb'>
          {user && <p className='nameUser'>Hi @{user.username}!</p>}
        </nav>
      </header>

      <NavBar />
    </>
  );
}

export default Header;
