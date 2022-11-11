import { Layout, Menu, Dropdown, Row, Col, Space, Typography, Avatar, Tooltip } from 'antd';
import { CalendarTwoTone, FolderTwoTone, ReconciliationTwoTone, EllipsisOutlined } from '@ant-design/icons'
import Icon from '@ant-design/icons';
import { MenuInfo } from 'rc-menu/lib/interface'
import type { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';
import type { MenuProps } from 'antd';
import s from './style.module.scss';
const { Header, Content } = Layout;
const { Text, Link, Title } = Typography

interface Content {
   id: number,
   background: string | null,
   title: string,
   chapter: string,
   creator: string,
   craetorAvatar: string,
   isTeacher: boolean
}

const fastLinks = [
   {
      key: 1,
      icon: <ReconciliationTwoTone twoToneColor="#2962ff" />,
      title:
         'Список заданий'
      ,
      link: '#'
   },
   {
      key: 2,
      icon: <FolderTwoTone twoToneColor="#2962ff" />,
      title:
         'Непроверенные задани',
      link: '#'
   },
   {
      key: 3,
      icon: <CalendarTwoTone twoToneColor="#2962ff" />,
      title:
         'Календарь'
      ,
      link: '#'
   }
]


const contet: Content[] = [
   {
      id: 1,
      background: null,
      title: "test classroom",
      chapter: 'testing',
      creator: 'andrei minkin',
      craetorAvatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/HRH_Prince_Charles_43_Allan_Warren.jpg/800px-HRH_Prince_Charles_43_Allan_Warren.jpg',
      isTeacher: true
   },
   {
      id: 2,
      background: null,
      title: "ФТМ",
      chapter: '',
      creator: 'ислам',
      craetorAvatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Charles%2C_Prince_of_Wales_in_2021_%28cropped%29_%283%29.jpg/220px-Charles%2C_Prince_of_Wales_in_2021_%28cropped%29_%283%29.jpg',
      isTeacher: false
   },
   {
      id: 3,
      background: null,
      title: "test classroom",
      chapter: 'testing',
      creator: 'andrei minkin',
      craetorAvatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/HRH_Prince_Charles_43_Allan_Warren.jpg/800px-HRH_Prince_Charles_43_Allan_Warren.jpg',
      isTeacher: true
   },
   {
      id: 4,
      background: null,
      title: "ФТМ",
      chapter: '',
      creator: 'ислам',
      craetorAvatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Charles%2C_Prince_of_Wales_in_2021_%28cropped%29_%283%29.jpg/220px-Charles%2C_Prince_of_Wales_in_2021_%28cropped%29_%283%29.jpg',
      isTeacher: false
   },
   {
      id: 5,
      background: null,
      title: "test classroom",
      chapter: 'testing',
      creator: 'andrei minkin',
      craetorAvatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/HRH_Prince_Charles_43_Allan_Warren.jpg/800px-HRH_Prince_Charles_43_Allan_Warren.jpg',
      isTeacher: true
   },
   {
      id: 26,
      background: null,
      title: "ФТМ",
      chapter: '',
      creator: 'ислам',
      craetorAvatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Charles%2C_Prince_of_Wales_in_2021_%28cropped%29_%283%29.jpg/220px-Charles%2C_Prince_of_Wales_in_2021_%28cropped%29_%283%29.jpg',
      isTeacher: false
   },
   {
      id: 15,
      background: null,
      title: "test classroom",
      chapter: 'testing',
      creator: 'andrei minkin',
      craetorAvatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/HRH_Prince_Charles_43_Allan_Warren.jpg/800px-HRH_Prince_Charles_43_Allan_Warren.jpg',
      isTeacher: true
   },
   {
      id: 22,
      background: null,
      title: "ФТМ",
      chapter: '',
      creator: 'ислам',
      craetorAvatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Charles%2C_Prince_of_Wales_in_2021_%28cropped%29_%283%29.jpg/220px-Charles%2C_Prince_of_Wales_in_2021_%28cropped%29_%283%29.jpg',
      isTeacher: false
   },
]

const ProfileSvg = () => (
   <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" >
      <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7.55 0c.14-.15.33-.25.55-.25s.41.1.55.25c.12.13.2.31.2.5 0 .41-.34.75-.75.75s-.75-.34-.75-.75c0-.19.08-.37.2-.5zM19 5v10.79C16.52 14.37 13.23 14 12 14s-4.52.37-7 1.79V5h14zM5 19v-.77C6.74 16.66 10.32 16 12 16s5.26.66 7 2.23V19H5z"></path><path d="M12 13c1.94 0 3.5-1.56 3.5-3.5S13.94 6 12 6 8.5 7.56 8.5 9.5 10.06 13 12 13zm0-5c.83 0 1.5.67 1.5 1.5S12.83 11 12 11s-1.5-.67-1.5-1.5S11.17 8 12 8z"></path>
   </svg>
)

const StatSvg = () => (
   <svg focusable="false" width="24" height="24" viewBox="0 0 24 24"><path d="M16 6v2h2.58l-5.17 5.17-4-4L2 16.59 3.41 18l6-6 4 4L20 9.42V12h2V6z"></path></svg>
)
const FolderSvg = () => (
   <svg focusable="false" width="24" height="24" viewBox="0 0 24 24" ><path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V8h16v10z"></path></svg>
)

const ProfileIcon = (props: Partial<CustomIconComponentProps>) => (
   <Icon component={ProfileSvg} {...props} />
);

const StatisticIcon = (props: Partial<CustomIconComponentProps>) => (
   <Icon component={StatSvg} {...props} />
)

const FolderIcon = (props: Partial<CustomIconComponentProps>) => (
   <Icon component={FolderSvg} {...props} />
)

const handleMenuClick = (e: MenuInfo) => {
   console.log('click', e);
}

// const arr: MenuProps['items'] = [
//    { label: <Link href=''>"Переместить"</Link>, key: "0" },
//    { label: <Link href=''>Покинуть курс</Link>, key: "1" },
//    { label: <Link href=''>Пожаловаться</Link>, key: "2" },
// ]


const teacherMenuItems = (
   <Menu className={s.card__menu} onClick={handleMenuClick} >
      <Menu.Item className={s.card__dropdown__item} key={'Переместить'}>Переместить</Menu.Item>
      <Menu.Item className={s.card__dropdown__item} key={'Переместить'}>Копировать ссылку</Menu.Item>
      <Menu.Item className={s.card__dropdown__item} key={'Переместить'}>Изменить</Menu.Item>
      <Menu.Item className={s.card__dropdown__item} key={'Переместить'}>Копировать</Menu.Item>
      <Menu.Item className={s.card__dropdown__item} key={'Переместить'}>Архивировать</Menu.Item>
   </ Menu>
)

const studentMenuItems = (
   <Menu className={s.card__menu} onClick={handleMenuClick} >
      <Menu.Item className={s.card__dropdown__item} key={'Переместить'}>Переместить</Menu.Item>
      <Menu.Item className={s.card__dropdown__item} key={'Покинуть курс'}>Покинуть курс</Menu.Item>
      <Menu.Divider />
      <Menu.Item className={s.card__dropdown__item} key={'Пожаловаться'}> Пожаловаться</Menu.Item>
   </ Menu>
)

export const Home: React.FC = () => {

   return (
      <Layout>
         <Header>Header</Header>
         <Content style={{ padding: "1.5rem", background: "white" }}>
            <Space className={s.space} align='center' size="middle">
               {fastLinks.map((item) => {
                  return (
                     <Link className={s.link} key={item.key} href={item.link}>
                        {item.icon}
                        <Text className={s.text}>
                           {item.title}
                        </Text>
                     </Link>
                  )
               })}
            </Space>

            <Row justify={'space-between'} gutter={[0, 24]} className={s.card__row} style={{ flexWrap: "wrap" }}>
               {contet.map((el) => (
                  <Col key={el.id} className={s.card__item} style={{ width: '18.75rem' }}>
                     <div className={s.home__card}>
                        <div className={s.card__top}>
                           <div style={{ background: el.background == "" ? '' : 'orange' }} className={s.card__info}>
                              <Title className={s.card__title__wrap} style={{ display: 'flex', justifyContent: 'space-between' }} level={2}>
                                 <Link className={s.card__top__link} href="">
                                    <Title className={s.card__title} level={2}> {el.title} </Title>
                                    <Text className={s.card__chapter}> {el.chapter} </Text>
                                 </Link>
                                 <Dropdown destroyPopupOnHide={true} trigger={['click']} className={s.card__dropdown} overlay={el.isTeacher ? teacherMenuItems : studentMenuItems} ><EllipsisOutlined /></Dropdown>
                              </Title>
                              <div>
                                 <Text className={s.card__creator}> {el.creator} </Text>
                              </div>
                           </div>
                        </div>
                        <div className={s.card__avatar__wrap}>
                           <Avatar className={s.card__avatar} src={el.craetorAvatar} style={{ backgroundColor: 'orange', verticalAlign: 'middle' }} size="large" />
                        </div>
                        <Row gutter={20} align="center" justify={"end"} className={s.card__bottom}>
                           <Col>
                              <div className={s.card__icon__wrap}>
                                 {el.isTeacher == true ?
                                    <Tooltip className={s.card__tooltip} color='#3C4043' overlayInnerStyle={{ color: '#D6D8DB' }} overlayStyle={{ borderRadius: '4px', width: "200px" }} title={`Открыть журнал успеваемости по курсу ${el.title}`}>
                                       <StatisticIcon className={s.card__icon} style={{ color: 'black' }} />
                                    </Tooltip> :
                                    <Tooltip className={s.card__tooltip} color='#3C4043' overlayInnerStyle={{ color: '#D6D8DB' }} overlayStyle={{ borderRadius: '4px', width: "200px" }} title={`Открыть работу: ${el.title}`}>
                                       <ProfileIcon className={s.card__icon} style={{ color: 'black' }} />
                                    </Tooltip>
                                 }
                              </div>
                           </Col>
                           <Col>
                              <div className={s.card__icon__wrap}>
                                 <Tooltip className={s.card__tooltip} color='#3C4043' overlayInnerStyle={{ color: '#D6D8DB' }} overlayStyle={{ borderRadius: '4px', width: "200px" }} autoAdjustOverflow={true} title={`Открыть папку курса ${el.title} ${el?.chapter} на Google Диске`}>
                                    <FolderIcon className={s.card__icon} style={{ color: 'black' }} />
                                 </Tooltip>
                              </div>
                           </Col>
                        </Row>
                     </div>
                  </Col>
               ))}
            </Row>
         </Content>
      </Layout >
   );
}
