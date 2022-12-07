import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Dropdown, MenuProps, Tooltip } from 'antd';
import Title from 'antd/lib/typography/Title';
import { Link, NavLink, Route } from 'react-router-dom';

interface ImiddleItems {
    title: string,
    path: string
}

interface IleftTrigger {
    title: string,
    path: string
}

interface IHeaderLogoPlusProps {
    rightComponent?: JSX.Element,
    leftTrigger: IleftTrigger,
    middleItems: () => ImiddleItems[]
}


export const HeaderLogoPlus: React.FC<IHeaderLogoPlusProps> = ({ leftTrigger, middleItems, rightComponent }) => {
  const arr = middleItems()
  return (
    <>
      <div className='item'>
        <Title className="item-title" style={{ margin: 0 }} level={4}> {leftTrigger.path ? <NavLink to={leftTrigger.path}> {leftTrigger.title} </NavLink>  : leftTrigger.title} </Title>
      </div>
      <div className='header-middle'>
        {arr.map((item) => (
          <div
            className='header-middle-item'>
            <Title style={{ margin: 0 }} level={5}>
              <NavLink to={item.path} className={({ isActive }) =>
                isActive ? 'active' : ''
              }>
                {item.title}
              </NavLink>
            </Title>
          </div>
        ))}
      </div>
      {rightComponent && <div className='item right-item'>
        {rightComponent}
      </div>}

    </>
  );
};