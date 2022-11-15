import React from 'react'
import Home from './pages/Home'
import { CourseCard } from './containers/CourseCard/CourseCard';
import { Tape } from './containers/Tape/Tape';
import { Auth } from './pages/Auth/Auth';
import { DragDropContext } from "react-beautiful-dnd";
import { useState } from 'react';
import './App.css';
import Tasks from './pages/Tasks/Tasks';

function App() {
  return (
    <div className='App'>
			{/* <Auth /> */}
			<Tape />
      {/* <Tasks /> */}
      <Home />
      {/* <CourseCard /> */}
    </div>)
}

export default App;
