import React, { FC, useState } from 'react';
import s from './Wrapper.module.scss';
import { ExclamationCircleOutlined, ExclamationCircleFilled } from '@ant-design/icons';
import { Tooltip } from 'antd';
import BottomWrapper from './BootomWrapper/BottomWrapper';
import ModalSettings from '../modalSettings/ModalSettings';

const Wrapper:FC = () => {
  const [showData, setShowData] = useState(false);
  const [ img, setImg ] = useState('https://www.gstatic.com/classroom/themes/img_hiking.jpg');
  return (
    <div className={s.wrapper} >                                   
      <div className={s.wrapper_img} style={{backgroundImage: `url(${img})`}} >
        <ModalSettings />
        <div className={s.wrapper_heading}>
          <h2 className={s.heading}>StudyRoom</h2>
          <span className={s.description}>Практическое применение новых технологий</span>
        </div>
        <Tooltip placement='bottom' title={showData ? 'Скрыть даннве курса' : 'Показать данные курса'}>
          {
            showData 
              ? 
              <ExclamationCircleFilled className={s.icon} onClick={() => {setShowData(!showData);}}/>
              : 
              <ExclamationCircleOutlined className={s.icon} onClick={() => {setShowData(!showData);}} />
          }
        </Tooltip>
      </div>
      {
        showData && <BottomWrapper />
      }
    </div>
  );
};

export default Wrapper;