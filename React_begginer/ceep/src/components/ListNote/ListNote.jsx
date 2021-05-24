import React, { Component } from 'react';
import NoteCard from '../NoteCard';
import './styles.css';

export default class ListNote extends Component {
	// constructor(props) {
	// 	super(props);
	// }

	render() {
		return(
			<ul className = "list-note">
				{this.props.notes.map((note, index) => {
					return(
						<li className = "list-note_item" key = {index}>
							<NoteCard 
								index = {index}
								deleteNote = {this.props.deleteNote}
								title = {note.title} 
								text = {note.text} 
							/>
						</li>
					);
				})}
			</ul>
		);
	}
}
