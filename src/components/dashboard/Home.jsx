import Cards from './Cards';
import Graph from './Graph';
import TotalCoc from './TotalCoc';
import CocProgress from './CocProgress';
import TableData from './TableData';
import ChartPage from './piechart/ChartPage';

const Home = () => {
  return (
    <div className='flex p-5'>
      <div className='flex-col'>
        <Cards />
        <div className='flex mt-5'>
          <Graph />
          <TotalCoc />
        </div>
        <div className='mt-5'>
          <TableData />
        </div>
      </div>
      <div className='w-full'>
        <CocProgress />
        <ChartPage />
      </div>
    </div>
  );
};

export default Home;
