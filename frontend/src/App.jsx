import { Route, Routes } from 'react-router-dom';

import Home from "./pages/home/Home"; 
import NotFound from './components/notFound/NotFound';


function App() {
  
  return (
      <div className="app">
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<NotFound />} />
      </Routes>
      </div>
  )
}

export default App
