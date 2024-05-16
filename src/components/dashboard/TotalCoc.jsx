import { useEffect, useState} from 'react';

const TotalCoc = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://national-coc-api.lmis.gov.et/coc/data', {
          headers: {
            'Content-Type': 'application/json',
            'authorization-key': 'a593e16f43bc2fa6132af7d823113f729ba32d8416120808a967'
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const data = await response.json();
        console.log(data);
        setData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, []);


    return (
      <div className="h-72">
        <div className='w-48 p-4 bg-white border border-gray-200 rounded-lg shadow m-1 h-full flex flex-col justify-between'>
          <div className='mb-1 self-start'>Total COC created this month</div>
          <div className='mt-auto'>
            <p className='mb-1 font-extrabold text-6xl'>{data?.totalCocThisMonth}</p>
            <h5 className='mb-2 font-semibold tracking-tight text-gray-900'>
             <span className="text-green-400"> +23% </span>since last month
            </h5>
          </div>
        </div>
      </div>
    );
  };
  
  export default TotalCoc;
  