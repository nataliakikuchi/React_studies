import React, { Component } from 'react';
import NoteCard from './NoteCard';

export default class ListNote extends Component {
	render() {
		return(
			<ul>
				{Array.of("Trabalho", "Estudos", "Lazer").map(category => {
					return(
						<li>
							<div>{category}</div>
							<NoteCard/>
						</li>
					);
				})}
			</ul>
		);
	}
}
