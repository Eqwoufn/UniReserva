import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Login from './Pages/Login.jsx';
import Dashboard from './Pages/Dashboard.jsx';
import MisReservas from './Pages/MisReservas.jsx';
import Navbar from './Components/Navbar.jsx';
import DetalleEspacio from './Pages/DetalleEspacio.jsx';
import Perfil from './Pages/Perfil.jsx';
import './index.css';

// Creamos un componente envoltorio para manejar cuándo mostrar el Navbar
function RutasConNavbar() {
  const location = useLocation();
  // El Navbar NO se mostrará en la ruta "/" (Login)
  const mostrarNavbar = location.pathname !== '/';

  return (
    <>
      {mostrarNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/mis-reservas" element={<MisReservas />} />
        <Route path="/detalle/:id" element={<DetalleEspacio />} />
        <Route path="/perfil" element={<Perfil />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <RutasConNavbar />
    </BrowserRouter>
  );
}

export default App;