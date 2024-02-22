import React from 'react';

function Home() {
  return (
    <div className="Home">
      <header className="Home-header">
        <h1>Welcome to Job Opportunities</h1>
        <div>
          <a href="/login">
            <h3>Login &rarr;</h3>
            <p>If you already have an account.</p>
          </a>
          <a href="/register">
            <h3>Register &rarr;</h3>
            <p>If you don't have an account yet.</p>
          </a>
        </div>
      </header>
    </div>
  );
}

export default Home;