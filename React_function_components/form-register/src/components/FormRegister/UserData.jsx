import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";

function UserData({ onSubmit, validations }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ password: { valid: true, text: "" } });

  function validateFields(event) {
    const { name, value } = event.target;
    const newState = { ...errors };
    newState[name] = validations[name](value);
    setErrors(newState);
  }

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
        helperText="A senha deve ter entre 4 e 60 caracteres"
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
