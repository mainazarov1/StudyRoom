import {FC, useState } from 'react';
import { Button, Tabs } from 'antd';;
import { PictureOutlined } from '@ant-design/icons';

import ChoosePhoto from '../../ChoosePhoto/ChoosePhoto';
import ModalComponents from '../../modal/Modal';

import s from './ModalSettingsImg.module.scss';

const ModalSettingsImg:FC = () => {
  const [open, setOpen] = useState(false);
  const colorArr = ['#1967d2', '#1e8e3e', '#e52592', '#e8710a', '#129eaf', '#9334e6', '#4285f4', '#5f6368'];
  
  const showModal = () => {
    setOpen(true);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const arrImg = [
    {type:'all', url: 'https://www.gstatic.com/classroom/themes/img_reachout.jpg',},
    {type:'all', url: 'https://www.gstatic.com/classroom/themes/img_breakfast.jpg',},
    {type:'all', url: 'https://www.gstatic.com/classroom/themes/Honors.jpg',},
    {type:'all', url: 'https://www.gstatic.com/classroom/themes/img_graduation.jpg',},
    {type:'all', url: 'https://www.gstatic.com/classroom/themes/img_bookclub.jpg',},
    {type:'all', url: 'https://www.gstatic.com/classroom/themes/img_code.jpg',},
    {type:'all', url: 'https://www.gstatic.com/classroom/themes/img_reachout.jpg',},
    {type:'all', url: 'https://www.gstatic.com/classroom/themes/img_learnlanguage.jpg',},
    {type:'all', url: 'https://www.gstatic.com/classroom/themes/img_backtoschool.jpg',},
    {type:'all', url: 'https://www.gstatic.com/classroom/themes/img_read.jpg',},
    {type:'all', url: 'https://www.gstatic.com/classroom/themes/Economics.jpg'},
    {type:'all', url: 'https://www.gstatic.com/classroom/themes/img_walkingdog.jpg',},
    {type:'all', url: 'https://www.gstatic.com/classroom/themes/img_hobby.jpg',},
    {type:'all', url: 'https://www.gstatic.com/classroom/themes/img_sailing.jpg',},
    {type:'all', url: 'https://www.gstatic.com/classroom/themes/img_videogaming.jpg',},
    {type:'all', url: 'https://www.gstatic.com/classroom/themes/img_carmaintenance.jpg',},
    {type:'all', url: 'https://www.gstatic.com/classroom/themes/img_repair.jpg',},
    {type:'all', url: 'https://www.gstatic.com/classroom/themes/img_hiking.jpg',},
  ];

  return (
    <>
      <Button icon={<PictureOutlined />} onClick={showModal} >Выбрать фотографию</Button>
      <ModalComponents 
        width={1400}
        className={s.modal}
        title='Выбрать тему'
        open={open}
        onCancel={handleCancel}
      >
        <Tabs defaultActiveKey="1" 
          className={s.tabs}
        >
          <Tabs.TabPane tab="Tab 1" key="1">
            <ChoosePhoto  arr={arrImg}/>
          </Tabs.TabPane>
          <Tabs.TabPane tab="Tab 2" key="2">
            <ChoosePhoto  arr={arrImg.slice(0, 5)}/>
          </Tabs.TabPane>
          <Tabs.TabPane tab="Tab 3" key="3">
            <ChoosePhoto  arr={arrImg.slice(0,3)}/>
          </Tabs.TabPane>
        </Tabs>
      </ModalComponents>
    </>
  );
};

export default ModalSettingsImg;