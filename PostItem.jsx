import React from 'react';

function PostItem({ post, onDelete }) {
  return(
    <div className="post-item">
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <button onClick={() => onDelete(post.id)}>Delete</button>
    </div>
  );
}

export default PostItem;