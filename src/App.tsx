import './App.css';
import Drawers from './containers/SideBar/Drawer';
import Feed from './pages/Feed';

function App() {
  return (
    <div className='App'>
      <Drawers />
      <Feed />
    </div>
  );
}

export default App;
