import React, { Component } from 'react';
import './styles.css'

export default class FormRegister extends Component {
	constructor(props) {
		super(props);
		this.title = "";
		this.text = "";
		this.category = "Sem categoria";
		this.state = {categories: []};

		this._newCategories = this._newCategories.bind(this);
	}

	componentDidMount() {
		this.props.categories.subscribe(this._newCategories);
	}

	componentWillUnmount() {
		this.props.categories.unsubscribe(this._newCategories);
	}

	_newCategories(categories) {
		this.setState({...this.state, categories});
	}

	_handleChangeTitle(event) {
		event.stopPropagation();
		this.title = event.target.value;
	}

	_handleChangeText(event) {
		event.stopPropagation();
		this.text = event.target.value;
	}

	_handleChangeCategory(event) {
		event.stopPropagation();
		this.category = event.target.value;
	}

	_createNote(event) {
		event.preventDefault();
		event.stopPropagation();
		this.props.createNote(this.title, this.text, this.category);
	}

	render() {
		return(
			<form className = "form-register"
				onSubmit = {this._createNote.bind(this)} 	
			>
				<select onChange = {this._handleChangeCategory.bind(this)} className='form-register_input'>
					<option>Sem categoria</option>
					{this.state.categories.map((category, index) => {
						return <option key = "index">{category}</option>
				})};
				</select>
				<input 
					type = "text" 
					placeholder = "Título"
					className = "form-register_input"
					onChange = {this._handleChangeTitle.bind(this)}
				/>
				<textarea 
					rows = {15}
					placeholder = "Escreva sua nota aqui"
					className = "form-register_input"
					onChange = {this._handleChangeText.bind(this)}
				/>
				<button className = "form-register_input form-register_submit">Criar nota</button>
			</form>
		);
	}
}
