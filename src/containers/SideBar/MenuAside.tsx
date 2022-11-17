import { FC, useState } from 'react';
import { Menu } from 'antd';
import { HomeOutlined, CalendarOutlined, ReadOutlined, UnorderedListOutlined, FileSyncOutlined, SettingOutlined } from '@ant-design/icons';

import SideBarMenuItem from '../../components/SideBArMenuItem/SideBarMenuItem';
import { IList } from '../../core/types/ListType';

interface IProps {
  listStudenCurs: IList[],
  ListTeacherCurs: IList[],
  onClose: () => void
}

const MenuAside:FC<IProps> = ( { listStudenCurs, ListTeacherCurs, onClose }) => {
  const [isTeacher, setISTeacher] = useState<boolean>(true);

  return (
    <Menu theme="light" mode="inline">
      <Menu.Item key='1' icon={<HomeOutlined />} onClick={onClose} >
        <span>Курсы</span>
      </Menu.Item>
      <Menu.Item key='2' icon={<CalendarOutlined />} onClick={onClose} >
        <span>Календарь</span>
      </Menu.Item>
      {
        isTeacher 
          ?
          <>
            <hr style={{ height: 1, margin: '10px 0', backgroundColor: '#f0f0f0' } }/>
            <Menu.Item key='11' icon={<ReadOutlined />} onClick={onClose} >
              <span>Не проверенные задание</span>
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
      <hr style={ { height: 1, margin: '10px 0', backgroundColor: '#f0f0f0' } }/>
      <Menu.Item key='3' icon={<UnorderedListOutlined />} onClick={onClose}  >
        <span>Список Заданий</span>
      </Menu.Item>
      {
        listStudenCurs?.map((item) => (
          <SideBarMenuItem key={item.id} item={item} />
        ))
      }
      <hr style={ {height: 1, margin: '10px 0', backgroundColor: '#f0f0f0'} }/>
      <Menu.Item key='4' icon={<FileSyncOutlined />} onClick={onClose} >
        <span>Архив заданий</span>
      </Menu.Item>
      <Menu.Item key='5' icon={<SettingOutlined />} onClick={onClose} >
        <span>Настройки</span>
      </Menu.Item>
    </Menu> 
  );
};

export default MenuAside;