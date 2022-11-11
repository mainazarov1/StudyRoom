import React, { useState } from 'react';
import s from './ListTask.module.scss';
import { Collapse, Avatar, List } from 'antd';
import SelectListLesson from '../../components/SelectListLesson';


const { Panel } = Collapse;

interface IArrList {
  title: string,
  description: string,
  lesson: string,
}

const TaskList: React.FC = () => {
  const [ notTime, setNotTime ] = useState<IArrList[]>([
    { title: 'Ant Design Title 1', lesson: 'Front-end', description: 'Ant Design, a design language for background applications, is refined by Ant UED Team' },
    { title: 'Ant Design Title 2', lesson: 'Back-end', description: 'Ant Design, a design language for background applications, is refined by Ant UED Team' },
    { title: 'Ant Design Title 3', lesson: 'Data scinse', description: 'Ant Design, a design language for background applications, is refined by Ant UED Team' },
    { title: 'Ant Design Title 4', lesson: 'UX-UI Desing', description: 'Ant Design, a design language for background applications, is refined by Ant UED Team' },
  ]);

  const onChange = (key: string | string[]) => {
    console.log(key);
  };

  return (
    <div className={s.list_block} >
      <SelectListLesson />
      <Collapse
        accordion
        ghost
        onChange={onChange}
        expandIconPosition='end'
      >
        <Panel 
          className={s.accordion}
          header="Срок сдачи не залан" 
          key="1"
        >
          <List
            itemLayout="horizontal"
            dataSource={notTime}
            renderItem={item => (
              <List.Item
                className={s.item}
              >
                <span style={{order: 2}} >{item.lesson}</span><br />
                <List.Item.Meta
                  avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                  title={item.title}
                  description={item.description}
                />
              </List.Item>
            )}
          />
        </Panel>
        <Panel 
          className={s.accordion}
          header="На этой неделе" 
          key="2"
        >
          <List
            itemLayout="horizontal"
            dataSource={notTime}
            renderItem={item => (
              <List.Item
                className={s.item}
              >
                <span style={{order: 2}}>{item.lesson}</span>
                <List.Item.Meta
                  avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                  title={item.title}
                  description={item.description}
                />
              </List.Item>
            )}
          />
        </Panel>
        <Panel 
          className={s.accordion}
          header="Следуюшая неделя" 
          key="3"
        >
          <List
            itemLayout="horizontal"
            dataSource={notTime}
            renderItem={item => (
              <List.Item
                className={s.item}
              >
                <span style={{order: 2}} >{item.lesson}</span>
                <List.Item.Meta
                  avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                  title={item.title}
                  description={item.description}
                />
              </List.Item>
            )}
          />
        </Panel>
        <Panel 
          className={s.accordion}
          header="Не сейчас" 
          key="4"
        >
          <List
            itemLayout="horizontal"
            dataSource={notTime}
            renderItem={item => (
              <List.Item
                className={s.item}
              >
                <span style={{order: 2}}>{item.lesson}</span>
                <List.Item.Meta
                  avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                  title={item.title}
                  description={item.description}
                />
              </List.Item>
            )}
          />
        </Panel>
      </Collapse>
    </div>
  );
};

export default TaskList;