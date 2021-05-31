import React from 'react';
import { TextField, Button } from '@material-ui/core';

function DeliveryData() {
  return(
    <form>
      <TextField
         id="cep" 
         label="CEP" 
         type="number"
         variant="outlined"
         margin="normal"
      />

      <TextField
         id="address" 
         label="Endereço" 
         type="text"
         variant="outlined"
         margin="normal"
         fullWidth
      />

      <TextField
         id="num" 
         label="Número" 
         type="number"
         variant="outlined"
         margin="normal"
      />

      <TextField
         id="city" 
         label="Cidade" 
         type="text"
         variant="outlined"
         margin="normal"
         fullWidth
      />

      <TextField
         id="state" 
         label="Estado" 
         type="text"
         variant="outlined"
         margin="normal"
      />

      <Button type="submit" variant="contained" color="primary" fullWidth>
        Finalizar cadastro
      </Button>
    </form>
  );
}

export default DeliveryData;