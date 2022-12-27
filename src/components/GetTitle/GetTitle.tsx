import { EllipsisOutlined } from '@ant-design/icons';
import { Divider, Dropdown, MenuProps } from 'antd';
import React from 'react';
import { NavLink } from 'react-router-dom';
import s from '../../pages/Tasks/Tasks.module.scss';

const GetTitle = (props: {deadline: string, task: string, fromTo: number}) => {
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

    return (
        <div className='task-dropdown'>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div className='title-deadline'>{props.deadline}</div>
                <div> <NavLink className='task-link' to={'#'}>{props.task}</NavLink></div>
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
            <div className='title-fromTo'>{props.fromTo}</div>
          </div>
        </div>
      )
};

export default GetTitle;