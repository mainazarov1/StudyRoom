import { FC } from 'react';
import ModalCode from '../../FeedModals/ModalCode/ModalCode';

import s from './BottomWrapper.module.scss';

const BottomWrapper:FC = () => {
  return (
    <div className={s.bottom_block}>
      <span>
        <b>Код Курса</b> 
        <span className={s.code}>tq7kdvd</span>
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
