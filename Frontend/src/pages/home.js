import React from 'react';
import { Card, Button } from '../components';

function Home() {
  return (
    <div className="home">
      <h1>Welcome to Patreon-like program on GitHub!</h1>
      <p>Discover and support creators you love on our platform.</p>
      <Button label="Get started" onClick={() => console.log('Clicked!')} />
      <div className="featured-creators">
        <h2>Featured creators</h2>
        <div className="creator-list">
          <Card title="Creator 1" description="Description of Creator 1." />
          <Card title="Creator 2" description="Description of Creator 2." />
          <Card title="Creator 3" description="Description of Creator 3." />
        </div>
      </div>
    </div>
  );
}

export default Home;

}

export default Home;

