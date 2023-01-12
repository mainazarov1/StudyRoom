import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import { ColumnsType } from "antd/lib/table";
import { Key } from "react";
import { NavLink } from "react-router-dom";
import GetGrade from "../../components/GetGrade/GetGrade";
import GetTitle from "../../components/GetTitle/GetTitle";

interface DataType {
  key: Key;
  name: string;
  avatar: string;
  avarageGrade?: number;
  overallScore: number | string;
  grade: number;
  enabled: boolean;
}

interface IDataTask {
  deadline: string;
  task: string;
  fromTo: number;
}

const dataTask: IDataTask[] = [
  {
    deadline: '21-05-2020',
    task: 'task1',
    fromTo: 50,
  },
  {
    deadline: '22-05-2020',
    task: 'task2',
    fromTo: 70
  },
  {
    deadline: '23-05-2020',
    task: 'task3',
    fromTo: 90
  }
]

export const columnsGrade = dataTask.map(({ deadline, task, fromTo }) => {
  return (
    {
      title: <GetTitle deadline={deadline} task={task} fromTo={fromTo} />,
      render: (text: string, record: { grade: number; }) => <GetGrade recordProp={record.grade} />,
      width: 30,
      dataIndex: 'grade',
      key: '2',
    }
  )
})

export const columns: ColumnsType<DataType> = [
  {
    title: 'Сортировать по имени',
    width: 50,
    dataIndex: 'name',
    sorter: (a: { name: string | any[]; }, b: { name: string | any[]; }) => {
      if (a.name === dataSourceGrade[0].name || b.name === dataSourceGrade[0].name) return 0;
      return a.name.length - b.name.length
    },
    fixed: 'left',
    render: (text: string, record: DataType) => {
      return (
        <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
          <Avatar src={record.avatar} icon={<UserOutlined />} />
          <div style={{ marginLeft: '15px' }}> <NavLink className='name-link' to='#'> {record.name} </NavLink> </div>
        </div>
      );
    },
  },
  {
    title: 'Общая оценка',
    width: 35,
    dataIndex: 'overallScore',
    fixed: 'left',
  },
]

export const dataSourceGrade: DataType[] = [
  {
    key: '1',
    name: 'Bob',
    avatar: 'https://avatars.dicebear.com/api/male/john.svg?mood[]=happy&mood[]=sad',
    overallScore: 'Нет оценки',
    grade: 50,
    enabled: true
  },
  {
    key: '2',
    name: 'Amy',
    avatar: 'https://avatars.dicebear.com/api/male/john.svg?background=%230000ff',
    overallScore: 'Нет оценки',
    grade: 30,
    enabled: true,
  },
  {
    key: '3',
    name: 'Cole',
    avatar: 'https://avatars.dicebear.com/api/human/cole.svg',
    overallScore: 'Нет оценки',
    grade: 70,
    enabled: true
  },
  {
    key: '4',
    name: 'Snow',
    avatar: 'https://avatars.dicebear.com/api/initials/snow.svg',
    overallScore: 'Нет оценки',
    grade: 10,
    enabled: true
  },
  {
    key: '5',
    name: 'Clone',
    avatar: 'https://avatars.dicebear.com/api/initials/clone.svg',
    overallScore: 'Нет оценки',
    grade: 45,
    enabled: true
  },
]