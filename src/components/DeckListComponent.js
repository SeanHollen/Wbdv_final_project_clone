import React from "react";
import DeckService from "../services/DeckService";
import {Link} from "react-router-dom";

class DeckListComponent extends React.Component {

	state = {
		decks: [],
		newName: ""
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

	createDeck = () => {
		const deck = {
			name: this.state.newName,
			flashcards: []
		}
		DeckService.createDeck(deck)
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
					<li className="list-group-item text-center">
						<div className="input-group">
							<input type="text" className="form-control" placeholder="New Deck" onChange={(e) => {
									const newTitle = e.target.value
									this.setState(() => ({
										newName: newTitle
									}))
								}} value={this.state.newName} />
							<a role="button" className="btn btn-primary text-white" onClick={() => this.createDeck()}>
								<i className="fa fa-plus"></i>
							</a>
						</div>

					</li>

				</ul>
			</div>

		)
	}

}

export default DeckListComponent