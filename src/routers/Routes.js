import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from '../pages/login/login.js';
import Home from '../pages/interfaces/Home.js';
import Clinica from '../pages/interfaces/Clinica.js';
function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/clinica' element={<Clinica/>}/>
        </Routes>
    </BrowserRouter>
    </>
    
  );
}

export default Router;
