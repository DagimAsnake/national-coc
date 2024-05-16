import Cards from './Cards';
import Graph from './Graph';
import TotalCoc from './TotalCoc';
import CocProgress from './CocProgress';

const Home = () => {
  return (
    <div className='flex p-5'>
      <div className='flex-col'>
        <Cards />
        <div className='flex mt-5'>
          <Graph />
          <TotalCoc />
        </div>
      </div>
      <div className='w-full'>
        <CocProgress />
      </div>
    </div>
  );
};

export default Home;
