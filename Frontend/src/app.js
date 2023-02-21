import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CreatorProfile from './components/CreatorProfile';
import PostList from './components/PostList';
import Dashboard from './components/Dashboard';
import Settings from './components/Settings';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/settings">
          <Settings />
        </Route>
        <Route path="/:creatorId">
          <CreatorProfile />
        </Route>
        <Route path="/">
          <PostList />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
