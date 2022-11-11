import './App.css';
import { CourseCard } from './containers/CourseCard/CourseCard';
import { Auth } from './pages/Auth/Auth';
function App() {
  return (
    <div className='App'>
			{/* <Auth /> */}
			<CourseCard />
    </div>
  );
}

export default App;
