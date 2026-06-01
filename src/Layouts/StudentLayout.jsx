import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar.jsx';

export default function StudentLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
