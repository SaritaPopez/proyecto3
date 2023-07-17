import { Link } from 'react-router-dom';
import './footer.css';

function Footer() {
  return (
    <footer>
      <div className='container-home'>
        <Link href="http://www.google.es">
            <img src='src/assets/home.png' alt='icono casa' />
        </Link>
      </div>
      <div className='container-entries'>
        <Link to='newEntries'>
        <img src='src/assets/mas.png' alt='icono mas' />
        </Link>
      </div>
      <div className='container-user'>
        <Link to='users'>
        <img src='src/assets/perfil.png' alt='icono perfil' />
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
