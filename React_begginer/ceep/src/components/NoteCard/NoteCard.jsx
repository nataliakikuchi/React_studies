import React, { Component } from 'react';
import "./styles.css";

export default class NoteCard extends Component {
  render() {
    return(
			<section className = "note-card">
				<header className = "note-card-header">
					<h3 className = "note-card-title">{this.props.title}</h3>
				</header>
				<p className = "note-card-text">{this.props.text}</p>
			</section>
    );
  }
}