import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react'

const App = () => {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2:30PM',
        reminder: true,
    },
])
  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks}/>
    </div>    
  )
}
export default App