import './App.css';
import Drawers from './containers/SideBar/Drawer';
import TaskList from './pages/TaskList/TaskList';

function App() {
  return (
    <div className='App'>
      <Drawers />
      <TaskList />
    </div>
  );
}

export default App;
