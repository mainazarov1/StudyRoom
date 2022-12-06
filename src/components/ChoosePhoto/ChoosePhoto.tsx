import React, { FC } from 'react';
import { Col, Divider, Row } from 'antd';

const style: React.CSSProperties = { background: '#0092ff', width: '100%', borderRadius: 3, };

interface Iarr {
  type:string,
  url: string,
}

interface IProps {
  arr: Iarr[]
}

const ChoosePhoto:FC<IProps> = ({arr}) => {
  
  return (
    <>
      <Row gutter={[4, 4]}>
        {
          arr.map(( item, i ) => (
            <Col className="gutter-row" span={6}>
              <img key={i} style={style} src={item.url} alt={item.type} />
            </Col>
          ))
        }
      </Row>
    </>
  );
};

export default ChoosePhoto;