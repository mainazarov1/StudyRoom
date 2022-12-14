import {
  CaretDownOutlined,
  CheckOutlined,
  CloseOutlined,
  CopyOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { Button, Form, Dropdown, Space, Divider, Select, Switch } from 'antd';
import classNames from 'classnames';
import React, { useState } from 'react';

import FullScreenModal from '../../containers/FullScreenModal/FullScreenModal';
import { CopyPaste } from '../../utils/CopyPaste';
import ModalCode from '../FeedModals/ModalCode/ModalCode';
import { InputApp } from '../InputApp/InputApp';

import s from './SettingCourseModal.module.scss';

const SettingCourseModal: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [dalete, setDelete] = useState(true);
  const [common, setCommon] = useState(true);
  const handleChange = () => setOpen(!open);
  const items = [
    {
      key: '1',
      label: 'Сброс',
    },
    {
      key: '2',
      label: 'Отключить',
    },
  ];

  return (
    <>
      <SettingOutlined onClick={handleChange} className={s.open_icon} />
      <FullScreenModal
        title={
          <h2>
            <CloseOutlined onClick={handleChange} /> Насторйки курса{' '}
          </h2>
        }
        closebtn={
          <Button type='primary' onClick={handleChange} className={s.close_btn}>
            Сохранить
          </Button>
        }
        open={open}
      >
        <div className={s.setting_block}>
          <Form layout='vertical' className={s.block}>
            <h3 className={s.heading}>Сведение о курсе</h3>
            <InputApp
              className={s.input}
              placeholder='Название курся (Объязательно)'
              name='Название'
              required={true}
            />
            <InputApp className={s.input} placeholder='Раздел' name='Раздел' />
            <InputApp className={s.input} placeholder='Описание курса' name='Раздел' />
            <InputApp className={s.input} placeholder='Предмет' name='Предмет' />
            <InputApp className={s.input} placeholder='Аудитория' name='Аудитория' />
          </Form>
          <div className={s.block}>
            <h3 className={s.heading}>Общие</h3>
            <h3 className={s.middle_size}>Коды для приглашений</h3>
            <Space className={s.justify}>
              <div>
                <h6 className={s.last_heading}>Управление кодами для приглашений</h6>
                <p className={s.text}>
                  Настройки влияют и на ссылки для приглашений, и на коды для курсов.
                </p>
              </div>
              <Button
                className={classNames(s.drop_btn, s.btn)}
                type='link'
                icon={
                  <Dropdown menu={{ items }} trigger={['click']}>
                    <CaretDownOutlined />
                  </Dropdown>
                }
              >
                Включено
              </Button>
            </Space>
            <Space className={s.justify}>
              <h6 className={s.last_heading}>Ссылка для приглашения</h6>
              <div>
                <p className={s.text}>
                  https://classroom.google.com/c/NTcwNjUyMjg1OTQ1?cjc=tq7kdvd
                  <CopyOutlined
                    className={s.icon}
                    onClick={() =>
                      CopyPaste('https://classroom.google.com/c/NTcwNjUyMjg1OTQ1?cjc=tq7kdvd')
                    }
                  />
                </p>
              </div>
            </Space>
            <Space className={s.justify}>
              <h6 className={s.last_heading}>Код курса</h6>
              <p>tq7kdvd</p>
            </Space>
            <Space className={s.justify}>
              <h6 className={s.last_heading}>Показать код</h6>
              <label htmlFor='code'>
                <span>Показать код</span>
                <ModalCode />
              </label>
            </Space>
            <Divider />
            <Space className={s.justify}>
              <h6 className={s.last_heading}>Лента</h6>
              <Select
                size='large'
                defaultValue='Учащиеся могут публиковать записи и оставлять комментарии'
                style={{ width: 300 }}
                className={s.select}
                allowClear
                options={[
                  {
                    value: 'Учащиеся могут публиковать записи и оставлять комментарии',
                    label: 'Учащиеся могут публиковать записи и оставлять комментарии',
                  },
                  {
                    value: 'Учащиеся могут публиковать записи и оставлять комментарии',
                    label: 'Учащиеся могут публиковать записи и оставлять комментарии',
                  },
                  {
                    value: 'Только преподаватели могут публиковать записи и оставлять комментарии',
                    label: 'Только преподаватели могут публиковать записи и оставлять комментарии',
                  },
                ]}
              />
            </Space>
            <Space className={s.justify}>
              <h6 className={s.last_heading}>Задания в ленте</h6>
              <Select
                size='large'
                defaultValue='Показывать сжатые уведомления'
                style={{ width: 300 }}
                className={s.select}
                allowClear
                options={[
                  {
                    value: 'Показывать сжатые уведомления',
                    label: 'Показывать сжатые уведомления',
                  },
                  {
                    value: 'Показывать сжатые уведомления',
                    label: 'Показывать сжатые уведомления',
                  },
                  {
                    value: 'Скрывать уведомления',
                    label: 'Скрывать уведомления',
                  },
                ]}
              />
            </Space>
            <Space className={s.justify}>
              <div>
                <h6 className={s.last_heading}>Показать удаленные элементы</h6>
                <p className={s.text}>Только преподаватели могут видеть удаленные элементы.</p>
              </div>
              <Switch
                className={dalete ? s.switch : s.swithcUnChecked}
                onChange={() => setDelete(!dalete)}
                checkedChildren={<CheckOutlined />}
                unCheckedChildren={<CloseOutlined />}
                defaultChecked
              />
            </Space>
          </div>
          <div className={s.block}>
            <h3 className={s.heading}>Оценки</h3>
            <h3 className={s.middle_size}>Калькулятор оценок</h3>
            <Space className={s.justify}>
              <div>
                <h6 className={s.last_heading}>Расчет общей оценки</h6>
                <p className={s.text}>
                  Выберите систему выставления оценок. <a href='#'>Подробнее…</a>
                </p>
              </div>
              <Select
                size='large'
                defaultValue='Общей оценки нет'
                style={{ width: 300 }}
                className={s.select}
                allowClear
                options={[
                  {
                    value: 'Общей оценки нет',
                    label: 'Общей оценки нет',
                  },
                  {
                    value: 'На основе максимального количества баллов',
                    label: 'На основе максимального количества баллов',
                  },
                  {
                    value: 'На основе категории оценок',
                    label: 'На основе категории оценок',
                  },
                ]}
              />
            </Space>
            <Space className={s.justify}>
              <div>
                <h6 className={s.last_heading}>Показывать учащимся общую оценку</h6>
              </div>
              <Switch
                className={common ? s.switch : s.swithcUnChecked}
                onChange={() => setCommon(!common)}
                checkedChildren={<CheckOutlined />}
                unCheckedChildren={<CloseOutlined />}
                defaultChecked
              />
            </Space>
            <h3 className={s.middle_size}>Категории оценок</h3>
            <Button className={s.btn} type='link'>
              Добавить категорию оценок
            </Button>
          </div>
        </div>
      </FullScreenModal>
    </>
  );
};

export default SettingCourseModal;
