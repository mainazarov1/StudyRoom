import { Button, Modal, Row } from 'antd';
import { useState, FC } from 'react';
import { CheckOutlined, EditOutlined } from '@ant-design/icons';
import s from './ModalSettings.module.scss';
import ModalSettingsImg from '../ModalSettingsImg/ModalSettingsImg';
import ModalUploadImg from '../ModalUploadImg/ModalUploadImg';
import ModalComponents from '../../modal/Modal';

interface IColor {
  color: string;
  id: number;
  active: boolean;
}

const ModalSettings:FC = () => {
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState(1)
  const [colorArr, setColorArr] = useState<IColor[]>([
    {color: '#1967d2', id: 1, active: true}, 
    {color: '#1e8e3e', id: 2, active: false}, 
    {color: '#e52592', id: 3, active: false},
    {color: '#e8710a', id: 4, active: false},
    {color: '#129eaf', id: 5, active: false},
    {color: '#9334e6', id: 6, active: false},
    {color: '#4285f4', id: 7, active: false},
    {color: '#5f6368', id: 8, active: false},
  ]);

  const handleClick = (ID: number) => {
    setActiveId(ID)
    colorArr.map(({id, active}) => ID === id ? active = true : active = false)
  }
  
  const showModal = () => {
    setOpen(true);
  };

  const handleCancel = () => { 
    setOpen(false);
  };
  return (
    <>
      <Button 
        icon={<EditOutlined />} 
        size='middle'
        className={s.btn}
        onClick={showModal}
      >
        Настроить
      </Button>
      <ModalComponents
        width={800}
        className={s.modal}
        title='Настроить вид'
        open={open}
        onCancel={handleCancel}
        footer={[
          <Button 
            key='btn' 
            type="link" 
            style={{color: 'rgb(23,78,166)'}} 
            onClick={handleCancel}
          >
            Отмена
          </Button>,
          <Button 
            key='1' 
            type="link" 
            style={{color: 'rgb(23,78,166)'}} 
            onClick={handleCancel}
          >
            Сохранить
          </Button>,
        ]}
      >
        <img src="https://www.gstatic.com/classroom/themes/img_hiking.jpg" alt="wrapper" />
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
            <Row justify={'space-between'} className={s.colors} >
              {
                colorArr.map(item => (
                <span 
                  key={item.id} 
                  onClick={() => handleClick(item.id)}
                  style={{
                    background: `${item.color}`, 
                    width: 64, 
                    height: 64,
                    borderRadius: '50%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                >
                  {item.active && <CheckOutlined style={{color: '#fff', fontSize: 30  }} /> }
                </span>))
              }
            </Row>
          </div>
        </div> 
      </ModalComponents>
    </>
  );
};

export default ModalSettings;
