import { useState } from 'react';
import { BsArrowLeftShort } from 'react-icons/bs';
import { RiDashboardFill } from 'react-icons/ri';
import { MdOutlineEditCalendar } from "react-icons/md";
import { SiRotaryinternational } from "react-icons/si";

const Sidebar = () => {
    const [open, setOpen] = useState(true);

  const Menus = [
    { title: 'Dashboard' },
    { title: 'Table Preview', icon: <MdOutlineEditCalendar /> }
  ];

  return (
    <div>
      <div
        className={`bg-gray-200 h-screen p-5 pt-8 ${
          open ? ' w-60' : 'w-20'
        } duration-300 relative`}
      >
        <BsArrowLeftShort
          className={`bg-white Otext-dark-purple text-3xl rounded-full absolute -right-3 top-9 border Oborder-dark-purple cursor-pointer ${
            !open && 'rotate-180'
          }`}
          onClick={() => setOpen(!open)}
        />

        <div className='inline-flex items-center mb-8'>
          <SiRotaryinternational
            className={`text-green-500 text-4xl rounded cursor-pointer block float-left mr-2 duration-500 ${
              open && 'rotate-[360deg]'
            }`}
          />
          <h1
            className={` origin-left font-medium text-4x1 duration-300 ${
              !open && 'scale-0'
            }`}
          >
            National COC
          </h1>
        </div>

        <ul className='pt-2'>
          {Menus.map((menu, index) => (
            <li
              key={index}
              className={`text-sm flex items-center gap-x-4 cursor-pointer p-1 hover:bg-light-white rounded-md`}
            >
              <span className='text-2xl block float-left'>
                {menu.icon ? menu.icon : <RiDashboardFill />}
              </span>
              <span
                className={`text-base font-medium flex-1 duration-200 ${
                  !open ? 'hidden' : ''
                }`}
              >
                {menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
