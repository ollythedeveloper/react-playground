import React, { Component } from 'react';
import './App.css';
import Messages from './Messages';

class AppThink extends Component {
  render() {
    return (
      <div className="AppThink">
        <h1>YOUR APPLICATION NAME!</h1>
        <Messages name="Meassages" unread={0}/>
        <Messages name="Notifications" unread={10}/>
      </div>
    );
  }
}

export default AppThink;