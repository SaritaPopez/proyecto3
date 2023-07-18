import { Route, Routes } from 'react-router-dom';

import Home from './pages/home/Home';
import NotFoundPage from './pages/notFoundPage/NotFoundPage';
import RegisterPage from './pages/registerPage/RegisterPage';
import LoginPage from './pages/loginPage/LoginPage';
import EntryCreatePage from './pages/entryCreatePage/AdminPage';
import SingleEntryPage from './components/singleEntry/SingleEntry';
import Admin from './components/admin/Admin';

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/message' element={<EntryCreatePage />} />
        <Route path='/entries/:entryId' element={<SingleEntryPage />} />
        <Route path='/admin' element={<Admin />} />

        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
