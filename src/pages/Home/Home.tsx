import { CSSProperties, useState, FC } from 'react';
import { CalendarTwoTone, FolderTwoTone, ReconciliationTwoTone } from '@ant-design/icons';
import { Layout, Row, Space, Typography } from 'antd';
import { NavLink } from 'react-router-dom';
// eslint-disable-next-line import/named
import { DragDropContext, DragUpdate, Droppable } from 'react-beautiful-dnd';

import { Card } from '../../components/Card/Card';
import { ButtonApp } from '../../components/ButtonApp/ButtonApp';

const { Content } = Layout;
const { Link } = Typography;

import s from './Home.module.scss';

interface Content {
  id: string;
  background: string | null;
  title: string;
  chapter: string;
  creator: string;
  creatorAvatar: string;
  isTeacher: boolean;
}

const isTeacher = 1;

const fastLinks = [
  {
    key: 1,
    icon: <ReconciliationTwoTone twoToneColor='#2962ff' />,
    title: 'Список заданий',
    link: '/taskListAssigned',
    admin: false,
    roots: 0,
  },
  {
    key: 2,
    icon: <FolderTwoTone twoToneColor='#2962ff' />,
    title: 'Непроверенные задани',
    link: '/unverified-tasks',
    admin: true,
    roots: 1,
  },
  {
    key: 3,
    icon: <CalendarTwoTone twoToneColor='#2962ff' />,
    title: 'Календарь',
    link: '/calendar',
    admin: false,
    roots: 0,
  },
];

export const Home: FC = () => {
  const [content, setContent] = useState([
    {
      id: '1',
      background: null,
      title: 'test classroom',
      chapter: 'testing',
      creator: 'andrei minkin',
      creatorAvatar:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/HRH_Prince_Charles_43_Allan_Warren.jpg/800px-HRH_Prince_Charles_43_Allan_Warren.jpg',
      isTeacher: true,
      src: '/feed',
      pathToGrade: '/grade',
    },
    {
      id: '2',
      background: null,
      title: 'ФТМ',
      chapter: '',
      creator: 'ислам',
      creatorAvatar:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Charles%2C_Prince_of_Wales_in_2021_%28cropped%29_%283%29.jpg/220px-Charles%2C_Prince_of_Wales_in_2021_%28cropped%29_%283%29.jpg',
      isTeacher: false,
      src: '/feed',
      pathToGrade: '/grade',
    },
    {
      id: '3',
      background: null,
      title: 'test classroom',
      chapter: 'testing',
      creator: 'andrei minkin',
      creatorAvatar:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/HRH_Prince_Charles_43_Allan_Warren.jpg/800px-HRH_Prince_Charles_43_Allan_Warren.jpg',
      isTeacher: true,
      src: '/feed',
      pathToGrade: '/grade',
    },
    {
      id: '4',
      background: null,
      title: 'ФТМ',
      chapter: '',
      creator: 'ислам',
      creatorAvatar:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Charles%2C_Prince_of_Wales_in_2021_%28cropped%29_%283%29.jpg/220px-Charles%2C_Prince_of_Wales_in_2021_%28cropped%29_%283%29.jpg',
      isTeacher: true,
      src: '/feed',
      pathToGrade: '/grade',
    },
    {
      id: '5',
      background: null,
      title: 'test classroom',
      chapter: 'testing',
      creator: 'andrei minkin',
      creatorAvatar:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/HRH_Prince_Charles_43_Allan_Warren.jpg/800px-HRH_Prince_Charles_43_Allan_Warren.jpg',
      isTeacher: true,
      src: '/feed',
      pathToGrade: '/grade',
    },
    {
      id: '26',
      background: null,
      title: 'ФТМ',
      chapter: '',
      creator: 'ислам',
      creatorAvatar:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Charles%2C_Prince_of_Wales_in_2021_%28cropped%29_%283%29.jpg/220px-Charles%2C_Prince_of_Wales_in_2021_%28cropped%29_%283%29.jpg',
      isTeacher: false,
      src: '/feed',
      pathToGrade: '/grade',
    },
    {
      id: '15',
      background: null,
      title: 'test classroom',
      chapter: 'testing',
      creator: 'andrei minkin',
      creatorAvatar:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/HRH_Prince_Charles_43_Allan_Warren.jpg/800px-HRH_Prince_Charles_43_Allan_Warren.jpg',
      isTeacher: true,
      src: '/feed',
      pathToGrade: '/grade',
    },
    {
      id: '22',
      background: null,
      title: 'ФТМ',
      chapter: '',
      creator: 'ислам',
      creatorAvatar:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Charles%2C_Prince_of_Wales_in_2021_%28cropped%29_%283%29.jpg/220px-Charles%2C_Prince_of_Wales_in_2021_%28cropped%29_%283%29.jpg',
      isTeacher: false,
      src: '/feed',
      pathToGrade: '/grade',
    },
  ]);

  const onDragComplete = (result: DragUpdate) => {
    console.log(result);

    if (!result.destination) return;
    const arr = [...content];

    // Changing the position of Array element
    const removedItem = arr.splice(result.source.index, 1)[0];
    arr.splice(result.destination.index, 0, removedItem);

    // Updating the list
    setContent(arr);
  };

  const getListStyle = (isDraggingOver: boolean): CSSProperties => ({
    display: 'flex',
    overflow: 'auto',
    flexWrap: 'wrap',
  });

  return (
    <Layout>
      <Content style={{ padding: '1.5rem', background: 'white' }}>
        <Space className={s.space} align='center' size='middle'>
          {fastLinks.map(
            (item) =>
              item.roots <= isTeacher && (
                <Link className={s.link} key={item.key} href={item.link}>
                  <ButtonApp icon={item.icon} label={item.title} classNameProp={s.text} />
                </Link>
              ),
          )}
        </Space>
        <DragDropContext onDragEnd={onDragComplete}>
          <Droppable droppableId='drag-drop-list' direction='horizontal'>
            {(provided, snapshot) => {
              return (
                <>
                  <Row
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    justify={'space-between'}
                    gutter={[0, 12]}
                    className={s.card__row}
                    style={getListStyle(snapshot.isDraggingOver)}
                  >
                    {content.map((el, index) => (
                      <NavLink key={el.id} style={{ textDecoration: 'none' }} to={el.src}>
                        <Card key={el.id} {...el} index={index} />
                      </NavLink>
                    ))}
                  </Row>
                  {provided.placeholder}
                </>
              );
            }}
          </Droppable>
        </DragDropContext>
      </Content>
    </Layout>
  );
};
