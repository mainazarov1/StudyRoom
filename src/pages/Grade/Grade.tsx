import React, { useState } from 'react';
import { Table } from 'antd';
import '../Grade/Grade.scss';
import {columnsGrade, dataSourceGrade} from '../../utils/MockByGrade/tableMockApiGrade';

const Grade: React.FC = () => {
  const [columns, setColumns] = useState(columnsGrade);

  let [dataSource, setDataSource] = useState(dataSourceGrade);

  const getSummaryAvarage = () => {
    let avarageGrade = 0;
    dataSource.forEach(({ grade }) => {
      avarageGrade += grade / dataSource.length;
    });
    dataSource = [
      {
        key: "0",
        name: "Средняя оценка по классу",
        avatar: 'https://avatars.dicebear.com/api/pixel-art-neutral/your-custom-seed.svg',
        overallScore: 'Нет оценки',
        grade: avarageGrade,
        enabled: false,
      },
      ...dataSource
    ];
  };
  
  getSummaryAvarage();

  return (
    <div>
      <Table
        bordered
        columns={columns}
        rowClassName={record => !record.enabled ? 'disabled-row' : ''}
        dataSource={dataSource}
        scroll={{ x: 1300 }}
      />
    </div>
  );
};

export default Grade;
