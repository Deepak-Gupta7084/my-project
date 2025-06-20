import React, { useState } from 'react';
import PostForm from './PostForm';
import PostList from './PostList';

function App(){
  const [posts, setPosts] = useState([]);

  const addPost = (post) => {
    setPosts([post, ...posts]);
  };

  const deletePost = (id) => {
    setPosts(posts.filter((posts) => post.id !== id));
  };

  return(
    <div className="container">
      <h1>React Blog App</h1>
      <PostForm onAdd={addPost} />
      <PostList posts={posts} onDelete={deletePost} />
    </div>
  );
}

export default App;