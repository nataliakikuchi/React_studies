import React, { Component } from 'react';

export default class FormRegister extends Component {
	render() {
		return(
			<form>
				<input type = "text" placeholder = "Título"/>
				<textarea placeholder = "Escreva sua nota aqui"/>
				<button>Criar nota</button>
			</form>
		);
	}
}
