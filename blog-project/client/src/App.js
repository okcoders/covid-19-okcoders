import React, { useState, useEffect } from 'react';
import './App.css';
import {getPosts, createPost} from './api'

function App() {
  const [newTodoInput, updateNewTodoInput] = useState('')
  const [todoList, updateTodoList] = useState([])

  function getAndSetPosts() {
    return getPosts().then(posts => {
      updateTodoList(posts)
    })
  }

  useEffect(() => {getAndSetPosts()} , [])

  function addNewTodo() {
    const newTodoItem = {
      name: newTodoInput,
      completed: false,
    };

    createPost(newTodoItem).then(() => {
      getAndSetPosts().then(() => {
        updateNewTodoInput('')
      })
    })
  }

  function removeTodoByName(name) {
    const newList = todoList.filter(todo => todo.name !== name)
    updateTodoList(newList)
  }

  function todoListToHtml() {
    return todoList.map((todo, i) => {
      return (
        <li key={i} onClick={() => removeTodoByName(todo.name)}>{todo.name}</li>
      )
    })
  }

  return (
    <div className="my-app">
      <h3>My to do list</h3>
      <label>Add Todo</label>
      <input type="text" onChange={e => updateNewTodoInput(e.target.value)} value={newTodoInput} />
      <button onClick={addNewTodo}>Submit</button>
      <h3>Current Todo List</h3>
      <ol>
        {todoListToHtml()}
      </ol>
    </div>
  );
}

export default App;
