import { useState } from 'react';
import chicken from '../../assets/chicken.png';

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
        <div className='flex items-center gap-4'>
          <div className='font-medium text-lg text-end'>
            <div>Amanual Belay</div>
            <div className='text-sm text-gray-500 '>
              Medical Docter
            </div>
          </div>
          <img
            id='avatarButton'
            type='button'
            onClick={toggleDropdown}
            className='w-10 h-10 rounded-full cursor-pointer'
            src={chicken}
            alt='User dropdown'
          />

          {dropdownOpen && (
            <div
              id='userDropdown'
              className='z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44'
            >
              <ul
                className='py-2 text-sm text-gray-700'
                aria-labelledby='avatarButton'
              >
                <li>
                  <a href='#' className='block px-4 py-2 hover:bg-gray-100'>
                    Dashboard
                  </a>
                </li>
                <li>
                  <a href='#' className='block px-4 py-2 hover:bg-gray-100'>
                    Settings
                  </a>
                </li>
                <li>
                  <a href='#' className='block px-4 py-2 hover:bg-gray-100'>
                    Earnings
                  </a>
                </li>
              </ul>
              <div className='py-1'>
                <a
                  href='#'
                  className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                >
                  Sign out
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
