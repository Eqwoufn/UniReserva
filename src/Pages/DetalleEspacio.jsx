import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { espaciosUniversitarios } from '../Datos.js';
import './DetalleEspacio.css';

export default function DetalleEspacio() {
  // useParams extrae el ID de la URL (ej: /detalle/1)
  const { id } = useParams();
  const navigate = useNavigate();

  // Buscamos el espacio que coincida con el ID
  const espacio = espaciosUniversitarios.find(e => e.id === parseInt(id));

  // Estado para la fecha y el horario
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('14:00 - 16:00');

  // Si el usuario pone un ID que no existe en la URL
  if (!espacio) {
    return <h2 style={{textAlign: 'center', marginTop: '50px'}}>Espacio no encontrado</h2>;
  }

  const confirmarReserva = () => {
    if (!fecha) {
      alert("Por favor, selecciona una fecha para tu reserva.");
      return;
    }

    // Formatear la fecha a un formato amigable como "1 de Junio"
    const fechaObj = new Date(fecha + 'T00:00:00');
    const opciones = { day: 'numeric', month: 'long' };
    const fechaFormateada = fechaObj.toLocaleDateString('es-ES', opciones);

    // Obtener reservas de localStorage
    const reservasGuardadas = localStorage.getItem('misReservas');
    let listaReservas = [];
    if (reservasGuardadas) {
      listaReservas = JSON.parse(reservasGuardadas);
    } else {
      // Mock inicial si está vacío
      listaReservas = [
        { id: 101, espacio: "Sala de Estudio A", fecha: "28 de Mayo", hora: "14:00 - 16:00", estado: "Confirmada" },
        { id: 102, espacio: "Cancha de Fútbol", fecha: "29 de Mayo", hora: "18:00 - 19:30", estado: "Confirmada" }
      ];
    }

    // Añadir nueva reserva
    const nuevaReserva = {
      id: Date.now(),
      espacio: espacio.nombre,
      fecha: fechaFormateada,
      hora: hora,
      estado: "Confirmada"
    };

    listaReservas.push(nuevaReserva);
    localStorage.setItem('misReservas', JSON.stringify(listaReservas));

    alert(`¡Reserva confirmada con éxito para: ${espacio.nombre}!`);
    // Luego de confirmar, lo mandamos a ver sus reservas
    navigate('/mis-reservas');
  };

  return (
    <div className="detalle-contenedor">
      <div className="detalle-tarjeta">
        
        {/* Lado izquierdo: Información */}
        <div className="detalle-info">
          <h2>{espacio.nombre}</h2>
          <span className="detalle-tag">{espacio.categoria}</span>
          <p className="detalle-capacidad"><strong>Capacidad:</strong> {espacio.capacidad} alumno(s)</p>
          <p className="detalle-texto">{espacio.descripcion}</p>

          {/* Formulario de Reserva */}
          <div className="reserva-formulario">
            <h3>Elige tu horario</h3>
            <div className="reserva-selector">
              <div className="selector-group">
                <label htmlFor="fecha">Fecha:</label>
                <input 
                  type="date" 
                  id="fecha" 
                  value={fecha} 
                  min={new Date().toISOString().split('T')[0]} 
                  onChange={(e) => setFecha(e.target.value)} 
                  required 
                />
              </div>
              <div className="selector-group">
                <label htmlFor="hora">Horario:</label>
                <select id="hora" value={hora} onChange={(e) => setHora(e.target.value)}>
                  <option value="08:00 - 10:00">08:00 - 10:00</option>
                  <option value="10:00 - 12:00">10:00 - 12:00</option>
                  <option value="12:00 - 14:00">12:00 - 14:00</option>
                  <option value="14:00 - 16:00">14:00 - 16:00</option>
                  <option value="16:00 - 18:00">16:00 - 18:00</option>
                  <option value="18:00 - 20:00">18:00 - 20:00</option>
                </select>
              </div>
            </div>
          </div>
          
          <div className="detalle-botones">
            <button className="btn-confirmar" onClick={confirmarReserva}>
              Confirmar Reserva
            </button>
            <button className="btn-cancelar" onClick={() => navigate(-1)}>
              Volver
            </button>
          </div>
        </div>

        {/* Lado derecho: Imagen circular */}
        <div className="detalle-imagen-box">
          <img 
            src={`/${espacio.imagen}`} 
            alt={espacio.nombre} 
            className="imagen-circular" 
          />
        </div>

      </div>
    </div>
  );
}