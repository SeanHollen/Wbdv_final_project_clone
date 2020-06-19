import React from "react";
import DeckService from "../services/DeckService";
import {Link} from "react-router-dom";
import UserService from "../services/UserService";

class PublicDeckListComponent extends React.Component {

	state = {
		decks: [],
		loggedIn: false
	}

	componentDidMount() {
		DeckService.findAllDecks().then(
			decks => {
				this.setState({
					decks: decks
				})
				console.log(this.state.decks)
				UserService.profile().catch(e => {}).then(user => {
					if (user) {
						this.setState({loggedIn: true})
					}
				})
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
								{
									this.state.loggedIn &&
									<Link to={`/mydecks`} className="btn btn-primary float-right text-white"
										 onClick={() => this.addToMyDeck(deck)}>Add to My Decks</Link>
								}
							</li>)
					}
				</ul>
			</div>

		)
	}

}

export default PublicDeckListComponent