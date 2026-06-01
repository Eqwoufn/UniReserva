import { useState, useEffect } from 'react';
import './MisReservas.css';

export default function MisReservas() {
  const [misReservas, setMisReservas] = useState([]);

  useEffect(() => {
    const reservasGuardadas = localStorage.getItem('misReservas');
    if (reservasGuardadas) {
      setMisReservas(JSON.parse(reservasGuardadas));
    } else {
      // Mock inicial
      const mockInicial = [
        { id: 101, espacio: "Sala de Estudio A", fecha: "28 de Mayo", hora: "14:00 - 16:00", estado: "Confirmada" },
        { id: 102, espacio: "Cancha de Fútbol", fecha: "29 de Mayo", hora: "18:00 - 19:30", estado: "Confirmada" }
      ];
      setMisReservas(mockInicial);
      localStorage.setItem('misReservas', JSON.stringify(mockInicial));
    }
  }, []);

  const anularReserva = (idParaEliminar) => {
    const nuevasReservas = misReservas.filter(reserva => reserva.id !== idParaEliminar);
    setMisReservas(nuevasReservas);
    localStorage.setItem('misReservas', JSON.stringify(nuevasReservas));

    alert("Reserva anulada correctamente.");
  };

  return (
    <div className="contenedor-reservas">
      <h2>Mis Reservas Activas</h2>
      <p>Aquí puedes gestionar los espacios que has apartado a tu nombre.</p>

      {misReservas.length === 0 ? (
        <div className="mensaje-vacio">
          <p>Aún no tienes reservas activas. ¡Ve al Panel de Reservas para apartar un espacio!</p>
        </div>
      ) : (

        <div className="lista-reservas">
          {misReservas.map((reserva) => (
            <div key={reserva.id} className="tarjeta-reserva-activa">
              <div className="info-reserva">
                <h3>{reserva.espacio}</h3>
                <p><strong>Fecha:</strong> {reserva.fecha}</p>
                <p><strong>Hora:</strong> {reserva.hora}</p>
                <span className="badge-estado">{reserva.estado}</span>
              </div>

              <button
                className="btn-anular"
                onClick={() => anularReserva(reserva.id)}
              >
                Anular Reserva
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}