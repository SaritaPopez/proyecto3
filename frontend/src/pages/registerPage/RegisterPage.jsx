import RegisterForm from '../../components/registerForm/RegisterForm';
import useAuth from '../../hooks/useAuth';
import { Navigate } from 'react-router-dom';
import './registerpage.css';

const RegisterPage = () => {
  const { token } = useAuth();

  // Si la persona está registrada va a la página principal.
  if (token) return <Navigate to='/' />;

  return (
    <main className='register'>
      <RegisterForm />
    </main>
  );
};

export default RegisterPage;
