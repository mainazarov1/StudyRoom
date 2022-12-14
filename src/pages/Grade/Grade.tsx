import React, { Children } from 'react';
import { Table, Dropdown, Avatar, Select } from 'antd';
import { CaretDownOutlined, EllipsisOutlined, MoreOutlined, UserOutlined } from '@ant-design/icons';

import type { MenuProps } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { Link } from 'react-router-dom';
import '../Grade/Grade.scss';
import s from '../Tasks/Tasks.module.scss';
import { render } from 'react-dom';

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

const listTask = [
  {deadline: '25.05.2022', task: 'name', fromTo: 50}
]

const columns: ColumnsType<DataType> = [
  {
    title: <Select
      defaultValue="Сортировать по имени"
      suffixIcon={<CaretDownOutlined />}
      bordered={false}
      options={selectOptionList.map((item) => ({ value: item.value }))}
    />,
    width: 200,
    dataIndex: 'name',
    fixed: 'left',
    render: (text, record) => {
      return (
        <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
          <Avatar src={record.avatar} icon={<UserOutlined />} />
          <div style={{ marginLeft: '15px' }}> {record.name} </div>
        </div>
      );
    },
  },
  {
    title: 'Общая оценка',
    width: 100,
    dataIndex: 'overallScore',
    fixed: 'left',
  },
  {
    title: <div className='task-dropdown'>{[<div><div>срок сдачи</div> <div>задание</div> <div>100</div></div>, <Dropdown
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
  </Dropdown>]}</div>,
  width: 100

    // children: [
    //   {
    //     title: <div className='task-dropdown'>{['text', <Dropdown
    //     placement={'bottomRight'}
    //     className={s.collapse__head__dropdown}
    //     trigger={['click']}
    //     menu={{ items }}
    //   >
    //     <EllipsisOutlined
    //       className={s.collapse__elipsis}
    //       style={{ fontSize: '20px', color: 'rgb(0,0,0)' }}
    //       color='green'
    //       rotate={90}
    //     />
    //   </Dropdown>]}</div>, children: [{
    //       title: 'из 100',
    //       render: (text, record) => {
    //         return (
    //           <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
    //             <div className='table-dropdown-cell-grade'>{record.grade}</div>
    //             <div className='table-dropdown-cell'>
    //               <Dropdown
    //                 placement={'bottomRight'}
    //                 className={s.collapse__head__dropdown}
    //                 trigger={['click']}
    //                 menu={{ items }}
    //               >
    //                 <EllipsisOutlined
    //                   className={s.collapse__elipsis}
    //                   style={{ fontSize: '20px', color: 'rgb(0,0,0)' }}
    //                   color='green'
    //                   rotate={90}
    //                 />
    //               </Dropdown>
    //             </div>
    //           </div>)
    //       }, width: 100, dataIndex: 'grade', key: '2'
    //     }]
    //   },
    // ],
  },
  {
    title: 'Срок сдачи',
    children: [
      {
        title: 'test2', children: [{
          title: 'из 100',
          render: (text, record) => {
            return (
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                {record.grade}
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
          width: 100, dataIndex: 'grade', key: '3'
        }]
      },
    ],
  },
  {
    title: 'Срок сдачи',
    children: [
      {
        title: 'test3', children: [{
          title: 'из 100',
          render: (text, record) => {
            return (
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                {record.grade}
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
          width: 100, dataIndex: 'grade', key: '4'
        }]
      },
    ],
  },
  {
    title: 'Срок сдачи',
    children: [
      {
        title: 'test3', children: [{
          title: 'из 100',
          render: (text, record) => {
            return (
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                {record.grade}
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
          width: 100, dataIndex: 'grade', key: '5'
        }]
      },
    ],
  },
  {
    title: 'Срок сдачи',
    children: [
      {
        title: 'test3', children: [{
          title: 'из 100',
          render: (text, record) => {
            return (
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                {record.grade}
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
          width: 100, dataIndex: 'grade', key: '6'
        }]
      },
    ],
  },
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
    grade: 50,
    enabled: true
  },
  {
    key: '5',
    name: 'Clone',
    avatar: 'https://avatars.dicebear.com/api/initials/clone.svg',
    overallScore: 'Нет оценки',
    grade: 30,
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
  return (
    <div>
      <Table
        bordered
        columns={columns}
        rowClassName={record => !record.enabled ?  "disabled-row" : null}
        dataSource={data}
        scroll={{ x: 1300 }}
      />
    </div>
  );
};

export default Grade;
