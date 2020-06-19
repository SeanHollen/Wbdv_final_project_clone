import React from "react";
import FlashCardComponent from "../components/FlashCardComponent";
import FlashCardEditorComponent from "../components/FlashCardEditorComponent";
import DeckService from "../services/DeckService";
import {Link} from "react-router-dom";
import FlashcardService from "../services/FlashcardService";
import UserService from "../services/UserService";

class DeckContainer extends React.Component {

	state = {
		name: "",
		cards: [],
		editing: false,
		creating: false,
		owned: false
	}

	componentDidMount() {
		DeckService.findDeckById(this.props.match.params.deckId).then(deck => {
			this.setName(deck.name)
			console.log(deck.flashcards)
			this.setCards(deck.flashcards)
			console.log(this.state)
			UserService.profile().catch(e => {})
				.then(user => {
					console.log(user)
					console.log(deck)
					if (user) {
						for (const [index, value] of deck.owner.entries()) {
							if (value.id === user.id) {
								this.setState({owned: true})
							} else {
								this.setState({owned: false})
							}
						}
					}
				})
			}
		)
	}

	setName = (name) =>
		this.setState({name: name})

	setCards = (cards) =>
		this.setState({cards: cards})

	setEditing = (editing) =>
		this.setState({ editing: editing })

	setCreating = (creating) =>
		this.setState({ creating: creating })

	deleteCard = (id) => {
		FlashcardService.deleteFlashcard(id)
		DeckService.findDeckById(this.props.match.params.deckId).then(deck => {
				this.setName(deck.name)
				this.setCards(deck.flashcards)
			}
		)
	}

	addCard = (card) => {
		FlashcardService.createFlashcard(this.props.match.params.deckId, card)
		this.setState(prevState => ({
			cards: [...prevState.cards, card]
		}))
	}

	deleteDeck = () => {
		DeckService.deleteDeck(this.props.match.params.deckId)
	}


	render() {
		let lessonPath = "/lesson/" + this.props.match.params.deckId;
		return (
			<div>
				{
					!this.state.creating &&
					<div className="">
						<h3>{`Deck: ${this.state.name}`} </h3>
						{
							!this.state.editing && this.state.owned &&
							<a
								className="btn btn-primary text-white float-right"
								onClick={() => this.setEditing(true)}>
								Edit
							</a>
						}
						{
							this.state.editing &&
							<div className="row float-right">
								<i
									className="btn btn-primary fa fa-check"
									onClick={() => {
										this.setEditing(false)
										this.setCreating(false)
									}}>
									Done
								</i>
								<Link to={'/decks'}>
									<i
										className="btn btn-danger fa fa-trash"
										onClick={() => {
										this.deleteDeck()
										}}>
										Delete Deck
									</i>
								</Link>
							</div>
						}
					</div>
				}
				{
					!this.state.creating &&
					<div className="row">
						{
							this.state.cards.map(card =>
								<FlashCardComponent
									flashcard={card}
									key={card.id}
									editing={this.state.editing}
									deleteCard={this.deleteCard} />
							)}
						{
							this.state.editing &&
							<div className="">
								<i
									className="btn btn-primary fa fa-plus"
									onClick={() => this.setCreating(true)}>
									Add flashcard
								</i>
							</div>

						}
					</div>
				}
				{
					this.state.creating &&
					<FlashCardEditorComponent
						addCard={this.addCard}
						setCreating={this.setCreating} />
				}
				<br/>
				<a className="btn btn-primary float-left">
				<Link className="text-white" to={lessonPath}>
					Lesson</Link></a>
			</div>
		)
	}
}

export default DeckContainer