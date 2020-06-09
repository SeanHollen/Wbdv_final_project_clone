import React from "react";
import FlashCardComponent from "../components/FlashCardComponent";

class DeckContainer extends React.Component {
	state = {
		cards: [
			{ english: 'blue', french: 'bleu' },
			{ english: 'red', french: 'rouge' }
		]
	}

	render() {

		console.log(this.props)

		return (
			<div>
				<h3>DeckContainer</h3>
				<div className="row">
					{
						this.state.cards.map(card =>
							<FlashCardComponent
								flashcard={card} />
						)}
				</div>
			</div>
		)
	}
}

export default DeckContainer