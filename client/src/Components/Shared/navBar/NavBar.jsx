import { NavLink } from 'react-router-dom';

import './navbar.css';

function NavBar({ user, logout }) {
  return (
    <nav className='nav-bar'>
      { !user && <>
        <div className='container-signup'>
        <NavLink className='linkStyle' to='/register'>
          <p> Sign up</p>
        </NavLink>
      </div>
      <div className='container-login'>
        <NavLink className='linkStyle' to='/login'>
          <p>login</p>
        </NavLink>
      </div>
      </>}
      { user && <>
      <div className='container-entries'>
        <NavLink className='linkStyle' to='/message'>
          <p>Crear entrada</p>
        </NavLink>
      </div>
      <div className='container-logout'>
        <NavLink className='button-logout' onClick={logout}>
          <p>Cerrar sesión</p>
        </NavLink>
      </div>
      </>}
    </nav>
  );
}

export default NavBar;
