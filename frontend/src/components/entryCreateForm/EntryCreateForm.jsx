import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import entryCreateService from '../../services/createEntryService';
import Spinner from '../Spinner/Spinner';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

const EntryCreateForm = ({ token }) => {
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

  return (
    <form onSubmit={handleSubmit}>
      <h2>Escribe tu entrada 🤔</h2>

      <input type='file' onChange={(e) => setFile(e.target.files[0])} />

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        minLength='10'
        autoFocus
        required
      />

      <button disabled={loading}>Enviar</button>

      {loading && <Spinner />}

      {errMsg && <ErrorMessage msg={errMsg} />}
    </form>
  );
};

EntryCreateForm.propTypes = {
  token: PropTypes.string,
};

export default EntryCreateForm;
