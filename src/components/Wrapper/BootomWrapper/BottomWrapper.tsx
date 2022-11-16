import { FC, useState } from 'react';
// import { Tooltip } from 'antd';
// import { ExpandOutlined } from '@ant-design/icons';
import s from './BottomWrapper.module.scss';
import ModalCode from '../../ModalCode/ModalCode';

const BottomWrapper:FC = () => {
  const [ code, setCode] = useState('tq7kdvd');

  return (
    <div className={s.bottom_block}>
      <span>
        <b>Код Курса</b> 
        {code}
        <ModalCode />
      </span>
      <span>
        <b>Предмет</b> 
        Front-end dev
      </span>
      <span>
        <b>Аудитория</b>
        123
      </span>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit tempora, in quia
      </p>
      
    </div>
  );
};

export default BottomWrapper;