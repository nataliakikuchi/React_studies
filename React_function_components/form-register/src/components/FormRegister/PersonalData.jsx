import React, { useState, useContext } from "react";

import { Button, TextField, Switch, FormControlLabel } from "@material-ui/core";
import RegisterValidations from "../../contexts/RegisterValidations";

function PersonalData({ onSubmit }) {
  //ou (props). Injeção de dependência
  const [name, setName] = useState("");
  //const nome = arr[0];
  //const setNome = arr[1];

  const [lastName, setLastName] = useState("");
  const [cpf, setCpf] = useState("");
  const [promotions, setPromotions] = useState(true);
  const [news, setNews] = useState(true);
  const [errors, setErrors] = useState({
    cpf: { valid: true, text: "" },
    name: { valid: true, text: "" },
  });

  const validations = useContext(RegisterValidations);

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
          onSubmit({ name, lastName, cpf, promotions, news }); //props.onSubmit({})
        }
      }}
    >
      <TextField
        value={name}
        onChange={(event) => {
          setName(event.target.value);
        }}
        onBlur={validateFields}
        error={!errors.name.valid}
        helperText={errors.name.text}
        id="name"
        name="name"
        label="Nome"
        variant="outlined"
        margin="normal"
        fullWidth
      />

      <TextField
        value={lastName}
        onChange={(event) => {
          setLastName(event.target.value);
        }}
        id="last-name"
        label="Sobrenome"
        variant="outlined"
        margin="normal"
        fullWidth
      />

      <TextField
        value={cpf}
        onChange={(event) => {
          setCpf(event.target.value);
        }}
        onBlur={validateFields}
        error={!errors.cpf.valid}
        helperText={errors.cpf.text}
        id="cpf"
        name="cpf"
        label="CPF"
        variant="outlined"
        margin="normal"
        fullWidth
      />

      <FormControlLabel
        label="Promoções"
        control={
          <Switch
            checked={promotions}
            onChange={(event) => {
              setPromotions(event.target.checked);
            }}
            name="promotions"
            color="primary"
          />
        }
      />

      <FormControlLabel
        label="Novidades"
        control={
          <Switch
            checked={news}
            onChange={(event) => {
              setNews(event.target.checked);
            }}
            name="news"
            color="primary"
          />
        }
      />

      <Button type="submit" variant="contained" color="primary">
        Próximo
      </Button>
    </form>
  );
}

export default PersonalData;
