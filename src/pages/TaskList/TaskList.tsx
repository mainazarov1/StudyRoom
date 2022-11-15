import React, { useState } from 'react';
import s from './ListTask.module.scss';
import { Collapse, Avatar, List, Button } from 'antd';
import SelectListLesson from '../../components/SelectListLesson';
import { DownOutlined, SnippetsOutlined } from '@ant-design/icons';
import PanelItem from '../../components/Panel/Panel';

const { Panel } = Collapse;
interface IArrList {
  title: string,
  description: string,
  lesson: string,
  color: string,
}

const TaskList: React.FC = () => {
  const [ listState, setListState ] = useState<boolean>(true);
  const [ notTime, setNotTime ] = useState<IArrList[]>([
    { title: 'Ant Design Title 1', color: '#4285f4', lesson: 'Front-end', description: 'Ant Design, a design language for background applications, is refined by Ant UED Team' },
    { title: 'Ant Design Title 2', color: '#1890ff', lesson: 'Back-end', description: 'Ant Design, a design language for background applications, is refined by Ant UED Team' },
    { title: 'Ant Design Title 3', color: '#1e8e3e', lesson: 'Data scinse', description: 'Ant Design, a design language for background applications, is refined by Ant UED Team' },
    { title: 'Ant Design Title 4', color: '#e8710a', lesson: 'UX-UI Desing', description: 'Ant Design, a design language for background applications, is refined by Ant UED Team' },
    { title: 'Ant Design Title 1', color: '#4285f4', lesson: 'Front-end', description: 'Ant Design, a design language for background applications, is refined by Ant UED Team' },
    { title: 'Ant Design Title 2', color: '#1890ff', lesson: 'Back-end', description: 'Ant Design, a design language for background applications, is refined by Ant UED Team' },
    { title: 'Ant Design Title 3', color: '#1e8e3e', lesson: 'Data scinse', description: 'Ant Design, a design language for background applications, is refined by Ant UED Team' },
  ]);

  const selectOPtionList = [
    { value: 'jack', label: 'Jack',},
    { value: 'lucy', label: 'Lucy',},
    { value: 'disabled', label: 'Disabled',},
    { value: 'Yiminghe', label: 'yiminghe',},
  ];

  return (
    <div className={s.list_block} >
      <SelectListLesson option={selectOPtionList} />
      <PanelItem arr={notTime} heading={'Срок сдачи не задан'} />
      <PanelItem arr={notTime} heading={'а этой неделе'} />
      <PanelItem arr={notTime} heading={'Следуюшая неделя'} />
      <PanelItem arr={notTime} heading={'Не сейчас'} />

    </div>
  );
};

export default TaskList;