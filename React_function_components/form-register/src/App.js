import React, { Component } from "react";
import "./App.css";
import FormRegister from "./components/FormRegister/FormRegister";
import { Container, Typography } from "@material-ui/core";
import "fontsource-roboto";
import { validateCPF, validatePassword } from "./models/register";

class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="h3" component="h1" align="center">
          Formulário de Cadastro
        </Typography>
        <FormRegister
          onSubmit={onSubmitForm}
          validations={{
            cpf: validateCPF,
            password: validatePassword,
            name: validatePassword,
          }}
        />
        {/* aqui as funções são passadas como propriedade. Chamei as propriedades de onSubmit e validateCPF*/}
      </Container>
    );
  }
}

function onSubmitForm(data) {
  console.log(data);
}

export default App;
