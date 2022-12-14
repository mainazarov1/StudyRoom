import { Avatar, Col, Dropdown, Menu, Row, Tooltip, Typography } from 'antd';
import Icon, { EllipsisOutlined } from '@ant-design/icons';
import { MenuInfo } from 'rc-menu/lib/interface';
// eslint-disable-next-line import/named
import { Draggable, DraggingStyle, NotDraggingStyle } from 'react-beautiful-dnd';
import { NavLink } from 'react-router-dom';

import s from './style.module.scss';

import type { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';

const { Title, Link, Text } = Typography;

interface CardProps {
  id: string;
  background: string | null;
  creatorAvatar: string | null;
  title: string;
  chapter: string;
  creator: string;
  isTeacher: boolean;
  index: number;
  pathToGrade: string;
}

const ProfileSvg = () => (
  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
    <path
      d="M19 3h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7.55 0c.14-.15.33-.25.55-.25s.41.1.55.25c.12.13.2.31.2.5 0 .41-.34.75-.75.75s-.75-.34-.75-.75c0-.19.08-.37.2-.5zM19 5v10.79C16.52 14.37 13.23 14 12 14s-4.52.37-7 1.79V5h14zM5 19v-.77C6.74 16.66 10.32 16 12 16s5.26.66 7 2.23V19H5z"></path>
    <path
      d="M12 13c1.94 0 3.5-1.56 3.5-3.5S13.94 6 12 6 8.5 7.56 8.5 9.5 10.06 13 12 13zm0-5c.83 0 1.5.67 1.5 1.5S12.83 11 12 11s-1.5-.67-1.5-1.5S11.17 8 12 8z"></path>
  </svg>
);
const StatSvg = () => (
  <svg focusable="false" width="24" height="24" viewBox="0 0 24 24">
    <path d="M16 6v2h2.58l-5.17 5.17-4-4L2 16.59 3.41 18l6-6 4 4L20 9.42V12h2V6z"></path>
  </svg>
);
const FolderSvg = () => (
  <svg focusable="false" width="24" height="24" viewBox="0 0 24 24">
    <path
      d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V8h16v10z"></path>
  </svg>
);

const ProfileIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={ProfileSvg} {...props} />
);

const StatisticIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={StatSvg} {...props} />
);

const FolderIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={FolderSvg} {...props} />
);

const handleMenuClick = (e: MenuInfo) => {
  console.log('click', e);
};

const teacherMenuItems = (
  <Menu className={s.card__menu} onClick={handleMenuClick}>
    <Menu.Item className={s.card__dropdown__item} key={'Переместить'}>
      Переместить
    </Menu.Item>
    <Menu.Item className={s.card__dropdown__item} key={'Переместить'}>
      Копировать ссылку
    </Menu.Item>
    <Menu.Item className={s.card__dropdown__item} key={'Переместить'}>
      Изменить
    </Menu.Item>
    <Menu.Item className={s.card__dropdown__item} key={'Переместить'}>
      Копировать
    </Menu.Item>
    <Menu.Item className={s.card__dropdown__item} key={'Переместить'}>
      Архивировать
    </Menu.Item>
  </Menu>
);

const studentMenuItems = (
  <Menu className={s.card__menu} onClick={handleMenuClick}>
    <Menu.Item className={s.card__dropdown__item} key={'Переместить'}>
      Переместить
    </Menu.Item>
    <Menu.Item className={s.card__dropdown__item} key={'Покинуть курс'}>
      Покинуть курс
    </Menu.Item>
    <Menu.Divider className={s.card__dropdown__divider} />
    <Menu.Item className={s.card__dropdown__item} key={'Пожаловаться'}>
      {' '}
      Пожаловаться
    </Menu.Item>
  </Menu>
);

const getItemStyle = (
  isDragging: boolean,
  draggableStyle: DraggingStyle | NotDraggingStyle | undefined,
) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: 'none',

  background: 'white',
  boxShadow: isDragging ? '' : '',
  ...draggableStyle,
});

export const Card = ({
  id,
  background,
  creatorAvatar,
  title,
  chapter,
  creator,
  isTeacher,
  index,
  pathToGrade
}: CardProps) => {
  return (
    <Draggable draggableId={id} index={index}>
      {(provided, snapshot) => (
        <Col
          className={s.card__item}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          style={getItemStyle(snapshot.isDragging, provided.draggableProps.style)}
        >
          <div className={s.home__card}>
            <div className={s.card__top}>
              <div
                style={{ background: background == '' ? '' : 'orange' }}
                className={s.card__info}
              >
                <Title
                  className={s.card__title__wrap}
                  style={{ display: 'flex', justifyContent: 'space-between' }}
                  level={2}
                >
                  <NavLink to={'/feed'} className={s.card__top__link}  >
                    <Title className={s.card__title} level={2}>
                      {title}
                    </Title>
                    <Text className={s.card__chapter}> {chapter} </Text>
                  </NavLink>
                  <Dropdown
                    destroyPopupOnHide={true}
                    trigger={['click']}
                    className={s.card__dropdown}
                    overlay={isTeacher ? teacherMenuItems : studentMenuItems}
                  >
                    <EllipsisOutlined />
                  </Dropdown>
                </Title>
                <div>
                  <Text className={s.card__creator}> {creator} </Text>
                </div>
              </div>
            </div>
            <div className={s.card__avatar__wrap}>
              {isTeacher ? null : (
                <Avatar
                  className={s.card__avatar}
                  src={creatorAvatar}
                  style={{ backgroundColor: 'orange', verticalAlign: 'middle' }}
                  size="large"
                />
              )}
            </div>
            <Row gutter={20} align="middle" justify={'end'} className={s.card__bottom}>
              <Col>
                <div className={s.card__icon__wrap}>
                  {isTeacher ? (
                    <Tooltip
                      className={s.card__tooltip}
                      color="#3C4043"
                      overlayInnerStyle={{ color: '#D6D8DB' }}
                      overlayStyle={{ borderRadius: '4px', width: '200px' }}
                      title={`Открыть журнал успеваемости по курсу ${title}`}
                    >
                      <NavLink to={pathToGrade}>
                        <StatisticIcon className={s.card__icon} style={{ color: 'black' }} />
                      </NavLink>
                    </Tooltip>
                  ) : (
                    <Tooltip
                      className={s.card__tooltip}
                      color="#3C4043"
                      overlayInnerStyle={{ color: '#D6D8DB' }}
                      overlayStyle={{ borderRadius: '4px', width: '200px' }}
                      title={`Открыть работу: ${title}`}
                    >
                      <ProfileIcon className={s.card__icon} style={{ color: 'black' }} />
                    </Tooltip>
                  )}
                </div>
              </Col>
              <Col>
                <div className={s.card__icon__wrap}>
                  <Tooltip
                    className={s.card__tooltip}
                    color="#3C4043"
                    overlayInnerStyle={{ color: '#D6D8DB' }}
                    overlayStyle={{ borderRadius: '4px', width: '200px' }}
                    autoAdjustOverflow={true}
                    title={`Открыть папку курса ${title} ${chapter} на Google Диске`}
                  >
                    <FolderIcon className={s.card__icon} style={{ color: 'black' }} />
                  </Tooltip>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      )}
    </Draggable>
  );
};
