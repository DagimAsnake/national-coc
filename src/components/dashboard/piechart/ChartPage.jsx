import ThePieChart from './ThePieChart';
import { IoIosArrowDown } from 'react-icons/io';

const ChartPage = () => {
  return (
    <div>
      <div className='p-2 bg-white rounded-lg shadow m-1 mt-5'>
        <div className='flex justify-between items-center'>
          <h1 className='text-lg text-bold pl-3'>Competency</h1>
          <div className='flex items-center hover:cursor-pointer'>
            <p>Month </p>
            <IoIosArrowDown />
          </div>
        </div>
        <ThePieChart />
      </div>
      <div className='px-5'>
        <div className='p-2 bg-blue-50 rounded shadow -mt-10'>
          <div className='flex justify-between'>
            <div>
              <p className='text-gray-400'>Total Failed</p>
              <p className='text-lg font-bold'>63%</p>
            </div>
            <div>
              <p className='text-gray-400'>Total Passed</p>
              <p className='text-lg font-bold'>37%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartPage;
