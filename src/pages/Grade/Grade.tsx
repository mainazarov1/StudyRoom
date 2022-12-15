import React, { useState } from 'react';
import { Table, Dropdown, Avatar, Select, Divider, Input } from 'antd';
import { CaretDownOutlined, EllipsisOutlined, MoreOutlined, UserOutlined } from '@ant-design/icons';

import type { MenuProps } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import '../Grade/Grade.scss';
import s from '../Tasks/Tasks.module.scss';
import { NavLink } from 'react-router-dom';

interface DataType {
  key: React.Key;
  name: string;
  avatar: string;
  avarageGrade?: number;
  overallScore: number | string;
  grade: number;
  enabled: boolean;
}

const selectOptionList = [
  { value: 'Сортировать по фамилии' },
  { value: 'Сортировка по имени' },
];

const items: MenuProps['items'] = [
  {
    label: 'Вернуть',
    key: '0',
  },
  {
    label: 'Посмотреть сданную работу',
    key: '1',
  }
];

const itemsTask: MenuProps['items'] = [
  {
    label: 'Изменить',
    key: '0',
  },
  {
    label: 'Удалить',
    key: '1',
  },
  {
    type: 'divider',
  },
  {
    label: 'Вернуть все',
    key: '2',
  }
];

let data: DataType[] = [
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
    enabled: true
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
];

const getSummaryAvarage = () => {
  let avarageGrade = 0;
  data.forEach(({ grade }) => {
    avarageGrade += grade / data.length;
  });
  data = [
    {
      key: "0",
      name: "Средняя оценка по классу",
      avatar: 'https://avatars.dicebear.com/api/pixel-art-neutral/your-custom-seed.svg',
      overallScore: 'Нет оценки',
      grade: avarageGrade,
      enabled: false
    },
    ...data
  ];
};


getSummaryAvarage();

const Grade: React.FC = () => {
  const columns: ColumnsType<DataType> = [
    {
      title: <Select
        defaultValue="Сортировать по имени"
        suffixIcon={<CaretDownOutlined />}
        bordered={false}
        options={selectOptionList.map((item) => ({ value: item.value }))}
      />,
      width: 50,
      dataIndex: 'name',
      fixed: 'left',
      render: (text, record) => {
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
      title:
        <div className='task-dropdown'>
          {[
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div className='title-deadline'>Срок сдачи</div>
                  <div> <NavLink className='task-link' to={'#'}>Задание</NavLink></div>
                </div>
                <div className='table-dropdown-cell'><Dropdown
                  placement={'bottomRight'}
                  className={s.collapse__head__dropdown}
                  trigger={['click']}
                  menu={{ items: itemsTask }}
                >
                  <EllipsisOutlined
                    className={s.collapse__elipsis}
                    style={{ fontSize: '20px', color: 'rgb(0,0,0)' }}
                    color='green'
                    rotate={90}
                  />
                </Dropdown> </div>
              </div>
              <Divider />
              <div className='title-fromTo'>из 100</div>
            </div>
          ]}
        </div>,
         render: (text, record) => {
          return (
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div className='table-dropdown-cell-grade'>{record.grade}</div>
              <div className='table-dropdown-cell'>
                <Dropdown
                  placement={'bottomRight'}
                  className={s.collapse__head__dropdown}
                  trigger={['click']}
                  menu={{ items }}
                >
                  <EllipsisOutlined
                    className={s.collapse__elipsis}
                    style={{ fontSize: '20px', color: 'rgb(0,0,0)' }}
                    color='green'
                    rotate={90}
                  />
                </Dropdown>
              </div>
            </div>)
        },
      width: 30,
      dataIndex: 'grade',
      key: '2'
    },
    {
      title:
        <div className='task-dropdown'>
          {[
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div className='title-deadline'>Срок сдачи</div>
                  <div> <NavLink className='task-link' to={'#'}>Задание</NavLink></div>
                </div>
                <div className='table-dropdown-cell'><Dropdown
                  placement={'bottomRight'}
                  className={s.collapse__head__dropdown}
                  trigger={['click']}
                  menu={{ items: itemsTask }}
                >
                  <EllipsisOutlined
                    className={s.collapse__elipsis}
                    style={{ fontSize: '20px', color: 'rgb(0,0,0)' }}
                    color='green'
                    rotate={90}
                  />
                </Dropdown> </div>
              </div>
              <Divider />
              <div className='title-fromTo'>из 100</div>
            </div>
          ]}
        </div>,
         render: (text, record) => {
          return (
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div className='table-dropdown-cell-grade'>{record.grade}</div>
              <div className='table-dropdown-cell'>
                <Dropdown
                  placement={'bottomRight'}
                  className={s.collapse__head__dropdown}
                  trigger={['click']}
                  menu={{ items }}
                >
                  <EllipsisOutlined
                    className={s.collapse__elipsis}
                    style={{ fontSize: '20px', color: 'rgb(0,0,0)' }}
                    color='green'
                    rotate={90}
                  />
                </Dropdown>
              </div>
            </div>)
        },
      width: 30,
      dataIndex: 'grade',
      key: '2'
    },
    {
      title:
        <div className='task-dropdown'>
          {[
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div className='title-deadline'>Срок сдачи</div>
                  <div> <NavLink className='task-link' to={'#'}>Задание</NavLink></div>
                </div>
                <div className='table-dropdown-cell'><Dropdown
                  placement={'bottomRight'}
                  className={s.collapse__head__dropdown}
                  trigger={['click']}
                  menu={{ items: itemsTask }}
                >
                  <EllipsisOutlined
                    className={s.collapse__elipsis}
                    style={{ fontSize: '20px', color: 'rgb(0,0,0)' }}
                    color='green'
                    rotate={90}
                  />
                </Dropdown> </div>
              </div>
              <Divider />
              <div className='title-fromTo'>из 100</div>
            </div>
          ]}
        </div>,
         render: (text, record) => {
          return (
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div className='table-dropdown-cell-grade'>{record.grade}</div>
              <div className='table-dropdown-cell'>
                <Dropdown
                  placement={'bottomRight'}
                  className={s.collapse__head__dropdown}
                  trigger={['click']}
                  menu={{ items }}
                >
                  <EllipsisOutlined
                    className={s.collapse__elipsis}
                    style={{ fontSize: '20px', color: 'rgb(0,0,0)' }}
                    color='green'
                    rotate={90}
                  />
                </Dropdown>
              </div>
            </div>)
        },
      width: 30,
      dataIndex: 'grade',
      key: '2'
    },
    {
      title:
        <div className='task-dropdown'>
          {[
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div className='title-deadline'>Срок сдачи</div>
                  <div> <NavLink className='task-link' to={'#'}>Задание</NavLink></div>
                </div>
                <div className='table-dropdown-cell'><Dropdown
                  placement={'bottomRight'}
                  className={s.collapse__head__dropdown}
                  trigger={['click']}
                  menu={{ items: itemsTask }}
                >
                  <EllipsisOutlined
                    className={s.collapse__elipsis}
                    style={{ fontSize: '20px', color: 'rgb(0,0,0)' }}
                    color='green'
                    rotate={90}
                  />
                </Dropdown> </div>
              </div>
              <Divider />
              <div className='title-fromTo'>из 100</div>
            </div>
          ]}
        </div>,
         render: (text, record) => {
          return (
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div className='table-dropdown-cell-grade'>{record.grade}</div>
              <div className='table-dropdown-cell'>
                <Dropdown
                  placement={'bottomRight'}
                  className={s.collapse__head__dropdown}
                  trigger={['click']}
                  menu={{ items }}
                >
                  <EllipsisOutlined
                    className={s.collapse__elipsis}
                    style={{ fontSize: '20px', color: 'rgb(0,0,0)' }}
                    color='green'
                    rotate={90}
                  />
                </Dropdown>
              </div>
            </div>)
        },
      width: 30,
      dataIndex: 'grade',
      key: '2'
    },
  ];
  return (
    <div>
      <Table
        bordered
        columns={columns}
        rowClassName={record => !record.enabled && "disabled-row"}
        dataSource={data}
        scroll={{ x: 1300 }}
      />
    </div>
  );
};

export default Grade;
