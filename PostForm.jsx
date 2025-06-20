import React, { useState } from 'react';

function PostForm({ onAdd }) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!title || !body) return;

    const newPost ={
      id: Date.now(),
      title,
      body,
    };

    onAdd(newPost);
    setTitle('');
    setBody('');
  };

  return(
    <form onSubmit={handleSubmit} className="form">
      <input type="text" placeholder="Post Title"
      value={title}
      onChange={(e) => setTitle(e.target.value)} />

      <textarea placeholder="Write your post..." value={body}
      onChange={(e) => setBody(e.target.value)} />

      <button type="submit">Add Post</button>
    </form>
  );
}

export default PostForm;