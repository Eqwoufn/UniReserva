import './TarjetaEspacio.css';
import { useNavigate } from 'react-router-dom';

export default function TarjetaEspacio({ espacio }) {
  const navigate = useNavigate();
  return (
    <div className={`tarjeta ${espacio.disponible ? 'disponible' : 'ocupado'}`}>
      <h3>{espacio.nombre}</h3>
      <p><strong>Tipo:</strong> {espacio.categoria}</p>
      <p><strong>Capacidad:</strong> {espacio.capacidad} personas</p>

      <button 
        className="btn-reservar" 
        disabled={!espacio.disponible}
        onClick={() => navigate(`/detalle/${espacio.id}`)}
      >
        {espacio.disponible ? 'Reservar' : 'No disponible'}
      </button>
    </div>
  );
}