import React, { useState } from 'react';

import Home from './pages/Home';
import { CourseCard } from './containers/CourseCard/CourseCard';
import { Auth } from './pages/Auth/Auth';

import './App.css';
import Tasks from './pages/Tasks/Tasks';

function App() {
  return (
    <div className="App">
      <Tasks />
      {/* <Home /> */}
      {/* <Auth /> */}
      {/* <CourseCard /> */}
    </div>);
}

export default App;
