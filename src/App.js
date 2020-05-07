import React, { Component } from 'react';

import UserInput from './components/UserInput';
import UserOutput from './components/UserOutput';
import UserTextValidation from './components/UserTextValidation';
import CharComponent from './components/CharComponent';

class App extends Component {

  state = {
    userName : "Senthil",
    userText: ""
  }

  handleUserNameChange(event) {
    this.setState({
      userName: event.target.value
    })
  }

  handleUserTextChange(event) {
    this.setState({
      userText: event.target.value
    })
  }

  removeUserTextCharacter(character) {
    const characters = this.state.userText.split('');
    const characterList = characters.slice();
    const characterIndex = characterList.findIndex(char => {
      return character === char;
    });
    characterList.splice(characterIndex, 1);
    const userText = characterList.join('');
    this.setState({ userText });
  }

  renderTextCharacters() {
    if(this.state.userText.length > 0) {
      return this.state.userText.split('').map((character, index) => {
        return <CharComponent removeCharacter={(character) => {
          this.removeUserTextCharacter(character);
        }} textCharacter={character} key={index} />
      })
    }
    return null;
  }

  render() {
    return (
      <div style={{ padding: '10px' }}>
        <div>
          <p>React Basic syntax practice</p>
          <UserInput userNameChange={this.handleUserNameChange.bind(this)} userName={this.state.userName} />
          <div>
            <UserOutput userName={this.state.userName}/>
            <UserOutput userName={this.state.userName}/>
          </div>
        </div>
        <div>
            <p>List & conditionals practice</p>
            <input onChange={this.handleUserTextChange.bind(this)} value={this.state.userText} />
            <p>{this.state.userText}</p>
            <UserTextValidation userTextLength={this.state.userText.length} />
            <div>
              {this.renderTextCharacters()}
            </div>
        </div>
      </div>
    );
  }
}

export default App;
