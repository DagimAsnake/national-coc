import { useEffect, useState} from 'react';
import { FaUserPlus } from 'react-icons/fa';
import { MdEditCalendar } from 'react-icons/md';
import { FaBriefcase } from 'react-icons/fa';
import { MdOutlineNoteAlt } from 'react-icons/md';

const Cards = () => {
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

  const cardComponent = [
    { title: 'Total COC', icon: <FaUserPlus />, num: data?.totalCoc, col: "text-blue-300"  },
    { title: 'Total Completed', icon: <MdEditCalendar />, num: data?.totalCompleted, col: "text-red-300"  },
    { title: 'Total Regular', icon: <FaBriefcase />, num: data?.totalRegular , col: "text-green-300"  },
    { title: 'Total Distance', icon: <FaUserPlus />, num: data?.totalDistance, col: "text-blue-300"  },
    { title: 'Total Passed', icon: <MdOutlineNoteAlt />, num: data?.totalPracticalPassed, col: "text-gray-300"  },
  ];

  return (
    <div className='flex'>
      {cardComponent.map((card, index) => (
        <div
          key={index}
          className='max-w-40 p-5 bg-white border border-gray-200 rounded-lg shadow m-1'
        >
          <div className={`mb-1 text-2xl ${card.col}`}>{card.icon}</div>
          <p className='mb-1 text-2xl font-bold'>{card.num}</p>
          <h5 className='mb-2 text-sm tracking-tight text-gray-400'>
            {card.title}
          </h5>
        </div>
      ))}
    </div>
  );
};

export default Cards;
