import { useState } from 'react';
import chicken from '../../assets/chicken.png';
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className='bg-neutral-100 p-4 border-b-2'>
      <div className='max-w-7xl mx-auto flex justify-between items-center'>
        <div className='flex items-center'>
          <a href='#' className=' text-lg font-bold'>
            Ethiopian National COC
          </a>
        </div>
        <div className='flex items-center gap-4 ml-20'>
          <Popover className='relative'>
            <div className='flex items-center gap-4'>
              <div className='font-medium text-lg text-end'>
                <div>Amanual Belay</div>
                <div className='text-sm text-gray-500 '>Medical Docter</div>
              </div>
              <PopoverButton>
                <img
                  id='avatarButton'
                  type='button'
                  onClick={toggleDropdown}
                  className='w-10 h-10 rounded-full cursor-pointer'
                  src={chicken}
                  alt='User dropdown'
                />
              </PopoverButton>
            </div>
            <PopoverPanel
              anchor='bottom'
              className='flex flex-col bg-white border border-gray-200 rounded shadow-md p-5 px-16'
            >
              <a
                href='/'
                className='border-b mb-2 p-2 px-10 rounded-lg hover:bg-green-50'
              >
                Profile
              </a>
              <a
                href='/'
                className='border-b mb-2 p-2 px-10 rounded-lg hover:bg-green-50'
              >
                Setting
              </a>
              <a
                href='/'
                className='border-b mb-2 p-2 px-10 rounded-lg hover:bg-green-50'
              >
                Sign Out
              </a>
            </PopoverPanel>
          </Popover>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
