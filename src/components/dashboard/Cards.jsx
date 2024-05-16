import { useEffect} from 'react';
import { FaUserPlus } from 'react-icons/fa';
import { MdEditCalendar } from 'react-icons/md';
import { FaBriefcase } from 'react-icons/fa';
import { MdOutlineNoteAlt } from 'react-icons/md';

const Cards = () => {

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
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, []);

  const cardComponent = [
    { title: 'Total COC', icon: <FaUserPlus />, num: 1000 },
    { title: 'Total Completed', icon: <MdEditCalendar />, num: 100 },
    { title: 'Total Regular', icon: <FaBriefcase />, num: 10 },
    { title: 'Total Distance', icon: <FaUserPlus />, num: 6 },
    { title: 'Total Passed', icon: <MdOutlineNoteAlt />, num: 21 },
  ];

  return (
    <div className='flex'>
      {cardComponent.map((card, index) => (
        <div
          key={index}
          className='max-w-40 p-5 bg-white border border-gray-200 rounded-lg shadow m-1'
        >
          <div className='mb-1'>{card.icon}</div>
          <p className='mb-1 font-extrabold'>{card.num}</p>
          <h5 className='mb-2 font-semibold tracking-tight text-gray-900'>
            {card.title}
          </h5>
        </div>
      ))}
    </div>
  );
};

export default Cards;
