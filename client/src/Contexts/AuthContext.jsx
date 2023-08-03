import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import userService from '../Services/userService';
//Creamos contexto inicial en null
const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  // Obtenemos los datos del usuario si existe un token.
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user = await userService(token);

        setUser(user);
      } catch (err) {
        alert(err.message);
      }
    };

    // Si existe token obtenemos los datos del usuario.
    if (token) fetchUser();
  }, [token]);

  // Función de login.
  const login = (newToken) => {
    localStorage.setItem('token', newToken);
    setToken(newToken);
  };

  // Función de logout.
  const logout = () => {
    localStorage.removeItem('token');
    setToken(null);
    setUser(null);
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ token, login, logout, user }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export { AuthContext, AuthProvider };
