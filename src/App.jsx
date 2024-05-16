import Sidebar from './components/shared/Sidebar';

const App = () => {
  return (
    <div className='flex'>
      <Sidebar />
      <div className='p-7'>
        <h1 className='text-2xl font-semibold'>Home Page</h1>
      </div>
    </div>
  );
};

export default App;
