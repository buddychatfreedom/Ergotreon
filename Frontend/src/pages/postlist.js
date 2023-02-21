import React from 'react';
import { Card } from '../components';

function PostList(props) {
  const { posts } = props;

  return (
    <div className="post-list">
      <h1>Recent posts</h1>
      {posts.map((post, index) => (
        <Card key={index} title={post.title} description={post.description} />
      ))}
    </div>
  );
}

export default PostList;
