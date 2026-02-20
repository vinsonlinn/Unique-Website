import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import PracticePage from './pages/PracticePage.tsx'
import './App.css'

function App() {

  const [taskText, setTaskText] = useState<string>('')

  type Task = {
    id: string
    text: string
    completed: boolean
  }

  const [tasks, setTasks] = useState<Task[]>([])

  function addTask() {
    const trimmedText = taskText.trim()
    if (!trimmedText) return      // there is nothing in the input field

    const newTask: Task = {
      id: crypto.randomUUID(),
      text: trimmedText,
      completed: false,
    }

    setTasks((prevTasks) => [...prevTasks, newTask])
    setTaskText('')
  }
  

  return (

    <>
    <Link to="/practice">Practice</Link>

    <Routes>
      <Route path="/" element={
        <>
          <h1>Unique Habit Tracker</h1>
          <input
            type="text"
            placeholder="Enter a task"
            value={taskText}
            onChange={(e) => setTaskText(e.target.value)}
          />
          <button onClick={addTask}>Add Task</button>

          <ul>
            {tasks.map(task => (
              <li key={task.id}>{task.text}</li>
            ))}
          </ul>
        </>
      } />
      <Route path="/practice" element={<PracticePage />} />
    </Routes>
    </>
  )
}

export default App
