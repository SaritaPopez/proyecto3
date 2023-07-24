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
    <div className='login-container'>
      <div className='image-container'>
        <img src='https://tipsparatuviaje.com/wp-content/uploads/2019/11/rotterdam-ho.jpg' />
      </div>

      <form className='formLogin' onSubmit={handleSubmit}>
        <h2 className='h2Login'>Login</h2>
        <label htmlFor='email'>Email: </label>
        <input className='inputLogin'
          type='email'
          id='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          minLength='8'
          maxLength='100'
          required
        />
        <label className='labelForm' htmlFor='password'>Password:</label>
        <input className='inputLogin'
          type='password'
          id='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          minLength='8'
          maxLength='100'
          required
        />
        <button className='buttonLogin' >Loguearse</button>
        {loading && <Spinner />}
        {errMess && <ErrorMessage msg={errMess} />}
      </form>
    </div>
  );
}

LoginForm.propTypes = {
  login: PropTypes.func,
};
export default LoginForm;
