import React, { FC, useState } from 'react';
import { ExclamationCircleOutlined, ExclamationCircleFilled } from '@ant-design/icons';
import { Tooltip } from 'antd';

import ModalSettings from '../FeedModals/modalSettings/ModalSettings';

import BottomWrapper from './BootomWrapper/BottomWrapper';
import s from './Wrapper.module.scss';

const imgList = [
  { type: 'all', url: 'https://www.gstatic.com/classroom/themes/img_reachout.jpg' },
  { type: 'all', url: 'https://www.gstatic.com/classroom/themes/img_breakfast.jpg' },
  { type: 'all', url: 'https://www.gstatic.com/classroom/themes/Honors.jpg' },
  { type: 'all', url: 'https://www.gstatic.com/classroom/themes/img_graduation.jpg' },
  { type: 'all', url: 'https://www.gstatic.com/classroom/themes/img_bookclub.jpg' },
  { type: 'all', url: 'https://www.gstatic.com/classroom/themes/img_code.jpg' },
  { type: 'all', url: 'https://www.gstatic.com/classroom/themes/img_reachout.jpg' },
  { type: 'all', url: 'https://www.gstatic.com/classroom/themes/img_learnlanguage.jpg' },
  { type: 'all', url: 'https://www.gstatic.com/classroom/themes/img_backtoschool.jpg' },
  { type: 'all', url: 'https://www.gstatic.com/classroom/themes/img_read.jpg' },
  { type: 'all', url: 'https://www.gstatic.com/classroom/themes/Economics.jpg' },
  { type: 'all', url: 'https://www.gstatic.com/classroom/themes/img_walkingdog.jpg' },
  { type: 'all', url: 'https://www.gstatic.com/classroom/themes/img_hobby.jpg' },
  { type: 'all', url: 'https://www.gstatic.com/classroom/themes/img_sailing.jpg' },
  { type: 'all', url: 'https://www.gstatic.com/classroom/themes/img_videogaming.jpg' },
  { type: 'all', url: 'https://www.gstatic.com/classroom/themes/img_carmaintenance.jpg' },
  { type: 'all', url: 'https://www.gstatic.com/classroom/themes/img_repair.jpg' },
  { type: 'all', url: 'https://www.gstatic.com/classroom/themes/img_hiking.jpg' },
  { type: 'all', url: 'https://www.gstatic.com/classroom/themes/img_hiking.jpg' },
];

const Wrapper: FC = () => {
  const [showData, setShowData] = useState(false);
  const [img, setImg] = useState('https://www.gstatic.com/classroom/themes/img_videogaming.jpg');
  return (
    <div className={s.wrapper}>
      <div className={s.wrapper_img} style={{ backgroundImage: `url(${img})` }}>
        <ModalSettings />
        <div className={s.wrapper_heading}>
          <h2 className={s.heading}>StudyRoom</h2>
          <span className={s.description}>Практическое применение новых технологий</span>
        </div>
        <Tooltip
          placement='bottom'
          title={showData ? 'Скрыть даннве курса' : 'Показать данные курса'}
        >
          {showData ? (
            <ExclamationCircleFilled
              className={s.icon}
              onClick={() => {
                setShowData(!showData);
              }}
            />
          ) : (
            <ExclamationCircleOutlined
              className={s.icon}
              onClick={() => {
                setShowData(!showData);
              }}
            />
          )}
        </Tooltip>
      </div>
      {showData && <BottomWrapper />}
    </div>
  );
};

export default Wrapper;
