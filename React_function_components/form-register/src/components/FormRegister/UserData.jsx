import React, { useContext, useState } from "react";
import { TextField, Button, useControlled } from "@material-ui/core";
import RegisterValidations from "../../contexts/RegisterValidations";

function UserData({ onSubmit }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ password: { valid: true, text: "" } });

  const validations = useContext(RegisterValidations);

  function validateFields(event) {
    const { name, value } = event.target;
    const newState = { ...errors };
    newState[name] = validations[name](value);
    setErrors(newState);
  }

  //Para cada campo dentro dos meus erros em erros vou ter que fazer uma verificação. Para cada campo dos meus erros vou validar. Esse campo, essa maneira de fazer o array vai me trazer só o nome das chaves que tenho dentro desse objeto. Se quero pegar o valor daquela chave tenho que falar que meus erros para o campo que peguei válido, se for válido, deixo passar. Se não for válido quero retornar, return, false, quer dizer que não posso.

  function doSend() {
    for (let field in errors) {
      if (!errors[field].valid) {
        return false;
      }
    }
    return true;
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (doSend()) {
          onSubmit({ email, password });
        }
      }}
    >
      <TextField
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
        }}
        id="email"
        label="E-mail"
        type="email"
        required
        variant="outlined"
        margin="normal"
        fullWidth
      />

      <TextField
        value={password}
        onChange={(event) => {
          setPassword(event.target.value);
        }}
        onBlur={validateFields}
        error={!errors.password.valid}
        helperText={errors.password.text}
        id="password"
        name="password"
        label="Senha"
        type="password"
        required
        variant="outlined"
        margin="normal"
        fullWidth
      />

      <Button type="submit" variant="contained" color="primary">
        Próximo
      </Button>
    </form>
  );
}

export default UserData;
