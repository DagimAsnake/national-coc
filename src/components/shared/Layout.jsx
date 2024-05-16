import Sidebar from './Sidebar';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className='flex flex-row h-screen w-screen overflow-hidden'>
      <Sidebar />
      <div className='flex-1 h-screen flex flex-col'>
        <Navbar />
        <div className='bg-white min-h-0 overflow-auto'>{<Outlet />}</div>
      </div>
    </div>
  );
};

export default Layout;
