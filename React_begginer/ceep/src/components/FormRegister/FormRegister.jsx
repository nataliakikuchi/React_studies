import React, { Component } from 'react';
import './styles.css'

export default class FormRegister extends Component {
	render() {
		return(
			<form className = "form-register">
				<input 
					type = "text" 
					placeholder = "Título"
					className = "form-register_input"
				/>
				<textarea 
					placeholder = "Escreva sua nota aqui"
					rows = {15}
					className = "form-register_input"
				/>
				<button className = "form-register_input form-register_submit">Criar nota</button>
			</form>
		);
	}
}
