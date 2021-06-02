import React, { useContext, useState } from "react";
import { TextField, Button } from "@material-ui/core";
import RegisterValidations from "../../contexts/RegisterValidations";
import useErrors from "../../hooks/useErrors";

function UserData({ onSubmit }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const validations = useContext(RegisterValidations);
  const [errors, validateFields, doSend] = useErrors(validations);

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
