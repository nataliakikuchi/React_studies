import React from 'react';
import { Button, TextField, Switch, FormControlLabel } from '@material-ui/core/Button';

function FormRegister() {
  return(
  	<form>
			<TextField 
				id="name" 
				label="Nome" 
				variant="outlined" 
				margin="normal" 
				fullWidth 
			/>

			<TextField 
				id="last-name" 
				label="Sobrenome" 
				variant="outlined" 
				margin="normal" 
				fullWidth 
			/>

			<TextField 
				id="cpf" 
				label="CPF" 
				variant="outlined" 
				margin="normal" 
				fullWidth 
			/>

			<FormControlLabel 
				label="Promoções" 
				control={<Switch name="promotions" defaultChecked color="primary" />} 
			/>
			
			<FormControlLabel
				label="Novidades"
				control={<Switch name="news" defaultChecked color="primary" />} 
			/>

			<Button type="submit" variant="contained" color="primary">Cadastrar</Button>
		</form>
	);
}

export default FormRegister;