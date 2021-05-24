import React, { Component } from 'react';
import ListNote from './components/ListNote';
import ListCategory from './components/ListCategory';
import FormRegister from './components/FormRegister';
import './assets/index.css';
import './assets/App.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
      categories: []
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

  addCategory(categoryName) {
    const newArrarCategories = [...this.state.categories, categoryName];
    const newState = {...this.state, categories:newArrarCategories}; // spread operator no this.state, vou pegar meu estado atual, e dentro desse estado atual vou adicionar categorias
    this.setState(newState);
  }

  deleteNote(index){
    let arrayNotes = this.state.notes;
    arrayNotes.splice(index, 1);
    this.setState({notes: arrayNotes});
  }

  render() {
    console.log('render');
    return(
      // <h1>My First React App</h1>
      <section className = "content">
        <FormRegister createNote = {this.createNote.bind(this)}/>
        <main className = 'main-content'>
          <ListCategory 
            addCategory = {this.addCategory.bind(this)}
            categories = {this.state.categories}
          />
          <ListNote 
            deleteNote = {this.deleteNote.bind(this)}
            notes = {this.state.notes}
          />
        </main>
      </section>
    );
  }
}
