import React, { useState } from 'react';
import s from '../styles/ListTask.module.scss'
import SelectListLesson from '../components/SelectListLesson';
import PanelItem from '../components/Panel/Panel';


interface IArrList {
  title: string,
  description: string,
  state: string,
  color: string,
}

const TaskListMissedDeadline = () => {
  const [ listState, setListState ] = useState<boolean>(true);
  const [ notTime, setNotTime ] = useState<IArrList[]>([
    { title: 'Ant Design Title 1', color: '#4285f4', state: 'Сдано', description: 'Ant Design, a design language for background applications, is refined by Ant UED Team' },
    { title: 'Ant Design Title 2', color: '#1890ff', state: 'Сдано', description: 'Ant Design, a design language for background applications, is refined by Ant UED Team' },
    { title: 'Ant Design Title 3', color: '#1e8e3e', state: 'Сдано', description: 'Ant Design, a design language for background applications, is refined by Ant UED Team' },
    { title: 'Ant Design Title 4', color: '#e8710a', state: 'Сдано', description: 'Ant Design, a design language for background applications, is refined by Ant UED Team' },
    { title: 'Ant Design Title 1', color: '#4285f4', state: 'Сдано', description: 'Ant Design, a design language for background applications, is refined by Ant UED Team' },
    { title: 'Ant Design Title 2', color: '#1890ff', state: 'Сдано', description: 'Ant Design, a design language for background applications, is refined by Ant UED Team' },
    { title: 'Ant Design Title 3', color: '#1e8e3e', state: 'Сдано', description: 'Ant Design, a design language for background applications, is refined by Ant UED Team' },
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
      <PanelItem arr={notTime} heading={'На этой неделе'} />
      <PanelItem arr={notTime} heading={'На прошлой неделе'} />
      <PanelItem arr={notTime} heading={'Раньше'} />
    </div>
  );
};

export default TaskListMissedDeadline;