import React, { Component } from 'react';

export default class NoteCard extends Component {
  render() {
    return(
			<section>
				<header>
					<h3>
						Título
					</h3>
				</header>
				<p>Escreva sua nota</p>
			</section>
    );
  }
}