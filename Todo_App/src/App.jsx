import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from '../Components/CreateTodo'
import { Todos } from '../Components/Todos'

function App() {
  
  const [todos , setTodos] = useState([]
  );

  fetch('http://localhost:3000/todos').then(async function(data){
    const inJson=await data.json();
    setTodos(inJson.todos);  // cause the data we fetched returns an object todos:[{--},{--}]
  })
  return (
    <div>
      <CreateTodo/>
      <br />
      <br />
      <br />
      <Todos todos={todos}/>
    </div>
  )
}

export default App
