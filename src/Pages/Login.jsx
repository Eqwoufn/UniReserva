import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; 

export default function Login() {
  const [codigo, setCodigo] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const manejarEnvio = (e) => {
    e.preventDefault(); 
    
    console.log("Intentando ingresar con el código:", codigo);
    localStorage.setItem('codigoAlumno', codigo);
    navigate('/dashboard');
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>UniReserva</h2>
        <p>Ingresa con tu cuenta universitaria</p>

        <form onSubmit={manejarEnvio}>
          <div className="input-group">
            <label htmlFor="codigo">Código de Alumno</label>
            <input 
              type="text" 
              id="codigo"
              placeholder="Tu codigo ulima"
              value={codigo}
              onChange={(e) => setCodigo(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Contraseña</label>
            <input 
              type="password" 
              id="password"
              placeholder="Tu contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn-ingresar">
            Ingresar
          </button>
        </form>
      </div>
    </div>
  );
}