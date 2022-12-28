import React, { Key, useState } from 'react';
import { Table, Avatar } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { UserOutlined } from '@ant-design/icons';
import '../Grade/Grade.scss';
import { NavLink } from 'react-router-dom';
import GetGrade from '../../components/GetGrade/GetGrade';
import GetTitle from '../../components/GetTitle/GetTitle';

interface DataType {
  key: Key;
  name: string;
  avatar: string;
  avarageGrade?: number;
  overallScore: number | string;
  grade: number;
  enabled: boolean;
}

const Grade: React.FC = () => {
  const [columns, setColumns] = useState<ColumnsType<DataType>>([
    {
      title: 'Сортировать по имени',
      width: 50,
      dataIndex: 'name',
      sorter: (a, b) => {
        if(a.name === dataSource[0].name || b.name === dataSource[0].name) return 0;
        return a.name.length - b.name.length
      },
      fixed: 'left',
      render: (text: string, record: DataType) => {
        return (
          <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
            <Avatar src={record.avatar} icon={<UserOutlined />} />
            <div style={{ marginLeft: '15px' }}> <NavLink className='name-link' to='#'> {record.name} </NavLink> </div>
          </div>
        );
      },
    },
    {
      title: 'Общая оценка',
      width: 35,
      dataIndex: 'overallScore',
      fixed: 'left',
    },
    {
      title: <GetTitle deadline='25-05-2020' task='task1' fromTo={100} />,
      sorter: false,
      render: (text: string, record: { grade: number; }) => <GetGrade recordProp={record.grade}/>,
      width: 30,
      dataIndex: 'grade',
      key: '2',
    },
    {
      title: <GetTitle deadline='25-06-2020' task='task1' fromTo={100} />,
      render:  (text: string, record: { grade: number; }) => <GetGrade recordProp={record.grade}/>,
      width: 30,
      dataIndex: 'grade',
      key: '2'
    },
    {
      title: <GetTitle deadline='25-07-2020' task='task1' fromTo={100} />,
      render:  (text: string, record: { grade: number; }) => <GetGrade recordProp={record.grade}/>,
      width: 30,
      dataIndex: 'grade',
      key: '2'
    },
    {
      title: <GetTitle deadline='25-08-2020' task='task1' fromTo={100} />,
      render:  (text: string, record: { grade: number; }) => <GetGrade recordProp={record.grade}/>,
      width: 30,
      dataIndex: 'grade',
      key: '2'
    },
  ])

  let [dataSource, setDataSource] = useState<DataType[]>([
    {
      key: '1',
      name: 'Bob',
      avatar: 'https://avatars.dicebear.com/api/male/john.svg?mood[]=happy&mood[]=sad',
      overallScore: 'Нет оценки',
      grade: 50,
      enabled: true
    },
    {
      key: '2',
      name: 'Amy',
      avatar: 'https://avatars.dicebear.com/api/male/john.svg?background=%230000ff',
      overallScore: 'Нет оценки',
      grade: 30,
      enabled: true,
    },
    {
      key: '3',
      name: 'Cole',
      avatar: 'https://avatars.dicebear.com/api/human/cole.svg',
      overallScore: 'Нет оценки',
      grade: 70,
      enabled: true
    },
    {
      key: '4',
      name: 'Snow',
      avatar: 'https://avatars.dicebear.com/api/initials/snow.svg',
      overallScore: 'Нет оценки',
      grade: 10,
      enabled: true
    },
    {
      key: '5',
      name: 'Clone',
      avatar: 'https://avatars.dicebear.com/api/initials/clone.svg',
      overallScore: 'Нет оценки',
      grade: 45,
      enabled: true
    },
  ])

  const getSummaryAvarage = () => {
    let avarageGrade = 0;
    dataSource.forEach(({ grade }) => {
      avarageGrade += grade / dataSource.length;
    });
    dataSource = [
      {
        key: "0",
        name: "Средняя оценка по классу",
        avatar: 'https://avatars.dicebear.com/api/pixel-art-neutral/your-custom-seed.svg',
        overallScore: 'Нет оценки',
        grade: avarageGrade,
        enabled: false,
      },
      ...dataSource
    ];
  };

  getSummaryAvarage();
  return (
    <div>
      <Table
        bordered
        columns={columns}
        rowClassName={record => !record.enabled ? 'disabled-row' : ''}
        dataSource={dataSource}
        scroll={{ x: 1300 }}
      />
    </div>
  );
};

export default Grade;
