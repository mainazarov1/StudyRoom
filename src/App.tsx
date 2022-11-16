import './App.css';
import Drawers from './containers/SideBar/Drawer';
import Feed from './pages/Feed';

import { MainRoutes } from './routes/routes';

function App() {
  return (
    <div className='App'>
      <MainRoutes />
    </div>
  );
}

export default App;
