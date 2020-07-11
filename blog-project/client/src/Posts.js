import React, { useState, useEffect } from 'react';
import './App.css';
import {getPosts, createPost, deletePost} from './api'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

function Posts() {
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
	<Typography variant="h3">Posts</Typography>
	<form>
		<Typography variant="h5">
		Add New Blog Post
		</Typography>
		<TextField margin="normal" fullWidth label="Title" onChange={e => updateNewPostTitleInput(e.target.value)} value={newPostTitleInput} />
		<TextField margin="normal" fullWidth label="Author" onChange={e => updateNewPostAuthorInput(e.target.value)} value={newPostAuthorInput} />
		<TextField margin="normal" fullWidth multiline rows={10} label="Body" onChange={e => updateNewPostBodyInput(e.target.value)} value={newPostBodyInput}/>
		<div>
		<Button variant="contained" color="primary" onClick={addNewPost}>Submit</Button>
		</div>
	</form>
	<h3>Current Posts</h3>
	<ul>
		{postsToHtml()}
	</ul>
	</div>
  )
}

export default Posts