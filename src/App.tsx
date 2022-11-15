import './App.css';
import { CourseCard } from './containers/CourseCard/CourseCard';
import { Tape } from './containers/Tape/Tape';
import { Auth } from './pages/Auth/Auth';
function App() {
  return (
    <div className='App'>
			{/* <Auth /> */}
			<Tape />
    </div>
  );
}

export default App;
