import React from 'react';
import ListNote from './components/ListNote';

function App() {
  return (
    // <h1>My First React App</h1>
    <section>
      <form>
        <input type = "text" placeholder = "Título"/>
        <textarea placeholder = "Escreva sua nota aqui"/>
        <button>Criar nota</button>
      </form>
      <ListNote/>
  </section>
  );
}

export default App;
