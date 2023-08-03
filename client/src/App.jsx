import { Route, Routes } from 'react-router-dom';

import Home from './Pages/Home/Home';
import NotFoundPage from './Pages/NotFoundPage/NotFoundPage';
import RegisterPage from './Pages/RegisterPage/RegisterPage';
import LoginPage from './Pages/LoginPage/LoginPage';
import EntryCreatePage from './Pages/EntryCreatePage/AdminPage';
import SingleEntryPage from './Components/SingleEntryPage/SingleEntryPage';
import ContactPage from './Pages/ContactPage/ContactPage';

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/message' element={<EntryCreatePage />} />
        <Route path='/entries/:entryId' element={<SingleEntryPage />} />
        <Route path='/contact' element={<ContactPage />} />

        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
