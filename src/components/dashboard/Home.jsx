import Cards from './Cards';
import Graph from './Graph';
import TotalCoc from './TotalCoc';

const Home = () => {
  return (
    <div className='p-5'>
      <Cards />
      <div className='flex mt-5'>
        <Graph />
        <TotalCoc />
      </div>
    </div>
  );
};

export default Home;
