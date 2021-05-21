import React, { Component } from 'react';
import NoteCard from '../NoteCard';
import './styles.css';

export default class ListNote extends Component {
	render() {
		return(
			<ul className = "list-note">
				{Array.of("Trabalho", "Estudos", "Lazer").map((category, index) => {
					return(
						<li className = "list-note_item" key = {index}>
							<div>{category}</div>
							<NoteCard/>
						</li>
					);
				})}
			</ul>
		);
	}
}
