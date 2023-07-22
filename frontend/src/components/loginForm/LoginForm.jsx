import { useState } from 'react';
import PropTypes from 'prop-types';
import Spinner from '../Spinner/Spinner';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import loginService from '../../services/loginService';

import './loginform.css';
function LoginForm({ login }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errMess, setErrMess] = useState('');
  const [loading, setLoading] = useState(false);

  //Función que maneja el envío del form
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      setLoading(true);

      const token = await loginService(email, password);

      //Si llegamos hasta aqui quiere decir que usuario logueado.Redireccionamos a EntrySearch. Guardamos token en localStorage
      login(token);
    } catch (error) {
      setErrMess(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <label htmlFor='email'>Email:</label>
      <input
        type='email'
        id='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        minLength='8'
        maxLength='100'
        required
      />
      <label htmlFor='password'>Password:</label>
      <input
        type='password'
        id='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        minLength='8'
        maxLength='100'
        required
      />
      <button>Loguearse</button>
      {loading && <Spinner />}
      {errMess && <ErrorMessage msg={errMess} />}
    </form>
  );
}

LoginForm.propTypes = {
  login: PropTypes.func,
};
export default LoginForm;
