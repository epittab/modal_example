import React from 'react';
import './App.css';
import Modal from './Modal.js';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      modal: false
    }
  }

  toggleModal = () => {
    this.state.modal ? 
    this.setState({modal: false}) : 
    this.setState({modal: true})  
}

  render(){
    return (
      <div className="App">
        < button onClick={this.toggleModal}> Show Modal </button>
        <Modal display={this.state.modal} toggle={this.toggleModal}/>
      </div>
    );
  }
}

export default App;
