import React from 'react';
import { Card, Button } from '../components';

function CreatorProfile(props) {
  const { creatorName, bio, socialLinks, posts } = props;

  return (
    <div className="creator-profile">
      <h1>{creatorName}</h1>
      <p>{bio}</p>
      <div className="social-links">
        {socialLinks.map((link, index) => (
          <a key={index} href={link.url}>
            {link.label}
          </a>
        ))}
      </div>
      <div className="post-list">
        <h2>Recent posts</h2>
        {posts.map((post, index) => (
          <Card key={index} title={post.title} description={post.description} />
        ))}
      </div>
    </div>
  );
}

export default CreatorProfile;
