import { Layout } from 'antd';

const { Sider } = Layout;
import s from './Sider.module.scss';

const SiderComponent = () => {
  return (
    <Sider className={s.sider} style={{ backgroundColor: 'white' }}>
      <ul className={s.sider__list}>
        <li className={s.sider__item}>
          <a className={s.sider__link} href=''>
            Все темы
          </a>
        </li>
        <li className={s.sider__item}>
          <a className={s.sider__link} href=''>
            Back end етстовые задания
          </a>
        </li>
        <li className={s.sider__item}>
          <a className={s.sider__link} href=''>
            Front end тестовые задания
          </a>
        </li>
      </ul>
    </Sider>
  );
};

export default SiderComponent;
