import React, { Children } from 'react';
import { Table, Tree , Dropdown } from 'antd';
import { CaretDownOutlined } from '@ant-design/icons';

import type { MenuProps } from 'antd';
import type { ColumnsType } from 'antd/es/table';


interface DataType {
  key: React.Key;
  name: string;
  avarageGrade?: string;
  overallScore: number | string;
  grade: number | string;
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Сортировать по имени',
    width: 200,
    dataIndex: 'name',
    fixed: 'left',
    filterIcon: <CaretDownOutlined />,
    filterMultiple: false,
    sorter: (a, b) => {return a.name.localeCompare(b.name);},
  },
  {
    title: 'Общая оценка',
    width: 150,
    dataIndex: 'overallScore',
    fixed: 'left',
  },
  {
    title: 'Срок сдачи',
    children: [
      { title: 'test1', children: [{ title: 'из 100', width: 150, dataIndex: 'grade', key: '2' }] },
    ],
  },
  {
    title: 'Срок сдачи',
    children: [
      { title: 'test2', children: [{ title: 'из 100', width: 150, dataIndex: 'grade', key: '3' }] },
    ],
  },
  {
    title: 'Срок сдачи',
    children: [
      { title: 'test3', children: [{ title: 'из 100', width: 150, dataIndex: 'grade', key: '4' }] },
    ],
  },
  {
    title: 'Срок сдачи',
    children: [
      { title: 'test3', children: [{ title: 'из 100', width: 150, dataIndex: 'grade', key: '5' }] },
    ],
  },
  {
    title: 'Срок сдачи',
    children: [
      { title: 'test3', children: [{ title: 'из 100', width: 150, dataIndex: 'grade', key: '6' }] },
    ],
  },
];

const data: DataType[] = [
  {
    key: '2',
    name: 'Bob',
    overallScore: 'Нет оценки',
    grade: 50,
  },
  {
    key: '3',
    name: 'Amy',
    overallScore: 'Нет оценки',
    grade: 30,
  },
  {
    key: '4',
    name: 'Cole',
    overallScore: 'Нет оценки',
    grade: 70,
  },
  {
    key: '5',
    name: 'Snow',
    overallScore: 'Нет оценки',
    grade: 50,
  },
  {
    key: '6',
    name: 'Clone',
    overallScore: 'Нет оценки',
    grade: 30,
  },
];

const Grade: React.FC = () => {
  return (
    <div>
      <Table bordered columns={columns} dataSource={data} scroll={{ x: 1300 }} />
    </div>
  );
};

export default Grade;
