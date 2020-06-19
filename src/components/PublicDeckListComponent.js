import React from "react";
import DeckService from "../services/DeckService";
import {Link} from "react-router-dom";

class PublicDeckListComponent extends React.Component {

	state = {
		decks: [],
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

	addToMyDeck(deck) {
		DeckService.addToMyDecks(deck.id)
	}

	render() {
		return (
			<div>
				<h4>Decks</h4>
				<ul className="list-group">
					{
						this.state.decks.map(deck =>
							<li key={deck.id} className="list-group-item">
								<Link to={`/decks/${deck.id}`}>
									{deck.name}
								</Link>
								<a className="btn btn-primary float-right text-white"
									 onClick={() => this.addToMyDeck(deck)}>Add to My Decks</a>
							</li>)
					}
				</ul>
			</div>

		)
	}

}

export default PublicDeckListComponent