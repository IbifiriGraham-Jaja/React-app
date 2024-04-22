
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Repo from './pages/Repo';
import NotFound from './pages/NotFound';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <div>
        <h1>My GitHub Portfolio</h1>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/repo/:id" component={Repo} />
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
