import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from 'react'

function App() {

    const [tasks,setTasks] = useState([
        {
            id: 1,
            'text': 'test',
        },
        {
            id: 2,
            'text' : 'tterere',
        }
    ])

    return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
