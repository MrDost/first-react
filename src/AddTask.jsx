import { useState } from 'react'

export const AddTask = ({ currTasks, addTask }) => {
  const [currentText, updateText] = useState("");
  
  function handleForm(e) {
    e.preventDefault();
    addTask(
    [...currTasks, {name: currentText}]
    );
    updateText("");
  }

  function handleChange(event) {
    updateText(event.target.value);
  }

  return (
    <div className='task-wrapper'>
        <form>
            <label htmlFor="inputText">Task Name</label>
            <input onChange={(e) => handleChange(e)} value={currentText} id="inputText" type="text" placeholder='Wash the cat'/>
            <button onClick={(e) => handleForm(e)}>Add</button>
        </form>
    </div>
  )
}
