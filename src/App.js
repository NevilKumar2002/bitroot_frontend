import React from 'react';
import './index.css'
import PostList from './components/PostList';

function App() {
  return (
    <div className="app">
      <header>
        <h1>Bitroot Frontend Test</h1>
      </header>
      <main>
        <PostList />
      </main>
    </div>
  );
}

export default App;
