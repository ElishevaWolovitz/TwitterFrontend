import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import KibsPage from './pages/KibsPage';
import ShmoozersPage from './pages/ShmoozersPage';
import axios from "axios"; 

const baseURL = import.meta.env.VITE_API_BASE_URL; 
const api = axios.create({ baseURL });             


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='kibs' element={<KibsPage/>} />
        <Route path='shmoozers' element={<ShmoozersPage api={api}/>} />
      </Routes>
    </>
  )
}

export default App
