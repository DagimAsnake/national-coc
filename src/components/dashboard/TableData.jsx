import { Table } from 'antd';
import { useEffect, useState } from 'react';

const columns = [
  {
    title: 'Number',
    dataIndex: 'number',
    render: (_, __, index) => `${index + 1}`.padStart(2, '0'),
  },
  {
    title: 'Name',
    dataIndex: 'name',
    render: (_, record) => `${record.first_name} ${record.father_name}`,
  },
  {
    title: 'Assessed',
    dataIndex: 'assessed',
    sorter: {
      compare: (a, b) => (a.assessed === 'Yes' ? 1 : 0) - (b.assessed === 'Yes' ? 1 : 0),
      multiple: 3,
    },
  },
  {
    title: 'Reg.No',
    dataIndex: 'reg_no',
    sorter: {
      compare: (a, b) => a.reg_no.localeCompare(b.reg_no),
      multiple: 2,
    },
  },
  {
    title: 'Location',
    dataIndex: 'sub_city',
    sorter: {
      compare: (a, b) => a.sub_city.localeCompare(b.sub_city),
      multiple: 1,
    },
  },
  {
    title: 'Action',
    dataIndex: '',
    key: 'x',
    render: () => <a>View</a>,
  },
];

const onChange = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
};

const TableData = () => {
  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState({ current: 1, pageSize: 10, total: 0 });

  const fetchData = async (page, pageSize) => {
    try {
      const response = await fetch(`https://national-coc-api.lmis.gov.et/coc/get-all?page=${page}&limit=${pageSize}`, {
        headers: {
          'Content-Type': 'application/json',
          'authorization-key': 'a593e16f43bc2fa6132af7d823113f729ba32d8416120808a967',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }

      const result = await response.json();
      console.log(result);
      setData(result.data); // Access the 'data' property from the response
      setPagination({ ...pagination, total: result.total });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData(pagination.current, pagination.pageSize);
  }, [pagination.current, pagination.pageSize]);

  const handleTableChange = (pagination, filters, sorter) => {
    setPagination({ ...pagination });
    onChange(pagination, filters, sorter);
  };

  return (
    <Table
      columns={columns}
      dataSource={data}
      pagination={{
        current: pagination.current,
        pageSize: pagination.pageSize,
        total: pagination.total,
      }}
      onChange={handleTableChange}
      rowKey="id"
    />
  );
};

export default TableData;
