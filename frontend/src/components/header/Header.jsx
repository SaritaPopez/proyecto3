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
        <h1 className='entryh1'>
          <Link className='linkStyle' to='/'>
            Ciudad Accesible
          </Link>
        </h1>

        <nav className='navb'>
          {user && <p className='nameUser'>Hi @{user.username}!</p>}
        </nav>
      </header>

      <NavBar />
    </>
  );
}

export default Header;
