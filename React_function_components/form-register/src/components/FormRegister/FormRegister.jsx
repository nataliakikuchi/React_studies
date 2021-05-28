import React, { useState } from 'react';
import { Button, TextField, Switch, FormControlLabel } from '@material-ui/core';

function FormRegister({onSubmit}) { //ou (props)
	const [name, setName] = useState("");
	//const nome = arr[0];
	//const setNome = arr[1];

	const [lastName, setLastName] = useState("");
	const [cpf, setCpf] = useState("");
	const [promotions, setPromotions] = useState(true);
	const [news, setNews] = useState(true);

  return(
  	<form onSubmit={(event) => {
			event.preventDefault();
			onSubmit({name, lastName, cpf, promotions, news}); //props.onSubmit({})
			}}
		>
			<TextField 
				value={name}
				onChange={(event) => {
					setName(event.target.value);
				}}
				id="name" 
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
				id="cpf" 
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

			<Button type="submit" variant="contained" color="primary">Cadastrar</Button>
		</form>
	);
}

export default FormRegister;