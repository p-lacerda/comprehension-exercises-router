import React, { Component } from 'react';
import Home from './components/Home';
import About from './components/About';
import Users from './components/Users';
import { BrowserRouter, Route, Link} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Link to="/"><p>Home</p></Link>
      <Link to="/users"><p>Users</p></Link>
      <Link to="/about"><p>About</p></Link>

      <Route exact path="/" component={Home} />
      <Route path="/users" component={Users} />
      <Route path="/about" component={About} />
      </BrowserRouter>
    );
  }
}

export default App;
