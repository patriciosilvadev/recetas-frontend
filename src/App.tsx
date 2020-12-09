import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Header } from './Components/Header/Header';
import { Home } from './Pages/Home';
import { Post } from './Pages/Post';
import { Search } from './Pages/Search';

function App() {
  return (
    <Router>
      <div>
        <Header/>
        <Route exact path="/" component={Home}/>
        <Route exact path="/home" component={Home}/>
        <Route path="/post" component={Post}/>
        <Route path="/search" component={Search}/>
        <span>Hola Mundo</span>
      </div>
    </Router>
  );
}

export default App;
