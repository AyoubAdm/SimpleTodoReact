import React from 'react'
import Todo from './Todo'
import './style.css'

let data = [ //liste des Todos
  {content : "Tache 2", isDone : true},
  {content : "Tache 1", isDone : false}
]

export default function App() {

  const [todos , setTodos] = React.useState(data)
  const [formTodo , setFormTodo] = React.useState("")

  //liste des Todos qui sont à faire
  const todosElements = todos.map(todo => todo.isDone === false && <Todo done = {todo.isDone} content = {todo.content} key={todo.content} clickFun = {handleDone}/>)
  
  //liste des Todos qui sont terminés
  const doneElements = todos.map(todo => todo.isDone &&  <Todo done = {todo.isDone} content = {todo.content} key={todo.content} clickFun = {handleDelete}/>)

  function handleDone(id){ //met a jour le Todo concerné
    setTodos(prev => prev.map(todo=>todo.content===id ? {...todo, isDone : true} : todo ))
  }

  function handleDelete(id){//supprime le Todo concerné
    setTodos(prev => prev.map(todo=>todo.content!==id &&  todo ))
  }

  function handleChange(event){
    setFormTodo(event.target.value)
  }

  function addTodo(){ //ajoute un Todo
    setTodos(prev=>[...prev,{content : formTodo, isDone : false}])
    setFormTodo("")
  }


  return (
    <main>
      <div className="todo-container">
        <h1>Todo</h1>
        <ul className="todo-list">
          {todosElements}
        </ul>
        <input type="text" value={formTodo} name="formTodo" onChange = {handleChange} />
        <button onClick = {addTodo}>add a todo</button>
      </div>
      <div className = "done-container">
        <h1>done</h1>
        <ul>
          {doneElements}
        </ul>
      </div>
    </main>
  )
}
