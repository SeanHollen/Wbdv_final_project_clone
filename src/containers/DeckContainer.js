import React from "react";
import FlashCardComponent from "../components/FlashCardComponent";
import FlashCardEditorComponent from "../components/FlashCardEditorComponent";

class DeckContainer extends React.Component {

	state = {
		name: "Colors",
		cards: [
			{ english: 'blue', french: 'bleu', _id: 123 },
			{ english: 'red', french: 'rouge', _id: 234 }
		],
		editing: false,
		creating: false
	}

	setEditing = (editing) =>
		this.setState({ editing: editing })

	setCreating = (creating) =>
		this.setState({ creating: creating })

	deleteCard = (id) =>
		this.setState(prevState => ({
			cards: prevState.cards.filter(card => card._id !== id)
		}))

	addCard = (card) =>
		this.setState(prevState => ({
			cards: [...prevState.cards, card]
		}))

	render() {

		return (
			<div>
				{
					!this.state.creating &&
					<div className="row">
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
									key={card._id}
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