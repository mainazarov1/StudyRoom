import { FC, useState } from 'react';
import { Button, Tabs } from 'antd';
import { PictureOutlined } from '@ant-design/icons';
import s from './ModalSettingsImg.module.scss';
import ChoosePhoto from '../../ChoosePhoto/ChoosePhoto';
import { AppModal } from '../../ModalApp';

const ModalSettingsImg: FC = () => {
  const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const arrImg = [
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
  ];

  return (
    <>
      <Button icon={<PictureOutlined />} onClick={showModal} className={s.btn}>
        Выбрать фотографию
      </Button>
      <AppModal
        closable={false}
        width={1400}
        className={s.modal}
        open={open}
        onCancel={handleCancel}
        footer={[
          <Button key='1' className={s.btn} >Отмена</Button>,
          <Button key='2' className={s.btn} >Выбрать тему</Button>
        ]}
      >
        <Tabs defaultActiveKey='1' className={s.tabs}>
          <Tabs.TabPane tab={<div className={s.tab}>Tab 1</div>} key='1'>
            <ChoosePhoto arr={arrImg} />
          </Tabs.TabPane>
          <Tabs.TabPane  tab={<div className={s.tab}>Tab 2</div>} key='2'>
            <ChoosePhoto arr={arrImg.slice(0, 5)} />
          </Tabs.TabPane>
          <Tabs.TabPane  tab={<div className={s.tab}>Tab 3</div>} key='3'>
            <ChoosePhoto arr={arrImg.slice(0, 3)} />
          </Tabs.TabPane>
        </Tabs>
      </AppModal>
    </>
  );
};

export default ModalSettingsImg;
