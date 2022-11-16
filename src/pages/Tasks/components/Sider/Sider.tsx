import { Layout } from 'antd';
import React from 'react';

const { Sider } = Layout;

const SiderComponent = () => {
  return (
    <Sider style={{ backgroundColor: 'green', marginRight: '20px' }}>
      <ul>
        <li>
               Все темы
        </li>
        <li>Back end етстовые задания</li>
        <li>Front end тестовые задания</li>
        <li>Спец тестовые задания</li>
        <li>Эмир</li>
        <li>Олжас</li>
      </ul>
    </Sider>
  );
};


export default SiderComponent;