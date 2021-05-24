import React, { Component } from 'react';
import ListNote from './components/ListNote';
import FormRegister from './components/FormRegister';
import './assets/index.css';
import './assets/App.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: []
    };
  }
  
  createNote(title, text){
    const newNote = {title, text};
    const newArrayNotes = [...this.state.notes, newNote]
    const newState = {
      notes:newArrayNotes
    }
    this.setState(newState);
  };

  render() {
    console.log('render');
    return(
      // <h1>My First React App</h1>
      <section className = "content">
        <FormRegister createNote = {this.createNote.bind(this)}/>
        <ListNote notes = {this.state.notes}/>
      </section>
    );
  }
}
