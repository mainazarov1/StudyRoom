import { Button, Row } from 'antd';
import { useState, FC, useEffect } from 'react';
import { CheckOutlined, EditOutlined } from '@ant-design/icons';

import ModalSettingsImg from '../ModalSettingsImg/ModalSettingsImg';
import ModalUploadImg from '../ModalUploadImg/ModalUploadImg';
import { AppModal } from '../../ModalApp';

import s from './ModalSettings.module.scss';

interface IColor {
  color?: string;
  title: string;
}

const ModalSettings: FC = () => {
  const [open, setOpen] = useState(false);

  const colorArr: IColor[] = [
    { color: '#1967d2', title: 'blue' },
    { color: '#1e8e3e', title: 'green' },
    { color: '#e52592', title: 'pink' },
    { color: '#e8710a', title: 'orange' },
    { color: '#129eaf', title: 'green-blue' },
    { color: '#9334e6', title: 'purple' },
    { color: '#4285f4', title: 'light-blue' },
    { color: '#5f6368', title: 'grey' },
  ];

  const [color, setColor] = useState<string>('blue');

  useEffect(() => {
    const root = document.querySelector(':root') as HTMLElement;
    root.style.setProperty('--default-color', `var(--${color}-color)`);
    root.style.setProperty('--default-hover-color', `var(--${color}-hover-color)`);
  }, [color]);

  const showModal = () => {
    setOpen(true);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <>
      <Button icon={<EditOutlined />} size='middle' className={s.absolute_btn} onClick={showModal}>
        Настроить
      </Button>
      <AppModal
        width={800}
        className={s.modal}
        title='Настроить вид'
        open={open}
        onCancel={handleCancel}
        footer={[
          <Button className={s.btn} key='2' type='link' onClick={handleCancel}>
            Отмена
          </Button>,
          <Button className={s.btn} key='1' type='link' onClick={handleCancel}>
            Сохранить
          </Button>,
        ]}
      >
        <img src='https://www.gstatic.com/classroom/themes/img_hiking.jpg' alt='wrapper' />
        <div className={s.modal_body}>
          <div className={s.body}>
            <span className={s.text}>Выберите фото обложки</span>
            <div className={s.modal_btns}>
              <ModalSettingsImg />
              <ModalUploadImg />
            </div>
          </div>
          <div className={s.color_block}>
            <p className={s.color_title}>Выберите цвет темы</p>
            <Row justify={'space-between'} className={s.colors}>
              {colorArr.map((item, i) => (
                <span
                  key={i}
                  onClick={() => setColor(item.title)}
                  style={{
                    background: `${item.color}`,
                    width: 64,
                    height: 64,
                    borderRadius: '50%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  {item.title === color && (
                    <CheckOutlined style={{ color: '#fff', fontSize: 30 }} />
                  )}
                </span>
              ))}
            </Row>
          </div>
        </div>
      </AppModal>
    </>
  );
};

export default ModalSettings;
