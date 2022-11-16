import './App.css';
import Header from './components/Header/Header';
import 'antd/dist/antd.css';
import { HeaderLogoPlus } from './components/Header/HeaderLogoPlus/HeaderLogoPlus';
import { HeaderTest } from './components/Header/HeaderLogoPlus/HeaderTest';
import RightComponent from './components/Header/RightCoponent/RightComponent';

let middleItems = [
  {
    title: 'Лента',
    path: '/appointed'
  },
  {
    title: 'Задания',
    path: '/term'
  },
  {
    title: 'Пользователи',
    path: '/performed'
  }
]

let leftTrigger = {
  title: 'dwaaw',
  path: '/logo'
}

function App() {
  return (
    <div className='App'>
      <Header children={<HeaderLogoPlus leftTrigger={leftTrigger} middleItems={middleItems}  rightComponent={<RightComponent />}/>} />
    </div>
  )
}

export default App;
