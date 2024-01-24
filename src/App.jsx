import './App.css'
import { useState } from 'react';
import { AddTask } from './AddTask'
import { Search } from './Search';

function App() {
  const [taskList, updateTaskLists] = useState([]);

  return (
    <>
      <h2>Add Task</h2>
      <AddTask currTasks={taskList} addTask={updateTaskLists}/>
      <h2>Search</h2>
      <Search dataList={taskList} />
    </>
  )
}

export default App
