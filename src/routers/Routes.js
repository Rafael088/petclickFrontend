import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from '../pages/login/login.js';
import Home from '../pages/interfaces/Home.js';
import Clinica from '../pages/interfaces/Clinica.js';
import Register from '../pages/interfaces/Register.js';
import Cita from '../pages/interfaces/Cita.js';
function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path='*' element={<>Not FOund</>}/>
          <Route exact path='/' element={<Login/>}/>
          <Route  exact path='/home' element={<Home/>}/>
          <Route  exact path='/clinica' element={<Clinica/>}/>
          <Route exact path='/register' element={<Register/>}/>
          <Route exact path='/cita' element={<Cita/>}/>
        </Routes>
    </BrowserRouter>
    </>
    
  );
}

export default Router;
