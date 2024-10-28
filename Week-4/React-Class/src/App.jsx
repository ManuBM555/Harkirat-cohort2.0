
import './App.css'

// hook
import { useState } from 'react';




function App() {

  // state, component
const [todos, setTodos] = useState([{
  title: "Go to gym",
  description: "From 7 to 9",
  completed: false
}, {
  title: "Study DSA",
  description: "From 10 to 12",
  completed: true
}, {
  title: "Study Aptitude",
  description: "From 10 to 12",
  completed: false
}]);

  return (
    <div>
        {todos.map(function(todo) {
          return <Todo title={todo.title} description={todo.description}/>
        })}
    </div>
  )
}

// Todo Component
function Todo(props) {
  return <div>
    <h1>{props.title}</h1>
    <h2>{props.description}</h2>

  </div>
}

export default App
