import React from 'react';
import ListNote from './components/ListNote';
import FormRegister from './components/FormRegister';
import './assets/index.css';
import './assets/App.css';

function App() {
  return (
    // <h1>My First React App</h1>
    <section className = "content">
      <FormRegister/>
      <ListNote/>
    </section>
  );
}

export default App;
