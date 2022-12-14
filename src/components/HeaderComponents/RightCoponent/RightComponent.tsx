import { CloseOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Dropdown, MenuProps, Tooltip } from 'antd';
import classNames from 'classnames';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import ConditionAgreement from '../../../containers/ConditionAgreement/ConditionAgreement';
import FullScreenModal from '../../../containers/FullScreenModal/FullScreenModal';
import { InputApp } from '../../InputApp/InputApp';

import s from './FigthComponent.module.scss';

const RightComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const items: MenuProps['items'] = [
    {
      label: <span onClick={showModal}>Присоединиться</span>,
      key: '0',
    },
    {
      label: <ConditionAgreement />,
      key: '1',
    },
  ];
  return (
    <>
      <div>
        <Tooltip zIndex={1} title="Создать новый курс или присоединиться к существующему">
          <Dropdown className='plus' menu={{ items: items }} trigger={['click']}>
            <Link to="#" onClick={(e) => e.preventDefault()}>
              <PlusOutlined className='icon plus' />
            </Link>
          </Dropdown>
        </Tooltip>
        <FullScreenModal 
            title={<span><CloseOutlined onClick={handleCancel} />Присоединиться</span>}
            closebtn={<Button type='primary' onClick={handleCancel } style={{marginRight: 24}}>Присоединиться</Button>}
            open={isModalOpen}
            >
          <div className={s.body_blocks} >
            <h4>Вы вошли в аккаунт</h4>
            <div className={s.account_block}>
              <div className={s.account_name}>
                <img src="https://lh3.googleusercontent.com/a/default-user=s40-c" alt="logo" />
                <span>
                  Фамилия Имя <br /> beks@gmail.com
                </span>
              </div>
              <Button>Сменить аккаунт</Button>
            </div>
          </div>
          <div className={s.body_blocks} >
            <h4>Код курса</h4>
            <p>Введите код курса (его можно узнать у преподавателя).</p>
            <InputApp placeholder='Код курса' name='Название' required={true} />
          </div>
          <div className={classNames(s.body_blocks, s.block_text)} >
            <h4>Как выполнить вход с помощью кода курса</h4>
            <ul>
              <li>Используйте аккаунт с правом доступа.</li>
              <li>Введите код курса, состоящий из 5–7 букв или цифр. В нем не должно быть пробелов и специальных символов.</li>
            </ul>
            <p>
              Если вам не удается присоединиться к курсу, прочитайте 
              <a href="https://support.google.com/edu/classroom/answer/6020297?hl=ru&authuser=0#zippy=%2Cзабыли-или-потеряли-код-курса%2Cмой-код-курса-не-работает"> эту статью.</a>
            </p>
          </div>
        </FullScreenModal>
      </div>
    </>
  );
};

export default RightComponent;
