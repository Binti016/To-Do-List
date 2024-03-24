import React, { useState } from 'react';
import './Viewtask.css'; 
import Navbar from './navbar';
import Footer from './Footer';

function Viewtask() {
 
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Task 1', description: 'Sleeping', completed: false },
    { id: 2, title: 'Task 2', description: 'Playing with Cats', completed: false },
    { id: 3, title: 'Task 3', description: 'Listening Songs', completed: false },
    { id: 4, title: 'Task 4', description: 'Watching Series', completed: false },
    { id: 5, title: 'Task 5', description: 'Sharadin Akam Kora', completed: false },
    { id: 6, title: 'Task 6', description: 'Reels', completed: false },
    { id: 7, title: 'Task 7', description: 'Watching TV', completed: false },
  ]);

  const handleTaskClick = (taskId) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return (
    <div className='main'>
        <Navbar/>
    <div className='main-task-page'>
        
    <div className="view-tasks">
      
      <header>
        <h1>Welcome to Your Tasks</h1>
        
      </header>
      <section>
        <h2>Your Tasks</h2>
        <div className='ul-map'>
        <ul>
          {tasks.map(task => (
            <li key={task.id}>
              <h3>{task.title}</h3>
              <p>{task.description}</p>
              <button className={`task-done-btn ${task.completed ? 'completed' : ''}`}onClick={() => handleTaskClick(task.id)}>
                ✓
              </button>
            </li>
          ))}
        </ul>
        </div>
      </section>

     
      
    </div>
    </div>
    <Footer/>
    </div>
  );
};

export default Viewtask;
