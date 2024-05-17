import ThePieChart from './ThePieChart';
import { Dropdown, Menu, message, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const ChartPage = () => {
  const onClick = ({ key }) => {
    message.info(`Click on item ${key}`);
  };

  const items = [
    {
      label: 'Jan',
      key: '1',
    },
    {
      label: 'Feb',
      key: '2',
    },
    {
      label: 'Mar',
      key: '3',
    },
  ];

  const menu = (
    <Menu onClick={onClick}>
      {items.map((item) => (
        <Menu.Item key={item.key} className='text-center border-b mx-5'>
          {item.label}
        </Menu.Item>
      ))}
    </Menu>
  );

  return (
    <div>
      <div className='p-2 bg-white rounded-lg shadow m-1 mt-5'>
        <div className='flex justify-between items-center'>
          <h1 className='text-lg text-bold pl-3'>Competency</h1>
          <div className='flex items-center hover:cursor-pointer'>
            <Dropdown overlay={menu}>
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  Month
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
          </div>
        </div>
        <ThePieChart />
      </div>
      <div className='px-5'>
        <div className='p-2 bg-blue-50 rounded shadow -mt-10'>
          <div className='flex justify-between pl-1'>
            <div className='relative'>
              <span className='top-1 -left-3 absolute  w-3.5 h-3.5 bg-red-400 border-2 border-white rounded-full'></span>
              <p className='text-gray-400 pl-1'>Total Failed</p>
              <p className='text-lg font-bold pl-1'>63%</p>
            </div>
            <div className='relative'>
              <span className='top-1 -left-3 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white rounded-full'></span>
              <p className='text-gray-400 pl-1'>Total Passed</p>
              <p className='text-lg font-bold pl-1'>37%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartPage;
