import { useState } from 'react';
import classNames from 'classnames';
import { Col, Collapse, Dropdown, Row, Space, Typography } from 'antd';
import { CommentOutlined, EllipsisOutlined } from '@ant-design/icons';

import { TaskApi } from '../../core/types/types';
import FileIcon from '../../assets/images/FileIcon';

import { TasksModal } from './components/TasksModal/TasksModal';
import s from './Tasks.module.scss';

import type { MenuProps } from 'antd/lib/menu';

const { Panel } = Collapse;

const taskDropdownStudents: MenuProps['items'] = [
  { label: 'Копировать ссылку', key: 'item-1' }, // remember to pass the key prop
  { type: 'divider' },
  { label: 'Пожаловаться', key: 'item-2' },
];

const TaskItem = (task: TaskApi, key: string | number) => {
  const [collapseKey, setCollapseKey] = useState<string | string[]>();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const taskDropdownTeacher: MenuProps['items'] = [
    {
      label: 'Изменить',
      key: 'item-1',
      onClick: () => handleOpen(),
    },
    { label: 'Удалить', key: 'item-2' },
    { label: 'Копировать ссылку', key: 'item-3' }, // remember to pass the key prop
    { type: 'divider' },
    { label: 'Переместить вверх', key: 'item-4' },
    { label: 'Переместить вниз', key: 'item-5' },
  ];

  const handleActiveCollapse = (keyOfCollapse: string | string[]) => {
    setCollapseKey(keyOfCollapse);
    console.log(keyOfCollapse);
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const CollapseHead = () => (
    <>
      <Row
        className={s.collapse__head__wrap}
        justify={'space-between'}
        align={'middle'}
      >
        <Row align={'middle'} gutter={16}>
          <Row className={s.collapse__head__icon__wrap}>
            <FileIcon className={s.collapse__head__icon} />
          </Row>
          <Col>
            <Typography.Text
              style={{ width: 230 }}
              ellipsis={true}
              className={s.collapse__head__subtitle}
            >
              {task.title}
            </Typography.Text>
          </Col>
          <Space>
            <Space>
              <CommentOutlined />
              {task.countComments ? task.countComments : ''}
            </Space>
            <div>
              <span style={{ color: 'rgba(0,0,0,.549)', fontSize: '0.75rem' }}>Эссе</span>
            </div>
          </Space>
        </Row>
        <Typography.Text className={s.task__points}> {task.points}</Typography.Text>
        <Row gutter={12} align={'middle'}>
          <Col>
            <Typography.Text className={s.collapse__head__term}>
              {task.deadLine ? 'Срок сдачи: 22 июл. 2023 г.' : 'Срок сдачи не задан'}
            </Typography.Text>
          </Col>
          <Col onClick={(e) => e.stopPropagation()}>
            <Dropdown
              placement={'bottomRight'}
              className={s.collapse__head__dropdown}
              trigger={['click']}
              menu={{ items: task.isTeacher ? taskDropdownTeacher : taskDropdownStudents }}
            >
              <EllipsisOutlined
                className={s.collapse__elipsis}
                style={{ fontSize: '30px', color: 'rgb(25,103,210)' }}
                color='green'
                rotate={90}
              />
            </Dropdown>
          </Col>
        </Row>
      </Row>
    </>
  );

  return (
    <>
      <Collapse
        className={s.collapse}
        bordered={false}
        accordion={true}
        destroyInactivePanel={true}
        onChange={(keyOfCollapse) => handleActiveCollapse(keyOfCollapse)}
      >
        <Panel
          className={classNames(s.collapse__panel, task.id === collapseKey ? s.collapse__panel__active : '')}
          showArrow={false}
          header={<CollapseHead />}
          key={task.id}
        >
          <div className={classNames(s.collapse__content, s.collapse__content__wrap)}>
            <Row>
              <Row
                style={{
                  flexGrow: 1,
                  marginLeft: 0,
                  minWidth: 0,
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                <span className={s.task__publication__time}>{task.timePublication}</span>
              </Row>
              <Row
                style={{
                  flexGrow: 0,
                  flexShrink: 0,
                  marginLeft: '1rem',
                }}
              >
                <span className={s.task__deadline}>{task.deadLine ? 'Назначено' : 'Не назначено'}</span>
              </Row>
            </Row>
            <Row style={{ marginTop: '1rem' }}>
              <div>
                {task.htmlContent}
              </div>
            </Row>
          </div>
          <div className={classNames(s.collapse__content__wrap)}>
            <Typography.Link className={s.collapse__button}>Посмотреть задание</Typography.Link>
          </div>
        </Panel>
      </Collapse>
      <TasksModal
        open={isOpen}
        handleClose={handleClose}
        task={task}
        isModalEdit={false}
      />
    </>
  );
};

export default TaskItem;
