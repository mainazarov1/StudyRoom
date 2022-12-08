import React, { useState } from 'react';
import PanelItem from '../../components/PanelUnverifiedTasks/PanelUnverifiedTasks';
import SelectListLesson from '../../components/SelectListLesson';
import s from '../../styles/UnverifiedTasks.module.scss';

interface IArrList {
    title: string,
    description: string,
    stateFirst: string,
    stateSecond: string,
    stateThird: string,
    color: string,
}

const selectOptionList = [
    { value: 'jack', label: 'Jack', },
    { value: 'lucy', label: 'Lucy', },
    { value: 'disabled', label: 'Disabled', },
    { value: 'Yiminghe', label: 'yiminghe', },
];

const VerifiedTasks: React.FC = () => {
    const [notTime, setNotTime] = useState<IArrList[]>([
        { title: 'Ant Design Title 1', color: '#4285f4', stateFirst: 'Сдано', stateSecond: 'Назначено', stateThird: 'Поставлена оценка', description: 'Ant Design, a design language for background applications, is refined by Ant UED Team' },
        { title: 'Ant Design Title 2', color: '#1890ff', stateFirst: 'Сдано', stateSecond: 'Назначено', stateThird: 'Поставлена оценка', description: 'Ant Design, a design language for background applications, is refined by Ant UED Team' },
        { title: 'Ant Design Title 3', color: '#1e8e3e', stateFirst: 'Сдано', stateSecond: 'Назначено', stateThird: 'Поставлена оценка', description: 'Ant Design, a design language for background applications, is refined by Ant UED Team' },
        { title: 'Ant Design Title 4', color: '#e8710a', stateFirst: 'Сдано', stateSecond: 'Назначено', stateThird: 'Поставлена оценка', description: 'Ant Design, a design language for background applications, is refined by Ant UED Team' },
    ]);
    return (
        <div className={s.list_block}>
            <SelectListLesson option={selectOptionList} />
            <PanelItem arr={notTime} heading={'Срок сдачи не задан'} />
            <PanelItem arr={notTime} heading={'Срок сдачи: 16 дек.'} />
        </div>
    );
};

export default VerifiedTasks;