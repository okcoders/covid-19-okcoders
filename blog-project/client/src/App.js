import React, { useState, useEffect } from 'react';
import './App.css';
import {getPosts, createPost, deletePost} from './api'

function App() {
  const [newPostTitleInput, updateNewPostTitleInput] = useState('')
  const [newPostAuthorInput, updateNewPostAuthorInput] = useState('')
  const [newPostBodyInput, updateNewPostBodyInput] = useState('')
  const [posts, updatePosts] = useState([])

  function getAndSetPosts() {
    return getPosts().then(posts => {
      updatePosts(posts)
    })
  }

  useEffect(() => {getAndSetPosts()} , [])

  function addNewPost() {
    const newPostItem = {
      title: newPostTitleInput,
      author: newPostAuthorInput,
      body: newPostBodyInput
    };

    createPost(newPostItem).then(() => {
      getAndSetPosts().then(() => {
        updateNewPostTitleInput('')
        updateNewPostAuthorInput('')
        updateNewPostBodyInput('')
      })
    })
  }

  async function deletePostHandler(id) {
    await deletePost(id)
    getAndSetPosts()
  }

  function postsToHtml() {
    return posts.map((post, i) => {
      return (
      <li key={i}>
        <div>
        Title: {post.title} Author: {post.author}
        </div>
        <div>
          <button onClick={() => deletePostHandler(post._id)}>Delete Post</button>
        </div>
        </li>
      )
    })
  }

  return (
    <div className="my-app">
      <h3>Posts</h3>
      <h5>Add New Blog Post</h5>
      <label>Title</label>
      <input type="text" onChange={e => updateNewPostTitleInput(e.target.value)} value={newPostTitleInput} />
      <label>Author</label>
      <input type="text" onChange={e => updateNewPostAuthorInput(e.target.value)} value={newPostAuthorInput} />
      <div>
        <label>Body</label>
        <textarea onChange={e => updateNewPostBodyInput(e.target.value)} value={newPostBodyInput}></textarea>
      </div>
      <div>
        <button onClick={addNewPost}>Submit</button>
      </div>
      <h3>Current Posts</h3>
      <ul>
        {postsToHtml()}
      </ul>
    </div>
  );
}

export default App;
