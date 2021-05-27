import React, { Component } from 'react';
import './App.css';
import FormRegister from './components/FormRegister/FormRegister';
import { Container, Typography } from '@material-ui/core';
import 'fontsource-roboto';

class App extends Component() {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="h3" component="h1" align="center">Formulário de Cadastro</Typography>
        <FormRegister/>
      </Container>
    );
  }
}

export default App;
