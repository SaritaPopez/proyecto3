import { useState } from 'react';
import Spinner from '../Spinner/Spinner';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import registerService from '../../services/registerService';
import { useNavigate } from 'react-router-dom';

import './registerForm.css';

function RegisterForm() {
  const navigate = useNavigate();
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errMess, setErrMess] = useState('');
  const [loading, setLoading] = useState(false);

  //Función que maneja el envío del form
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      setLoading(true);

      await registerService(username, email, password);

      //Si llegamos hasta aqui quiere decir que usuario registrado.Redireccionamos a Login
      navigate('/login');
    } catch (error) {
      setErrMess(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>Registro</h2>
      <label htmlFor='username'>User:</label>
      <input
        type='text'
        id='username'
        value={username}
        onChange={(e) => setUserName(e.target.value)}
        minLength='5'
        autoFocus
        required
      />
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
      <button>Registrarse</button>
      {loading && <Spinner />}
      {errMess && <ErrorMessage msg={errMess} />}
    </form>
  );
}

export default RegisterForm;
