import React from "react";

export default class FlashCardComponent extends React.Component {

	state = {
		flipped: false,
		flashcard: this.props.flashcard
	}

	flip = () =>
    this.setState({flipped: !this.state.flipped})

	render() {
		return (
			<div className="col-7 col-sm-5 col-md-4 col-lg-3 col-xl-2">
				<div className="card" onClick={() => this.flip()}>
					<div className="card-body">
						<h2 className="card-title">
							{
								!this.state.flipped &&
								this.state.flashcard.french
							}
							{
								this.state.flipped &&
								this.state.flashcard.english
							}
						</h2>
						<i
							className="btn btn-primary fa fa-retweet"
							onClick={() => this.flip()}>
						</i>
					</div>
				</div>
			</div>
		)
	}
}