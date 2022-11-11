// import { Col } from "antd"
// import Typography from "antd/lib/typography/Typography"

// const { Title, Link, Text } = Typography

// interface CardProps {
//    id: number,
//    background: string | null,
//    title: string,
//    chapter: string,
//    card__c: string,
//    creator: string,
// }

// export const Card = ({ }) => {
//    return (
//       <Col key={el.id} className={s.card__item} style={{ width: '18.75rem' }}>
//          <div className={s.home__card}>
//             <div className={s.card__top}>
//                <div style={{ background: el.background == "" ? '' : 'orange' }} className={s.card__info}>
//                   <Title className={s.card__title__wrap} style={{ display: 'flex', justifyContent: 'space-between' }} level={2}>
//                      <Link className={s.card__top__link} href="">
//                         <Title className={s.card__title} level={2}> {el.title} </Title>
//                         <Text className={s.card__chapter}> {el.chapter} </Text>
//                      </Link>
//                      <Dropdown destroyPopupOnHide={true} trigger={['click']} className={s.card__dropdown} overlay={el.isTeacher ? teacherMenuItems : studentMenuItems} ><EllipsisOutlined /></Dropdown>
//                   </Title>
//                   <div>
//                      <Text className={s.card__creator}> {el.creator} </Text>
//                   </div>
//                </div>
//             </div>
//             <div className={s.card__avatar__wrap}>
//                <Avatar className={s.card__avatar} src={el.craetorAvatar} style={{ backgroundColor: 'orange', verticalAlign: 'middle' }} size="large" />
//             </div>
//             <Row gutter={20} align={"center"} justify={"end"} className={s.card__bottom}>
//                <Col>
//                   <div className={s.card__icon__wrap}>
//                      {el.isTeacher == true ?
//                         <Tooltip className={s.card__tooltip} color='#3C4043' overlayInnerStyle={{ color: '#D6D8DB' }} overlayStyle={{ borderRadius: '4px', width: "200px" }} title={`Открыть журнал успеваемости по курсу ${el.title}`}>
//                            <StatisticIcon className={s.card__icon} style={{ color: 'black' }} />
//                         </Tooltip> :
//                         <Tooltip className={s.card__tooltip} color='#3C4043' overlayInnerStyle={{ color: '#D6D8DB' }} overlayStyle={{ borderRadius: '4px', width: "200px" }} title={`Открыть работу: ${el.title}`}>
//                            <ProfileIcon className={s.card__icon} style={{ color: 'black' }} />
//                         </Tooltip>
//                      }
//                   </div>
//                </Col>
//                <Col>
//                   <div className={s.card__icon__wrap}>
//                      <Tooltip className={s.card__tooltip} color='#3C4043' overlayInnerStyle={{ color: '#D6D8DB' }} overlayStyle={{ borderRadius: '4px', width: "200px" }} autoAdjustOverflow={true} title={`Открыть папку курса ${el.title} ${el?.chapter} на Google Диске`}>
//                         <FolderIcon className={s.card__icon} style={{ color: 'black' }} />
//                      </Tooltip>
//                   </div>
//                </Col>
//             </Row>
//          </div>
//       </Col>
//    )
// }

