import { FaUserPlus } from 'react-icons/fa';
import { MdEditCalendar } from 'react-icons/md';
import { FaBriefcase } from 'react-icons/fa';
import { MdOutlineNoteAlt } from 'react-icons/md';

const Cards = () => {
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
