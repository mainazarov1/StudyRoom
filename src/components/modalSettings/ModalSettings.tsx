import { Button, Modal, message, Row, Upload } from 'antd';
import { useState, FC } from 'react';
import { EditOutlined, PictureOutlined, UploadOutlined } from '@ant-design/icons';
import s from './ModalSettings.module.scss';

const ModalSettings:FC = () => {
  const [open, setOpen] = useState(false);
  const colorArr = ['#1967d2', '#1e8e3e', '#e52592', '#e8710a', '#129eaf', '#9334e6', '#4285f4', '#5f6368'];
  const [ code, setCode] = useState('tq7kdvd');

  const info = () => {
    message.info('Ссылка скопирована ');
  };

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
      <Modal
        className={s.modal}
        title='Настроить вид'
        style={{width: 1000, left: "50%", transform: 'translate(-50%)'
      }}
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
              <Button icon={<PictureOutlined />} >Выбрать фотографию</Button>
              {/* <Upload className={s.upload_btn}> */}
                <Button icon={<UploadOutlined />} >Загрузить фото</Button>
              {/* </Upload> */}
            </div>
          </div>
          <div className={s.color_block}>
            <p className={s.color_title}>Выберите цвет темы</p>
            <Row justify={'space-between'} className={s.colors} >
              {
                colorArr.map(item => (<span 
                  className={s.color_sircl}
                  key={item} 
                  style={{ background: `${item}`, width: 64, height: 64, borderRadius: '50%'}}
                >
                </span>))
              }
            </Row>
          </div>
        </div> 
      </Modal>
    </>
  );
};

export default ModalSettings;
