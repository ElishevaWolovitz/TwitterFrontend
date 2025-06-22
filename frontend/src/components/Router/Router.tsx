import { Routes, Route } from 'react-router-dom';
import HomePage from '../../pages/HomePage';
import KibsPage from '../../pages/KibsPage';
import ShmoozersPage from '../../pages/ShmoozersPage';
import { api } from '../../const'; 

function Router() {
  return (
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='kibs' element={<KibsPage api={api}/>} />
        <Route path='shmoozers' element={<ShmoozersPage api={api}/>} />
      </Routes>
  )
}

export { Router }
