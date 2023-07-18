import Header from '../header/Header';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import entryCreateService from '../../services/createEntryService';
import Spinner from '../Spinner/Spinner';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import './admin.css';

const Admin = ({ token }) => {
  const navigate = useNavigate();

  const [text, setText] = useState('');
  const [file, setFile] = useState();
  const [errMsg, setErrMsg] = useState('');
  const [loading, setLoading] = useState(false);
  // Función que maneja el envío del formulario.
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      setLoading(true);

      await entryCreateService(text, file, token);

      // Redireccionamos a la página principal.
      navigate('/');
    } catch (err) {
      setErrMsg(err.message);
    } finally {
      setLoading(false);
    }
  };

  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString();
  const formattedTime = currentDate.toLocaleTimeString();

  return (
    <div>
      <Header />
      <div className='Admin'>
        <div className='imgProfile'>
          <div className='contaniner1'>
            <img
              src='https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              alt='Imagen de perfil'
            />

            <p>Administrador</p>
            <p>San Diego, Ca</p>
          </div>
          <div className='container2'>
            <p>
              ¡Haz tu ciudad más <br></br>accesible hoy!
            </p>

            <form onSubmit={handleSubmit} className='form-container'>
              <h2>Escribe tu entrada </h2>

              <textarea
                className='textarea'
                value={text}
                onChange={(e) => setText(e.target.value)}
                minLength='10'
                autoFocus
                required
              />
              <input type='file' onChange={(e) => setFile(e.target.files[0])} />

              <button disabled={loading}>Enviar</button>

              {loading && <Spinner />}

              {errMsg && <ErrorMessage msg={errMsg} />}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
Admin.propTypes = {
  token: PropTypes.string,
};

export default Admin;
