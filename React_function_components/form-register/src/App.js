import React, { Component } from 'react';
import './App.css';
import FormRegister from './components/FormRegister/FormRegister';
import { Container, Typography } from '@material-ui/core';
import 'fontsource-roboto';

class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="h3" component="h1" align="center">Formulário de Cadastro</Typography>
        <FormRegister onSubmit={onSubmitForm} validateCPF={validateCPF} /> 
        {/* aqui as funções são passadas como propriedade. Chamei as propriedades de onSubmit e validateCPF*/}
      </Container>
    );
  }
}

function onSubmitForm(data) {
  console.log(data);
}

function validateCPF(cpf) {
  if(cpf.length !== 11) {
    return {valid:false, text:"CPF deve conter 11 dígitos"}
  } else {
    return {valid:true, text:""}
  }
}

export default App;
