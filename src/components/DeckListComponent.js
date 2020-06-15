import React from "react";
import DeckService from "../services/DeckService";
import {Link} from "react-router-dom";

class DeckListComponent extends React.Component {

	state = {
		decks: []
	}

	componentDidMount() {
		DeckService.findAllDecks().then(
			decks => {
				this.setState({
					decks: decks
				})
				console.log(this.state.decks)
			}
		)
	}

	render() {
		return (
			<div>
				<h4>Decks {this.state.decks.length}</h4>
				<ul className="list-group">
					{
						this.state.decks.map(deck =>
						<li key={deck.id} className="list-group-item">
							<Link to={`/decks/${deck.id}`}>
								{deck.name}
							</Link>
						</li>)
					}

				</ul>
			</div>

		)
	}

}

export default DeckListComponent