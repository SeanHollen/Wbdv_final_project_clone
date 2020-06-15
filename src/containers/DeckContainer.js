import React from "react";
import FlashCardComponent from "../components/FlashCardComponent";
import FlashCardEditorComponent from "../components/FlashCardEditorComponent";
import DeckService from "../services/DeckService";
import {Link} from "react-router-dom";
import FlashcardService from "../services/FlashcardService";

class DeckContainer extends React.Component {

	state = {
		name: "Col",
		cards: [],
		editing: false,
		creating: false
	}

	componentDidMount() {
		DeckService.findDeckById(this.props.match.params.deckId).then(deck => {
			this.setName(deck.name)
			console.log(deck.flashcards)
			this.setCards(deck.flashcards)
			console.log(this.state)
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
		this.setState(prevState => ({
			cards: prevState.cards.filter(card => card.id !== id)
		}))
	}

	addCard = (card) => {
		FlashcardService.createFlashcard(this.props.match.params.deckId, card)
		this.setState(prevState => ({
			cards: [...prevState.cards, card]
		}))
	}


	render() {

		return (
			<div>
				{
					!this.state.creating &&
					<div className="row">
						<Link to={'/decks'}>Back</Link>
						<h3>{`Deck: ${this.state.name}`} </h3>
						{
							!this.state.editing &&
							<i
								className="btn btn-primary fa fa-edit"
								onClick={() => this.setEditing(true)}>
								Edit
						</i>
						}
						{
							this.state.editing &&
							<i
								className="btn btn-primary fa fa-check"
								onClick={() => {
									this.setEditing(false)
									this.setCreating(false)
								}}>
								Done
						</i>
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

			</div>
		)
	}
}

export default DeckContainer