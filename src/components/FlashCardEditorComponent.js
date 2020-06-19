import React from "react";
import translateService from "../services/TranslateService";
import GetImageService from "../services/GetImageService";

export default class FlashCardEditorComponent extends React.Component {
	state = {
		search: "",
		result: "", 
		image: ""
	}

	doQuery(search) {
		const text = translateService.translateFrench(search)
			.then(res => {
				const text = res.responseData.translatedText
				console.log(text)
				this.setState({ result: text })
			})
		const image = GetImageService.getImage(search)
			.then(res => {
				console.log(res);
				const image = res.items[1].image.thumbnailLink;
				console.log(image); 
				this.setState({image: image}); 
			})
		return text

	}

	create() {
		const card = {
			english: this.state.search,
			french: this.state.result, 
			image: this.state.image
		}
		this.props.addCard(card)
		this.props.setCreating(false)
	}

	render() {
		return (
			<div>
				<h2>Create New Card</h2>
				<h5>Search for translation</h5>
				<div className="form-inline">
					<input className="form-control" type="text"
								 onChange={(event) => this.setState({
									 search: event.target.value
								 })}></input>
					<a className="btn btn-primary text-white"
						 onClick={
							 () => this.doQuery(this.state.search)}>
						Translate
					</a>
				</div>
				<br/>
				<h5>Preview of Flashcard</h5>

				<div className="row">
					<div className="col-7 col-sm-5 col-md-4 col-lg-3 col-xl-2">
						<div className="card">
							<h5 className="card-header">English</h5>
							<div className="card-body">
								<h5 className="card-title">{this.state.search}</h5>
							</div>
						</div>
					</div>
					<div className="col-7 col-sm-5 col-md-4 col-lg-3 col-xl-2">
						<div className="card">
							<h5 className="card-header">French</h5>
							<div className="card-body">
								<h5 className="card-title">{this.state.result}</h5>
							</div>
						</div>
					</div>
					<div className="col-7 col-sm-5 col-md-4 col-lg-3 col-xl-2">
						<div className="card">
							<h5 className="card-header">Image</h5>
							<div className="card-body">
								<h5 className="card-title">
								{
									this.state.image != "" && 
									<img src={this.state.image} style={{width: '100px', height: '100px'}} />
								}
								</h5>
							</div>
						</div>
					</div>

					<a className="btn btn-primary text-white"
						onClick={
							() => this.create()}>
						Create
        	</a>
				</div>

			</div>
		)
	}
}