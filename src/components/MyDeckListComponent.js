import React from "react";
import DeckService from "../services/DeckService";
import {Link} from "react-router-dom";

class MyDeckListComponent extends React.Component {

	state = {
		decks: [],
		newName: "",
		editingDeck: {}
	}

	componentDidMount() {
		DeckService.findMyDecks().then(
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
				window.location.reload();
			}
		)
	}

	save() {
		DeckService.updateDeck(this.state.editingDeck.id, this.state.editingDeck)
			.then(() => {
				this.setState({editingDeck: {}})
			})
		DeckService.findAllDecks().then(
			decks => {
				this.setState({
					decks: decks
				})
				console.log(this.state.decks)
				window.location.reload();
			}
		)
		window.location.reload()
	}

	delete() {
		DeckService.deleteDeck(this.state.editingDeck.id)
		DeckService.findAllDecks().then(
			decks => {
				this.setState({
					decks: decks
				})
				console.log(this.state.decks)
				window.location.reload();
			}
		)
		window.location.reload()
	}


	render() {
		return (
			<div>
				<h4>Decks ({this.state.decks.length})</h4>
				<ul className="list-group">
					{
						this.state.decks.map(deck =>
							<li key={deck.id} className="list-group-item">
								{
									this.state.editingDeck.id === deck.id &&
									<span className="form-inline">
										<input className="form-control" value={this.state.editingDeck.name}
													 onChange={(e) => {
														 const newTitle = e.target.value
														 this.setState(prevState => ({
															 editingDeck: {
																 ...prevState.editingDeck,
																 name: newTitle
															 }
														 }))
													 }}
										/>
										<a className="btn btn-success text-white float-right"
											 onClick={() => this.save()}>Save</a>
										<a className="btn btn-danger text-white float-right"
											 onClick={() => this.delete()}>Delete</a>
									</span>
								}
								{
									this.state.editingDeck.id !== deck.id &&
									<span>
										<Link to={`/decks/${deck.id}`}>
											{deck.name}
										</Link>
										<a className="btn btn-primary text-white float-right"
											 onClick={() => this.setState({editingDeck: deck})}>Edit</a>
									</span>

								}

							</li>)
					}
					<li className="list-group-item text-center">
						<div className="input-group">
							<input type="text" className="form-control" placeholder="New Deck" onChange={(e) => {
								const newTitle = e.target.value
								this.setState(() => ({
									newName: newTitle
								}))
							}} value={this.state.newName}/>
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

export default MyDeckListComponent