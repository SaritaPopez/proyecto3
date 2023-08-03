import { Navigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import Admin from '../../Components/Admin/Admin';

const AdminPage = () => {
  const { token } = useAuth();
  console.log(token);
  // Si la persona NO está logeada la redirigimos a la página principal.
  if (!token) return <Navigate to='/' />;

  return (
    <main className='entryCreate'>
      <Admin token={token} />
    </main>
  );
};

export default AdminPage;
