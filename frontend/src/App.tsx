import {Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import KibsPage from './pages/KibsPage';
import ShmoozersPage from './pages/ShmoozersPage';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="kibs" element={<KibsPage/>} />
      <Route path="shmoozers" element={<ShmoozersPage/>} />
    </Routes>
    </>
  )
}

export default App
