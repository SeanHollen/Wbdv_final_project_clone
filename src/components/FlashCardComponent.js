import React from "react";

export default class FlashCardComponent extends React.Component {

	state = {
		flipped: false,
		flashcard: this.props.flashcard
	}

	flip = () =>
		this.setState({ flipped: !this.state.flipped })

	render() {
		return (
			<div className="col-7 col-sm-5 col-md-4 col-lg-3 col-xl-2">
				<div className="card">
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
							{
								this.state.flashcard.image &&
								<img src={this.state.flashcard.image} style={{width: '100px', height: '100px'}} />
							}
						</h2>
						<span>
							{
								!this.props.editing &&
								<span>
									<i
										className="btn btn-primary fa fa-retweet"
										onClick={() => this.flip()}>
									</i>
									<i
										className="btn btn-primary fa fa-volume-up">
									</i>
								</span>
							}
							{
								this.props.editing &&
								<i
									className="btn btn-danger fa fa-trash"
									onClick={() => this.props.deleteCard(this.state.flashcard.id)}>
								</i>
							}
						</span>
					</div>
				</div>
			</div>
		)
	}
}