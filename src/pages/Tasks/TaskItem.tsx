import React, { FC, useState } from 'react';
import classNames from 'classnames';
import { Col, Collapse, Dropdown, Row, Space, Typography } from 'antd';
import Icon, { CommentOutlined, EllipsisOutlined } from '@ant-design/icons';
import { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';

import TasksModal from './components/TasksModal/TasksModal';
import s from './Tasks.module.scss';

import type { MenuProps } from 'antd/lib/menu';

const { Panel } = Collapse;

const fileSvg = () => (
  <svg focusable='false' width='24' height='24' viewBox='0 0 24 24'>
    <path d='M7 15h7v2H7zm0-4h10v2H7zm0-4h10v2H7z'></path>
    <path d='M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-.14 0-.27.01-.4.04a2.008 2.008 0 0 0-1.44 1.19c-.1.23-.16.49-.16.77v14c0 .27.06.54.16.78s.25.45.43.64c.27.27.62.47 1.01.55.13.02.26.03.4.03h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7-.25c.41 0 .75.34.75.75s-.34.75-.75.75-.75-.34-.75-.75.34-.75.75-.75zM19 19H5V5h14v14z'></path>
  </svg>
);

const FileIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={fileSvg} {...props} />
);

const taskDropdownStudents: MenuProps['items'] = [
  { label: 'Копировать ссылку', key: 'item-1' }, // remember to pass the key prop
  { type: 'divider' },
  { label: 'Пожаловаться', key: 'item-2' },
];

interface TaskItemProps {
  id: string;
  title: string;
  points: number;
  deadLine: string;
  timePublication: string;
  htmlContent: string;
  isTeacher: boolean;
  countComments: number;
}

const TaskItem: FC<TaskItemProps> = ({
  id,
  title,
  points,
  deadLine,
  timePublication,
  htmlContent,
  isTeacher,
  countComments,
}) => {
  const [key, setKey] = useState<string | string[]>();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const taskDropdownTeacher: MenuProps['items'] = [
    {
      label: 'Изменить',
      key: 'item-1',
      onClick: () => handleClick(),
    },
    { label: 'Удалить', key: 'item-2' },
    { label: 'Копировать ссылку', key: 'item-3' }, // remember to pass the key prop
    { type: 'divider' },
    { label: 'Переместить вверх', key: 'item-4' },
    { label: 'Переместить вниз', key: 'item-5' },
  ];

  const handleActiveCollapse = (key: string | string[]) => {
    setKey(key);
  };

  const handleClick = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const CollapseHead = () => (
    <>
      <Row
        onClick={(e) => console.log(e)}
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
              style={{ width: 300 }}
              ellipsis={true}
              className={s.collapse__head__subtitle}
            >
              {title}
            </Typography.Text>
          </Col>
          <Space>
            <Space>
              <CommentOutlined />
              {countComments ? countComments : ''}
            </Space>
            <div>
              <span style={{ color: 'rgba(0,0,0,.549)', fontSize: '0.75rem' }}>Эссе</span>
            </div>
          </Space>
        </Row>
        <Typography.Text className={s.task__points}> {points}</Typography.Text>
        <Row gutter={12} align={'middle'}>
          <Col>
            <Typography.Text className={s.collapse__head__term}>
              {deadLine ? 'Срок сдачи: 22 июл. 2023 г.' : 'Срок сдачи не задан'}
            </Typography.Text>
          </Col>
          <Col onClick={(e) => e.stopPropagation()}>
            <Dropdown
              placement={'bottomRight'}
              className={s.collapse__head__dropdown}
              trigger={['click']}
              menu={{ items: isTeacher ? taskDropdownTeacher : taskDropdownStudents }}
            >
              <EllipsisOutlined
                className={s.collapse__elipsis}
                style={{ fontSize: '30px', color: 'rgb(25,103,210)' }}
                color='green'
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
        onChange={(key) => handleActiveCollapse(key)}
      >
        <Panel
          className={classNames(s.collapse__panel, key === id ? s.collapse__panel__active : '')}
          showArrow={false}
          header={<CollapseHead />}
          key={'1'}
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
                <span className={s.task__publication__time}>{timePublication}</span>
              </Row>
              <Row
                style={{
                  flexGrow: 0,
                  flexShrink: 0,
                  marginLeft: '1rem',
                }}
              >
                <span className={s.task__deadline}>{deadLine ? 'Назначено' : 'Не назначено'}</span>
              </Row>
            </Row>
            <Row style={{ marginTop: '1rem' }}>
              <div>
                {htmlContent}
                {/* <span>
                  Необходимо создать приложение - аналог ленты в социальной сети, которое будет
                  работать со специально созданным API. Описание API находится далее по тексту.
                  <br />
                  <br />
                  Общий вид такого приложения:
                  <br />
                  <br />
                  <br />
                  <br />
                  На данной странице должны отображаться ваши посты и посты других пользователей, на
                  которых вы подписаны, в порядке убывания даты (то есть, самые недавние посты
                  должны располагаться сверху)
                  <br />
                  <br />
                  Кнопка "Редактировать" открывает окно редактирования профиля, в него вы вводите
                  имя и фамилию.
                  <br />
                  <br />
                  <br />
                  При нажатии на "Save" информация на странице должна обновиться.
                  <br />
                  Нажатие на кнопку "Follow user" открывает окно ввода e-mail, на которого вы хотите
                  подписаться.
                  <br />
                  <br />
                  После того, как вы подписались на пользователя, его сообщения должны также
                  отображаться, одновременно с вашими.
                  <br />
                  <br />
                  Вы можете меняться адресами e-mail с вашими коллегами, и подписываться друг на
                  друга, или создать несколько пользователей.Описание API
                  <br />
                  <br />
                  Базовый URL:&nbsp;
                  <a target='_blank' href='http://146.185.154.90:8000/blog/' rel='noreferrer'>
                    http://146.185.154.90:8000/blog/
                  </a>
                  <br />
                  <br />
                  Для того, чтобы совершать запросы на API вам потребуется свой адрес электронной
                  почты. Он будет служить вашим уникальным идентификатором. Для этого вы добавляете
                  к базовому URL свой e-mail, например, таким образом:
                  <br />
                  <br />
                  <a
                    target='_blank'
                    href='http://146.185.154.90:8000/blog/john.doe@gmail.com/'
                    rel='noreferrer'
                  >
                    http://146.185.154.90:8000/blog/john.doe@gmail.com/
                  </a>
                  <br />
                  <br />
                  Остальные адреса, указанные ниже будут&nbsp;добавляться к этому URL.Профиль
                  <br />
                  <br />
                  Чтобы начать работу, вам нужно отправить GET-запрос на адрес:
                  <br />
                  <ul>
                    <li>GET /profile</li>
                  </ul>
                  При этом в базе данных создастся ваш профиль, со стандартным именем John Doe.
                  <br />
                  <br />
                  Только после этого запроса можно будет делать запросы на все остальные API. Если
                  сделать запрос на этот адрес в следующий раз, будет приходить информация о вашем
                  профиле. Если вы измените имя и фамилию (см. дальше), будет приходить уже ваша
                  новая (обновленная) информация.
                  <br />
                  <br />
                  Чтобы изменить свои данные:
                  <br />
                  <ul>
                    <li>POST /profile</li>
                    <li>Отправляете данные:</li>
                    <li>firstName: текст, не должен быть пустым</li>
                    <li>lastName: текст, не должен быть пустым</li>
                  </ul>
                  Лента
                  <br />
                  <br />
                  Чтобы запросить "ленту" (последние 20 постов):
                  <br />
                  <ul>
                    <li>GET /posts</li>
                  </ul>
                  Чтобы запросить "ленту" с определенной даты:
                  <ul>
                    <li>GET /posts?datetime=</li>
                    <li>где - дата в формате ISO-строки (которую вы получаете от API)</li>
                  </ul>
                  Чтобы отправить новый пост:
                  <br />
                  <ul>
                    <li>POST /posts</li>
                    <li>Отправляете данные:</li>
                    <li>message: текст, не должен быть пустым</li>
                  </ul>
                  Подписка
                  <br />
                  <br />
                  Чтобы подписаться на нового пользователя:
                  <br />
                  <ul>
                    <li>POST /subscribe</li>
                    <li>Отправляете данные:</li>
                    <li>email: текст, должен присутствовать в базе</li>
                  </ul>
                  Также вы можете отправлять такой POST-запрос без данных, чтобы очистить все
                  подписки (например, для тестирования):
                  <br />
                  <ul>
                    <li>POST /subscribe/delete</li>
                  </ul>
                  Чтобы посмотреть ваших подписчиков (например, чтобы проверить, добавился ли
                  пользователь):
                  <br />
                  <ul>
                    <li>GET /subscribe</li>
                  </ul>
                  Вам будет возвращен список пользователей, на которые вы подписаны, в виде
                  массива.Указания
                  <ul>
                    <li>Приблизительный алгоритм работы приложения:</li>
                    <li>Основная программа:</li>
                    <li>Запросить ваш профиль. Сохранить полученные данные в переменную.</li>
                    <li>Отобразить ваше имя на странице</li>
                    <li>Запросить последние посты.</li>
                    <li>Добавить последние посты в список</li>
                    <li>Создать интервал, который будет запрашивать новые посты.</li>
                    <li>
                      При клике на кнопку "Редактировать профиль" отобразить окно (попап) с вводом
                      данных (имени и фамилии).
                    </li>
                    <li>При клике на кнопку "Save" отправить данные на сервер</li>
                    <li>
                      При успешном ответе от сервера обновить данные в переменной и отображаемые
                      данные
                    </li>
                    <li>Закрыть окно</li>
                    <li>При вводе текста в поле создания нового сообщения и клике на "Send"</li>
                    <li>Отправить данные нового сообщения на сервер</li>
                    <li>
                      При клике на кнопку "Добавить подписчика" отобразить окно (попап) с вводом
                      e-mail
                    </li>
                    <li>При клике на кнопку "Add" отправить данные на сервер</li>
                    <li>При успешном ответе от сервера закрыть окно</li>
                    <li>
                      Необходимо пользоваться Promise-ами везде, где можно. Необходимо пользоваться
                      конструкцией async/await везде, где применимо.
                    </li>
                    <li>
                      Не делайте слишком быстрый интервал! Вы можете все одновременными запросами
                      перегрузить сервер. Установите его на как минимум 2 секунды.
                    </li>
                    <li>
                      Можно пользоваться любыми библиотеками, плагинами, и т.п. какие вы найдете
                      (например, для popup-окон).
                    </li>
                    <li>Можете оформить ваше приложение с помощью Bootstrap (по желанию).</li>
                    <li>
                      Для тестирования запросов можно пользоваться Postman или аналогичными
                      инструментами.
                    </li>
                  </ul>
                </span> */}
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
        id={id}
        title={title}
        htmlContent={htmlContent}
      />
    </>
  );
};

export default TaskItem;
