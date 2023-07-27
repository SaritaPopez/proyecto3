import { useState } from 'react';
import { Link } from 'react-router-dom';
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
    <div className='login-container'>
      <div className='image-container'>
         <img className='imagenCiudad' src='https://tipsparatuviaje.com/wp-content/uploads/2019/11/rotterdam-ho.jpg' />
        <Link className='logoWeb' to="/">
            <img className='logoGoHome' src='../src/assets/C-A_white.png' alt='logo web' />
            <h1 className='h1LoginRegister' >Ciudad Accesible</h1>
        </Link>
      </div>

      <form className='formLogin' onSubmit={handleSubmit}>
        <h2 className='h2Login'>Registro</h2>
        <label className='labelForm' htmlFor='username'>User:</label>
        <input className='inputLogin'
          type='text'
          id='username'
          value={username}
          onChange={(e) => setUserName(e.target.value)}
          minLength='5'
          autoFocus
          required
        />
        <label className='labelForm' htmlFor='email'>Email:</label>
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
        <button className='buttonLogin' >Registrarse</button>
        {loading && <Spinner />}
        {errMess && <ErrorMessage msg={errMess} />}
      </form>
    </div>
  );
}

export default RegisterForm;

