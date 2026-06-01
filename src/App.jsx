import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login.jsx';
import Dashboard from './Pages/Dashboard.jsx';
import MisReservas from './Pages/MisReservas.jsx';
import DetalleEspacio from './Pages/DetalleEspacio.jsx';
import Perfil from './Pages/Perfil.jsx';
import SeleccionRol from './Pages/SeleccionRol.jsx';
import LoginAdmin from './Pages/LoginAdmin.jsx';
import AdminDashboard from './Pages/AdminDashboard.jsx';
import ReservarHorario from './Pages/ReservarHorario.jsx';
import StudentLayout from './Layouts/StudentLayout.jsx';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rutas públicas y de selección de rol */}
        <Route path="/" element={<SeleccionRol />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login-admin" element={<LoginAdmin />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />

        {/* Rutas del alumno asociadas al StudentLayout (con Navbar) */}
        <Route element={<StudentLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/mis-reservas" element={<MisReservas />} />
          <Route path="/detalle/:id" element={<DetalleEspacio />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/reservar-horario/:id" element={<ReservarHorario />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;