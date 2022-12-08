import { FC, useState } from 'react';
import { Divider, Menu } from 'antd';
import { HomeOutlined, CalendarOutlined, ReadOutlined, UnorderedListOutlined, FileSyncOutlined, SettingOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom'
import SideBarMenuItem from '../../components/SideBArMenuItem/SideBarMenuItem';
import { IList } from '../../core/types/ListType';

interface IProps {
  listStudenCurs: IList[];
  ListTeacherCurs: IList[];
  onClose: () => void;
}

const MenuAside: FC<IProps> = ({ listStudenCurs, ListTeacherCurs, onClose }) => {
  const [isTeacher, setISTeacher] = useState<boolean>(ListTeacherCurs.length <= 0 ? false : true);

  return (
    <Menu theme='light' mode='inline'>
      <Menu.Item key='1' icon={<HomeOutlined />} onClick={onClose}>
        <NavLink to='/main'>
          <span>Курсы</span>
        </NavLink>
      </Menu.Item>
      <Menu.Item key='2' icon={<CalendarOutlined />} onClick={onClose}>
        <NavLink to='/main'>
          <span>Календарь</span>
        </NavLink>
      </Menu.Item>
      {
        isTeacher 
          ?
          <>
            <Divider />
            <Menu.Item key='11' icon={<ReadOutlined />} onClick={onClose} >
              <NavLink to='/unverified-tasks'>
                <span>Не проверенные задание</span>
              </NavLink>
            </Menu.Item>
            {
              ListTeacherCurs?.map((item) => (
                <SideBarMenuItem key={item.id} item={item} />
              ))
            }
          </>
          : 
          null
      }
      <Divider/>
      <Menu.Item key='3' icon={<UnorderedListOutlined />} onClick={onClose}  >
        <NavLink to='/taskListAssigned'>
          <span>Список Заданий</span>
        </NavLink>
      </Menu.Item>
      {
        listStudenCurs?.map((item) => (
          <SideBarMenuItem key={item.id} item={item} />
        ))
      }
      <Divider/>
      <Menu.Item key='4' icon={<FileSyncOutlined />} onClick={onClose} >
        <span>Архив заданий</span>
      </Menu.Item>
      <Menu.Item key='5' icon={<SettingOutlined />} onClick={onClose}>
        <span>Настройки</span>
      </Menu.Item>
    </Menu>
  );
};

export default MenuAside;
