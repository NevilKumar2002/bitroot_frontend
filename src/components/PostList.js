import React, { useState, useEffect } from 'react';
import Card from './Card';

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts')
      .then(response => response.json())
      .then(data => setPosts(data));
  }, []);

  return (
    <div className="post-list">
      {posts.map(post => (
        <Card key={post.id} post={post} />
      ))}
    </div>
  );
}

export default PostList;
