import { Navigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import EntryCreateForm from '../../components/entryCreateForm/EntryCreateForm';
import './entrycreatepage.css';

const EntryCreatePage = () => {
  const { token } = useAuth();

  // Si la persona NO está logeada la redirigimos a la página principal.
  if (!token) return <Navigate to='/' />;

  return (
    <main className='entryCreate'>
      <EntryCreateForm token={token} />
    </main>
  );
};

export default EntryCreatePage;
