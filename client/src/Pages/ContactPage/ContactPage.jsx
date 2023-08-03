import Ana from '../../Assets/Ana.png';
import Sara from '../../Assets/Sara.jpeg';
import javi from '../../Assets/javi.jpeg';
import { Link } from 'react-router-dom';
import './contactpage.css';

function ContactPage() {
  return (
    <div className='fondop'>
      <Link className='linkStyle' to='/'>
        <img
          className='imgHeaderContact'
          src='../src/Assets/C-A.svg'
          alt='logo web'
        />
      </Link>
      <section className='containerContact'>
        <h2 className='titleContact'>
          <span className='primary'>Meet our team</span>
        </h2>
        <div className='gallery-wrapper'>
          <figure className='gallery-item'>
            <img src={Ana} alt='mi foto' className='item-image' />
            <figcaption className='item-description'>
              <h2 className='name'>Ana Pérez</h2>
              <span className='role'> Web Developer Junior</span>
            </figcaption>
          </figure>
          <figure className='gallery-item'>
            <img src={Sara} alt='mi foto' className='item-image' />
            <figcaption className='item-description'>
              <h2 className='name'>Sara López</h2>
              <span className='role'> Web Developer Junior</span>
            </figcaption>
          </figure>
          <figure className='gallery-item'>
            <img src={javi} alt='mi foto' className='item-image' />
            <figcaption className='item-description'>
              <h2 className='name'>Javier Romero</h2>
              <span className='role'> Web Developer Junior</span>
            </figcaption>
          </figure>
        </div>
      </section>
    </div>
  );
}

export default ContactPage;
