import React, { Component } from 'react';
import NoteCard from './NoteCard';

export default class ListNote extends Component {
	render() {
		return(
			<ul>
				<li>
					<NoteCard/>
				</li>
				<li>
					<NoteCard/>
				</li>
				<li>
					<NoteCard/>
				</li>
			</ul>
		);
	}
}
