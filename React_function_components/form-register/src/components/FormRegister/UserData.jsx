import React from 'react';
import { TextField, Button } from '@material-ui/core';

function UserData({onSubmit}) {
  return(
    <form onSubmit={(event) => {
      event.preventDefault();
      onSubmit();
    }}
    >
      <TextField 
        id="email" 
        label="E-mail" 
        type="email"
        required
        variant="outlined"
        margin="normal"
        fullWidth
      /> 

      <TextField 
        id="password" 
        label="Senha" 
        type="password"
        required
        variant="outlined"
        margin="normal"
        fullWidth
      /> 

      <Button type="submit" variant="contained" color="primary">
        Cadastrar
      </Button>
    </form>
  );
}

export default UserData;