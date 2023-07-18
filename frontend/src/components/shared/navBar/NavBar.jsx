import { NavLink } from 'react-router-dom';

import './navbar.css';

function NavBar() {
  return (
    <nav className='nav-bar'>
      <div className='container-signup'>
        <NavLink className='linkStyle' to='register'>
          <p> Sign up</p>
        </NavLink>
      </div>
      <div className='container-login'>
        <NavLink className='linkStyle' to='login'>
          <p>login</p>
        </NavLink>
      </div>
    </nav>
  );
}

export default NavBar;
