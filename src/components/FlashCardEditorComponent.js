import React from "react";
import translateService from "../services/TranslateService";

export default class FlashCardEditorComponent extends React.Component {
	state = {
		search: "",
		result: ""
	}

	doQuery(search) {
		const text = translateService.translateFrench(search)
			.then(res => {
				const text = res.responseData.translatedText
				console.log(text)
				this.setState({ result: text })
			})
		return text

	}

	create() {
		const card = {
			english: this.state.search,
			french: this.state.result,
			_id: Math.floor(Math.random() * 301)
		}
		this.props.addCard(card)
		this.props.setCreating(false)
	}

	render() {
		return (
			<div>
				<h2>Create New Card</h2>
				<h5>Search for translation</h5>
				<input className="" type="text"
					onChange={(event) => this.setState({
						search: event.target.value
					})}></input>
				<button
					onClick={
						() => this.doQuery(this.state.search)}>
					Translate
        </button>
				<h5>Preview of Flashcard</h5>

				<div className="row">
					<div className="col-7 col-sm-5 col-md-4 col-lg-3 col-xl-2">
						<div className="card">
							<h5 className="card-header">Front</h5>
							<div className="card-body">
								<h5 className="card-title">{this.state.search}</h5>
							</div>
						</div>
					</div>
					<div className="col-7 col-sm-5 col-md-4 col-lg-3 col-xl-2">
						<div className="card">
							<h5 className="card-header">Back</h5>
							<div className="card-body">
								<h5 className="card-title">{this.state.result}</h5>
							</div>
						</div>
					</div>

					<button
						onClick={
							() => this.create()}>
						Create
        	</button>
				</div>

			</div>
		)
	}
}