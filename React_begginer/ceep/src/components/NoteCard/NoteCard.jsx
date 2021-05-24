import React, { Component } from 'react';
import './styles.css';
import { ReactComponent as DeleteIcon } from '../../assets/img/delete_icon.svg' 

export default class NoteCard extends Component {

delete() {
	const index = this.props.index;
	this.props.deleteNote(index);
}

render() {
    return(
			<section className = "note-card">
				<header className = "note-card-header">
					<h3 className = "note-card-title">{this.props.title}</h3>
					<DeleteIcon onClick = {this.delete.bind(this)}/>
				</header>
				<p className = "note-card-text">{this.props.text}</p>
			</section>
    );
  }
}