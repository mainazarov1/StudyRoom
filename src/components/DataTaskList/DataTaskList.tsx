import React, { useState } from 'react';
import { RetweetOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';

import s from './DataTaskList.module.scss';

interface IListItem {
  title: string;
  name: string;
  date: string;
}

const DataTaskList = () => {
  const [arr, setArr] = useState<IListItem[]>([
    {title: 'StudyRoom', name: 'Bakytbekov Beksultan', date: '10 мая'},
    {title: 'StudyRoom', name: 'Bakytbekov Beksultan', date: '10 мая'},
    {title: 'StudyRoom', name: 'Bakytbekov Beksultan', date: '10 мая'},
    {title: 'StudyRoom', name: 'Bakytbekov Beksultan', date: '10 мая'},
    {title: 'StudyRoom', name: 'Bakytbekov Beksultan', date: '10 мая'},
  ]);
  return (
    <>
      <table className={s.table}>
        <thead>
          <tr>
            <th>Курс</th>
            <th>Преподователь</th>
            <th>Создан</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Avatar style={{ backgroundColor: 'blue', verticalAlign: 'middle' }} size="small" gap={1}>
                S
              </Avatar> StudyRoom</td>
            <td>Bakytbekov Beksultan</td>
            <td>10 мая</td>
          </tr>
          {
            arr.map(item => (<tr>
              <td>
                <Avatar style={{ backgroundColor: 'blue', verticalAlign: 'middle' }} size="small" gap={1}>
                  {item.title[0].toUpperCase()}
                </Avatar> {item.title}</td>
              <td>{item.name}</td>
              <td>{item.date}</td>
            </tr>))
          }
        </tbody>
      </table>
    </>
  );
};

export default DataTaskList;