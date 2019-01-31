import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './app.css'

import Header from './components/Header';
import Home from './components/home/Home';
import BeginnerPage from './components/home/Levels/BeginnerPage';

import ConversationOne from './components/Conversation/ConversationOne';
import ConversationTwo from './components/Conversation/ConversationTwo'

class App extends Component {
  render() {
    return (
      <div style={{ width: '420px', margin: '0 auto' }}>
        <Route path="/" component={Header} />
        <Route exact path="/" component={Home} />
        <Route exact path="/beginner" component={BeginnerPage} />
        <Route exact path="/conversation/one" component={ConversationOne} />
        <Route exact path="/conversation/two" component={ConversationTwo} /> 
      </div>
    );
  }
}

export default App;
