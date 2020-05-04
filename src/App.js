import React, { Component } from 'react';

import UserInput from './components/UserInput';
import UserOutput from './components/UserOutput';

class App extends Component {

  state = {
    userName : "Senthil"
  }

  handleUserNameChange(event) {
    this.setState({
      userName: event.target.value
    })
  }

  render() {
    return (
      <div style={{ padding: '10px' }}>
        <UserInput userNameChange={this.handleUserNameChange.bind(this)} userName={this.state.userName} />
        <div>
          <UserOutput userName={this.state.userName}/>
          <UserOutput userName={this.state.userName}/>
        </div>
      </div>
    );
  }
}

export default App;
